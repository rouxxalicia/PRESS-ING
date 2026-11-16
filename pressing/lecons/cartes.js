/* Cartes mentales (repris de « Ma prépa ») : moteur de mise en page en sous-blocs reliés par des flèches. */
(function(){
const $ = s => document.querySelector(s);
const store = {
  get(k, d){ try{ const v = localStorage.getItem("cartes:"+k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem("cartes:"+k, JSON.stringify(v)); }catch(e){} }
};
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const fmt = s => esc(s).replace(/\[(a|d|w|n):([^\]]+)\]/g, (m,t,v)=>`<span class="${t}">${v}</span>`).replace(/\{e:([^{}]+)\}/g, '<span class="e">$1</span>').replace(/\{f:([^{}]+)\}/g, (m,v)=>'<span class="f">'+v.replace(/^([^=<]{1,60}?) = /, '<b>$1</b> = ')+'</span>').replace(/\s*\{!\}/g, '<i class="imp"></i>');
const plain = s => s.replace(/\[(a|d|w|n):([^\]]+)\]/g, "$2").replace(/\{(e|f):([^{}]+)\}/g, "$2").replace(/\s*\{!\}/g, "");
const vmFont = "Archivo";

const DEB = () => (window.ESH_DEBATS && L && window.ESH_DEBATS[L.id]) || [];
const items = () => L.vmaps.map(p=>({p})); /* les débats ont leurs fiches dans l'onglet Débats */
let L = null, vmIdx = 0, vmReal = null, vmBoxes = null, drawn = false;

function rawTree(){
  const lines = L.map.split("\n").filter(l=>l.trim());
  const root = {raw: lines[0].trim(), children: []}; const stack = [{n:root, ind:0}];
  for(const r of lines.slice(1)){
    const ind = r.match(/^ */)[0].length;
    while(stack[stack.length-1].ind >= ind) stack.pop();
    const n = {raw:r.trim(), children:[]}; stack[stack.length-1].n.children.push(n); stack.push({n, ind});
  }
  return root;
}
function vmFind(tree, path){
  let n = tree;
  for(const pre of path){ n = n.children.find(c=>plain(c.raw).startsWith(pre)); if(!n) return null; }
  return n;
}
function vmLabel(path){
  const p = path[0].replace(/\.$/,"");
  if(path.length===1) return p;
  const s = path[1].replace(/[).]$/,"");
  return /^\d/.test(s) ? `${p}.${s}` : `${p} · ${s}`;
}
function renderPicker(){
  $("#cm-picker").innerHTML = items().map((it,i)=>`<button type="button" class="cm-chip${it.deb?" cm-deb":""}" aria-pressed="${i===vmIdx}" data-k="${i}">${esc(it.deb ? "Débats · "+it.deb.title : vmLabel(it.p))}</button>`).join("");
}
/* ---------- Carte : arbre en sous-blocs reliés par des flèches ----------
   niveau 1 = titre bleu · 2 = sous-titre souligné · 3-4 = petits blocs d'idées */
const MAXD = 4;
/* découpe une ligne trop dense en petits blocs : « Auteur, Œuvre (date) » → idée → exemple… */
function splitTop(str, sep){
  const out = []; let depth = 0, cur = "";
  for(let i=0;i<str.length;i++){
    const ch = str[i];
    if(ch==="["||ch==="{") depth++; else if(ch==="]"||ch==="}") depth = Math.max(0, depth-1);
    if(depth===0 && str.startsWith(sep, i)){ out.push(cur); cur = ""; i += sep.length-1; continue; }
    cur += ch;
  }
  out.push(cur); return out.map(x=>x.trim()).filter(Boolean);
}
function explode(c){
  if(c.children.length) return c;
  const parts = splitTop(c.raw, " : ");
  const restTxt = plain(parts.slice(1).join(" : "));
  if(parts.length >= 2 && plain(parts[0]).length <= 90 && (/^\[a:/.test(parts[0]) || restTxt.length >= 32)){
    const rest = splitTop(parts.slice(1).join(" : "), " · ");
    return {raw: parts[0], children: rest.map(r=>({raw:r, children:[]}))};
  }
  const dots = splitTop(c.raw, " · ");
  if(dots.length >= 2 && plain(c.raw).length > 75) return {raw: dots[0], children: dots.slice(1).map(r=>({raw:r, children:[]}))};
  return c;
}
const flat = n => fmt(n.raw) + (n.children.length ? " : " + n.children.map(flat).join(" · ") : "");
function drawVm(){
  if(!L) return;
  if(vmIdx >= items().length) vmIdx = 0;
  store.set("map-"+L.id, vmIdx); renderPicker(); if(window.CartesAfterDraw) window.CartesAfterDraw();
  const cur = items()[vmIdx];
  if(!cur){ $("#cm-canvas").innerHTML = "<p>Pas encore de carte.</p>"; return; }
  if(cur.deb){ drawDeb(cur.deb); return; }
  const tree = rawTree(), path = cur.p;
  const part = vmFind(tree, [path[0]]), node = vmFind(tree, path);
  const canvas = $("#cm-canvas");
  canvas.style.setProperty("--f-map", `"${vmFont}", "Helvetica Neue", Arial, sans-serif`);
  if(!node){ canvas.innerHTML = "<p>Carte introuvable.</p>"; return; }
  const sup = path.length>1 ? plain(part.raw) : L.title;
  let html = `<svg class="vm-arrows" id="cm-arrows"></svg><div class="vm-box vm-center" data-id="0" data-d="0"><small>${esc(sup)}</small><span>${esc(plain(node.raw))}</span></div>`;
  let id = 0;
  const walk = (n, d, pid, k) => n.children.forEach((c, i) => {
    const my = ++id, kk = d===0 ? i : k, dd = d+1;
    if(dd===2 || dd===3) c = explode(c);
    const last = dd >= MAXD || !c.children.length;
    html += `<div class="vm-box vm-n vm-d${dd}${last?" lf":""}" data-id="${my}" data-d="${dd}" data-k="${kk}" data-p="${pid}"${!last?' tabindex="0"':""}>${dd>=MAXD ? flat(c) : fmt(c.raw)}</div>`;
    if(!last) walk(c, dd, my, kk);
  });
  walk(node, 0, 0, -1);
  canvas.innerHTML = html;
  /* mode révision : toucher un titre ou un sous-titre dévoile ce qui en part */
  const below = el => { const out = [], q = [el.dataset.id]; while(q.length){ const p = q.shift(); canvas.querySelectorAll(`.vm-n[data-p="${p}"]`).forEach(c=>{ out.push(c); q.push(c.dataset.id); }); } return out; };
  canvas.querySelectorAll(".vm-n").forEach(t=>{
    const tog = e=>{ if(!canvas.classList.contains("vm-hide")) return; if(e) e.stopPropagation();
      const ls = (t.classList.contains("vm-d1") ? [] : [t]).concat(below(t));
      const open = !ls.every(x=>x.classList.contains("open")); ls.forEach(x=>x.classList.toggle("open", open)); };
    t.addEventListener("click", tog); t.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); tog(e); } });
  });
  $("#cm-where").textContent = `${vmIdx+1} / ${items().length}`;
  const go = ()=>{ layoutVm(); vmScale(true); };
  if(document.fonts && document.fonts.load){ Promise.all([document.fonts.load(`17px "${vmFont}"`), document.fonts.load(`700 22px "${vmFont}"`)]).then(go, go); }
  go(); drawn = true;
}
/* ---------- Carte de débats : la question au milieu, « oui » à gauche, « non / nuance » à droite ---------- */
function drawDeb(M){
  const canvas = $("#cm-canvas");
  canvas.style.setProperty("--f-map", `"${vmFont}", "Helvetica Neue", Arial, sans-serif`);
  canvas.style.transform = ""; canvas.style.width = "1660px"; canvas.style.height = "auto";
  let html = `<div class="db-board"><div class="db-title">${esc(M.title)}${M.sub?` <small>${esc(M.sub)}</small>`:""}</div><div class="db-grid">`;
  M.debates.forEach((D,k)=>{
    const idea = g => g.t
      ? `<div class="db-idea db-group" tabindex="0"><div class="db-gh"><span class="db-s ${g.c}">${esc(g.a)} →</span> <span class="db-gt">${esc(g.t)}</span></div>${g.l.map(x=>`<div class="db-ln">${fmt(x)}</div>`).join("")}</div>`
      : `<div class="db-idea" tabindex="0"><span class="db-s ${g.c}">${esc(g.a)} →</span> ${fmt(g.l[0])}</div>`;
    /* arguments de même réponse et même sous-partie réunis en un seul bloc */
    const groups = list => { const o=[], m={}; list.forEach(i=>{ const key=i[3]?i[0]+"|"+i[3]:null; if(key&&m[key]) m[key].l.push(i[2]); else { const g={a:i[0],c:i[1],t:i[3]||"",l:[i[2]]}; o.push(g); if(key) m[key]=g; } }); return o; };
    html += `<div class="db-cl" data-k="${k}"><div class="db-col db-l">${groups(D.ideas.filter(i=>i[1]==="y")).map(idea).join("")}</div>`
         + `<div class="db-q" tabindex="0">${esc(D.q)}</div>`
         + `<div class="db-col db-r">${groups(D.ideas.filter(i=>i[1]!=="y")).map(idea).join("")}</div><svg class="db-svg"></svg></div>`;
  });
  canvas.innerHTML = html + "</div></div>";
  canvas.querySelectorAll(".db-idea").forEach(el=>{
    const t = e=>{ if(!canvas.classList.contains("vm-hide")) return; e.stopPropagation(); el.classList.toggle("open"); };
    el.addEventListener("click", t); el.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); t(e); } });
  });
  canvas.querySelectorAll(".db-q").forEach(q=>{
    const t = e=>{ if(!canvas.classList.contains("vm-hide")) return; const ls=[...q.parentNode.querySelectorAll(".db-idea")]; const open=!ls.every(x=>x.classList.contains("open")); ls.forEach(x=>x.classList.toggle("open",open)); };
    q.addEventListener("click", t); q.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); t(e); } });
  });
  $("#cm-where").textContent = `${vmIdx+1} / ${items().length}`;
  vmBoxes = null;
  const go = ()=>{ debArrows(); canvas.style.height = canvas.querySelector(".db-board").offsetHeight+"px"; vmScale(true); };
  if(document.fonts && document.fonts.load){ Promise.all([document.fonts.load(`16px "${vmFont}"`), document.fonts.load(`700 16px "${vmFont}"`)]).then(go, go); }
  go(); drawn = true;
}
function debArrows(){
  $("#cm-canvas").querySelectorAll(".db-cl").forEach(c=>{
    const q = c.querySelector(".db-q"), svg = c.querySelector(".db-svg");
    const qL = q.offsetLeft, qR = q.offsetLeft+q.offsetWidth, qY = q.offsetTop+q.offsetHeight/2;
    let out = "";
    c.querySelectorAll(".db-col").forEach(col=>{
      const left = col.classList.contains("db-l"), els = [...col.children], n = els.length;
      els.forEach((e,k)=>{
        const x1 = left ? qL-6 : qR+6, y1 = qY + (n>1 ? (k-(n-1)/2)*Math.min(9, q.offsetHeight/n) : 0);
        const ex = e.offsetLeft, ey = e.offsetTop; /* la carte (.db-cl) est le parent positionné */
        const x2 = left ? ex+e.offsetWidth+7 : ex-7, y2 = ey + Math.min(13, e.offsetHeight/2);
        const mx = (x1+x2)/2, f = v=>v.toFixed(1);
        const a = Math.atan2(0, x2-mx), h = 6;
        out += `<path class="sl" d="M${f(x1)},${f(y1)} C${f(mx)},${f(y1)} ${f(mx)},${f(y2)} ${f(x2)},${f(y2)}"/>`
             + `<path class="sh" d="M${f(x2)},${f(y2)} L${f(x2-h*Math.cos(a)+h*0.55*Math.sin(a))},${f(y2-h*Math.sin(a)-h*0.55*Math.cos(a))} L${f(x2-h*Math.cos(a)-h*0.55*Math.sin(a))},${f(y2-h*Math.sin(a)+h*0.55*Math.cos(a))} Z"/>`;
      });
    });
    svg.setAttribute("width", c.offsetWidth); svg.setAttribute("height", c.offsetHeight);
    svg.innerHTML = out;
  });
}
function layoutVm(){
  const canvas = $("#cm-canvas"), els = [...canvas.querySelectorAll(".vm-box")];
  if(!els.length || !$("#cm-viewport").clientWidth) return;
  const B = els.map(el=>({el, id:+el.dataset.id, d:+el.dataset.d, k:+(el.dataset.k ?? -1), p:+(el.dataset.p ?? -1), w:el.offsetWidth, h:el.offsetHeight, x:0, y:0, kids:[]}));
  const byId = {}; B.forEach(b=>byId[b.id]=b);
  B.forEach(b=>{ if(b.d>0){ b.par = byId[b.p]; b.par.kids.push(b); } });
  const C = B[0], EX = 1.3, T = C.kids;
  const sub = b => { const o=[b]; for(let i=0;i<o.length;i++) o.push(...o[i].kids); return o; };
  const wt = b => b._w ?? (b._w = Math.sqrt(b.w*b.h)/45 + b.kids.reduce((s,c)=>s+wt(c),0)*0.9);
  B.forEach(wt);
  const radExt = (b,th) => b.w*Math.abs(Math.cos(th)) + b.h*Math.abs(Math.sin(th));
  const tanExt = (b,th) => b.w*Math.abs(Math.sin(th)) + b.h*Math.abs(Math.cos(th));
  /* titres : un secteur chacun, proportionnel à ce qui en part */
  const tot = T.reduce((s,t)=>s+t._w,0) || 1;
  let acc = -Math.PI/2 - Math.PI*(T[0] ? T[0]._w : 1)/tot;
  T.forEach(t=>{ const sp = 2*Math.PI*t._w/tot; t.a0 = acc; t.a1 = acc+sp; acc += sp; t.th = (t.a0+t.a1)/2; });
  const big = Math.max(...T.map(t=>t._w), 1);
  T.forEach(t=>{ t.r = 70 + radExt(C,t.th)/2 + radExt(t,t.th)/2 + 20*Math.sqrt(T.length) + 40*Math.sqrt(t._w/big); t.sect = t; });
  /* descendre : chaque bloc reçoit une part du secteur de son parent */
  const place = p => {
    const ks = p.kids; if(!ks.length) return;
    const tw = ks.reduce((s,c)=>s+c._w,0) || 1;
    let span = p.a1 - p.a0;
    const need = ks.reduce((s,c)=>s + tanExt(c,p.th) + 16, 0);
    const base = p.r + radExt(p,p.th)/2 + 26 + Math.max(...ks.map(c=>radExt(c,p.th)))/2;
    if(p.d >= 2) span = Math.max(span, Math.min(need/base, span*2.6, 1.9));
    const a0 = p.th - span/2;
    let a = a0;
    ks.forEach(c=>{ const sp = span*c._w/tw; c.a0 = a; c.a1 = a+sp; a += sp; c.th = (c.a0+c.a1)/2; c.sect = p.sect; });
    const rNeed = need/Math.max(span, 0.05);
    ks.forEach((c,j)=>{
      const own = p.r + (radExt(p,c.th)+radExt(c,c.th))/2 + (c.d>=3 ? 22 : 30);
      c.r = Math.max(own, Math.min(rNeed, own + 110)) + (ks.length > 3 ? (j%2)*22 : 0);
    });
    ks.forEach(place);
  };
  T.forEach(place);
  B.forEach(b=>{ if(b.d===0) return; b.tx = Math.cos(b.th)*b.r*EX; b.ty = Math.sin(b.th)*b.r; b.x = b.tx; b.y = b.ty; });
  /* chaque sous-titre emporte ses idées en une petite liste rangée à côté de lui (bloc rigide) :
     les flèches restent courtes et ne traversent plus la carte */
  const G = 14, GX = 30, GY = 8;
  const SH = n => n._h ?? (n._h = Math.max(n.h, n.kids.reduce((s,c)=>s+SH(c),0) + GY*Math.max(0,n.kids.length-1)));
  const tidy = (n, dir) => {
    let y = n.ry - (n.kids.reduce((s,c)=>s+SH(c),0) + GY*Math.max(0,n.kids.length-1))/2;
    n.kids.forEach(c=>{ c.rx = n.rx + dir*(n.w/2 + GX + c.w/2); c.ry = y + SH(c)/2; y += SH(c) + GY; tidy(c, dir); });
  };
  const bodies = [{m:[C], x:0, y:0, w:C.w, h:C.h, mob:0}];
  T.forEach(t=>{ t.body = {m:[t], x:t.tx, y:t.ty, tx:t.tx, ty:t.ty, w:t.w, h:t.h, mob:.3, d:1}; bodies.push(t.body); });
  T.forEach(t=>t.kids.forEach(g=>{
    const dir = Math.abs(g.tx) > 40 ? Math.sign(g.tx) : (Math.sign(Math.cos(t.th)) || 1);
    g.rx = 0; g.ry = 0; tidy(g, dir);
    const m = sub(g);
    const x0 = Math.min(...m.map(n=>n.rx-n.w/2)), x1 = Math.max(...m.map(n=>n.rx+n.w/2));
    const y0 = Math.min(...m.map(n=>n.ry-n.h/2)), y1 = Math.max(...m.map(n=>n.ry+n.h/2));
    const ox = (x0+x1)/2, oy = (y0+y1)/2;
    /* le bloc s'éloigne du centre : le sous-titre reste à sa place prévue, la liste part vers l'extérieur */
    const body = {m, g, par:t.body, ox, oy, w:x1-x0, h:y1-y0, mob:1, d:2};
    body.tx = g.tx + ox; body.ty = g.ty + oy; body.x = body.tx; body.y = body.ty;
    bodies.push(body);
  }));
  const push = () => { for(let i=0;i<bodies.length;i++) for(let j=i+1;j<bodies.length;j++){
    const p=bodies[i], q=bodies[j], dx=q.x-p.x, dy=q.y-p.y, ox=(p.w+q.w)/2+G-Math.abs(dx), oy=(p.h+q.h)/2+G-Math.abs(dy);
    if(ox>0 && oy>0){ const s=p.mob+q.mob || 1;
      if(ox<oy){ const g=Math.sign(dx)||1; p.x-=g*ox*p.mob/s; q.x+=g*ox*q.mob/s; } else { const g=Math.sign(dy)||1; p.y-=g*oy*p.mob/s; q.y+=g*oy*q.mob/s; } } } };
  for(let it=0; it<500; it++){
    push();
    if(it<440) bodies.forEach(b=>{ if(!b.d) return;
      if(b.d===2){ /* le sous-titre reste près de son titre */
        const gx = b.x - b.ox, gy = b.y - b.oy, p = b.par, dx = gx-p.x, dy = gy-p.y, dd = Math.hypot(dx,dy)||1;
        const ideal = Math.abs(dx)/dd*(b.g.w+p.w)/2 + Math.abs(dy)/dd*(b.g.h+p.h)/2 + 34;
        if(dd>ideal){ const m=(dd-ideal)*0.2; b.x-=dx/dd*m; b.y-=dy/dd*m; } }
      const f = b.d===1 ? .05 : .015; if(it<360){ b.x += (b.tx-b.x)*f; b.y += (b.ty-b.y)*f; } });
    if(it<440) T.forEach(t=>{ /* le titre suit le centre de ses blocs */
      const ks = bodies.filter(b=>b.par===t.body); if(!ks.length) return;
      const mx = ks.reduce((s,b)=>s+b.x-b.ox,0)/ks.length, my = ks.reduce((s,b)=>s+b.y-b.oy,0)/ks.length;
      const dx = t.body.x, dy = t.body.y, dd = Math.hypot(dx,dy)||1, ux = dx/dd, uy = dy/dd;
      const proj = (mx-dx)*-uy + (my-dy)*ux; t.body.x += -uy*proj*0.02; t.body.y += ux*proj*0.02; });
  }
  bodies.forEach(b=>{
    if(b.d===2){ const gx = b.x-b.ox, gy = b.y-b.oy; b.m.forEach(n=>{ n.x = gx + n.rx; n.y = gy + n.ry; }); }
    else { b.m[0].x = b.x; b.m[0].y = b.y; } });
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  B.forEach(b=>{ minX=Math.min(minX,b.x-b.w/2); maxX=Math.max(maxX,b.x+b.w/2); minY=Math.min(minY,b.y-b.h/2); maxY=Math.max(maxY,b.y+b.h/2); });
  const P = 30, W = Math.ceil(maxX-minX+2*P), H = Math.ceil(maxY-minY+2*P);
  B.forEach(b=>{ b.x += P-minX; b.y += P-minY; b.el.style.transform = `translate(${(b.x-b.w/2).toFixed(1)}px,${(b.y-b.h/2).toFixed(1)}px)`; });
  canvas.style.width = W+"px"; canvas.style.height = H+"px";
  vmBoxes = B; drawArrows();
}
function edgePoint(b, tx, ty, pad){
  const dx=tx-b.x, dy=ty-b.y;
  const sx = dx ? (b.w/2+pad)/Math.abs(dx) : Infinity, sy = dy ? (b.h/2+pad)/Math.abs(dy) : Infinity;
  const s = Math.min(sx, sy); return [b.x+dx*s, b.y+dy*s];
}
function anchors(o, tx, ty, pad){
  const pts = [edgePoint(o, tx, ty, pad), [o.x, o.y-o.h/2-pad], [o.x, o.y+o.h/2+pad], [o.x-o.w/2-pad, o.y], [o.x+o.w/2+pad, o.y]];
  return pts.filter(([x,y])=> (x-o.x)*(tx-o.x) + (y-o.y)*(ty-o.y) > 0);
}
function bez(c, t){ const u=1-t; return [u*u*c.x1+2*u*t*c.qx+t*t*c.x2, u*u*c.y1+2*u*t*c.qy+t*t*c.y2]; }
function curveHits(c, a, b){
  const N = 28, M = 5; let hits = 0;
  for(let i=1;i<N;i++){
    const [x,y] = bez(c, i/N);
    for(const o of vmBoxes){
      const m = (o===a || o===b) ? -2 : M;
      if(Math.abs(x-o.x) < o.w/2+m && Math.abs(y-o.y) < o.h/2+m){ hits++; break; }
    }
  }
  return hits;
}
let DRAWN = [];
const sample = c => { const o=[]; for(let i=0;i<=16;i++) o.push(bez(c,i/16)); return o; };
function segX(p1,p2,p3,p4){ const d=(p2[0]-p1[0])*(p4[1]-p3[1])-(p2[1]-p1[1])*(p4[0]-p3[0]); if(!d) return false;
  const t=((p3[0]-p1[0])*(p4[1]-p3[1])-(p3[1]-p1[1])*(p4[0]-p3[0]))/d, u=((p3[0]-p1[0])*(p2[1]-p1[1])-(p3[1]-p1[1])*(p2[0]-p1[0]))/d;
  return t>0.02&&t<0.98&&u>0.02&&u<0.98; }
function curveCross(c){
  const s = sample(c); let n = 0;
  const bx0=Math.min(c.x1,c.x2,c.qx), bx1=Math.max(c.x1,c.x2,c.qx), by0=Math.min(c.y1,c.y2,c.qy), by1=Math.max(c.y1,c.y2,c.qy);
  for(const d of DRAWN){
    if(d.bb[0]>bx1||d.bb[1]<bx0||d.bb[2]>by1||d.bb[3]<by0) continue;
    let hit=false;
    for(let i=0;i<16&&!hit;i++) for(let j=0;j<16&&!hit;j++) if(segX(s[i],s[i+1],d[j],d[j+1])) hit=true;
    if(hit) n++;
  }
  return n;
}
function arrow(a, b, cls, bend, head, pa, pb){
  const SA = anchors(a, b.x, b.y, pa), SB = anchors(b, a.x, a.y, pb);
  const bends = [bend, 0, 0.12, -0.12, 0.24, -0.24, 0.36, -0.36];
  let best = null, bestScore = Infinity;
  for(const [x1,y1] of SA) for(const [x2,y2] of SB){
    const len = Math.hypot(x2-x1, y2-y1) || 1, mx=(x1+x2)/2, my=(y1+y2)/2;
    for(const bd of bends){
      const c = {x1,y1,x2,y2, qx: mx-(y2-y1)*bd, qy: my+(x2-x1)*bd};
      const score = curveHits(c, a, b)*1000 + curveCross(c)*400 + Math.abs(bd)*50 + len*0.1;
      if(score < bestScore){ bestScore = score; best = c; }
    }
  }
  if(!best) return "";
  { const sm = sample(best); sm.bb=[Math.min(best.x1,best.x2,best.qx),Math.max(best.x1,best.x2,best.qx),Math.min(best.y1,best.y2,best.qy),Math.max(best.y1,best.y2,best.qy)]; DRAWN.push(sm); }
  const {x1,y1,x2,y2,qx,qy} = best;
  const ang = Math.atan2(y2-qy, x2-qx), a1 = ang+2.7, a2 = ang-2.7;
  const f = v=>v.toFixed(1);
  return `<path class="${cls[0]}" d="M${f(x1)},${f(y1)} Q${f(qx)},${f(qy)} ${f(x2)},${f(y2)}"/><path class="${cls[1]}" d="M${f(x2)},${f(y2)} L${f(x2+head*Math.cos(a1))},${f(y2+head*Math.sin(a1))} L${f(x2+head*Math.cos(a2))},${f(y2+head*Math.sin(a2))} Z"/>`;
}
function drawArrows(){
  const svg = $("#cm-arrows"); if(!svg || !vmBoxes) return;
  let out = ""; DRAWN = [];
  [...vmBoxes].sort((p,q)=>p.d-q.d).forEach(b=>{
    if(!b.par) return;
    const j = b.par.kids.indexOf(b);
    if(b.d===1) out += arrow(b.par, b, ["ln","hd"], (b.k%2?1:-1)*0.1, 9, 4, 6);
    else out += arrow(b.par, b, ["sl","sh"], (j%2?1:-1)*0.1, b.d===2 ? 7 : 5.5, 3, 3);
  });
  const c = $("#cm-canvas"); svg.setAttribute("width", c.offsetWidth); svg.setAttribute("height", c.offsetHeight);
  svg.innerHTML = out;
}
function vmScale(recenter){
  const vp = $("#cm-viewport"), canvas = $("#cm-canvas"), sizer = $("#cm-sizer");
  if(!vp.clientWidth || !canvas.offsetWidth) return;
  const fsOn = !!vp.closest(".fs-on");
  const fit = fsOn ? Math.min(2.2, (vp.clientWidth-2)/canvas.offsetWidth, (vp.clientHeight-2)/canvas.offsetHeight) : Math.min(1, (vp.clientWidth-2)/canvas.offsetWidth);
  if(vmReal===null) vmReal = !fsOn && fit < 0.55;
  const s = vmReal ? 1 : fit;
  canvas.style.transform = s!==1 ? `scale(${s})` : "";
  sizer.style.width = canvas.offsetWidth*s+"px"; sizer.style.height = canvas.offsetHeight*s+"px";
  const z = $("#cm-zoom");
  z.textContent = vmReal ? "Ajuster à l'écran" : "Taille réelle";
  z.hidden = Math.abs(fit-1) < 0.03;
  if(!recenter) return;
  if(s===1 && fit<1 && vmBoxes){ const c=vmBoxes[0]; vp.scrollLeft = c.x - vp.clientWidth/2; vp.scrollTop = Math.max(0, c.y - vp.clientHeight/2); }
  else { vp.scrollLeft = 0; vp.scrollTop = 0; }
}
const step = d => { const n = items().length || 1; vmIdx = (vmIdx + d + n) % n; vmReal = null; drawVm(); };
window.addEventListener("resize", ()=>{ if(document.getElementById("cm-canvas")) vmScale(); });
/* ---------- Plein écran ---------- */
let fsBox = null, viaApi = false;
function fsLabel(){ const b = $("#cm-fs"); b.textContent = fsBox ? "✕ Quitter" : "⛶ Plein écran"; b.setAttribute("aria-pressed", !!fsBox); }
function refit(){ vmReal = false; setTimeout(()=>{ layoutVm(); vmScale(true); }, 60); }
function fsEnter(){
  fsBox = $("#cm-stage"); fsBox.classList.add("fs-on"); document.body.classList.add("fs-lock"); viaApi = false;
  const el = fsBox;
  if(el.requestFullscreen){ el.requestFullscreen().then(()=>{ viaApi = true; refit(); }).catch(()=>{}); }
  fsLabel(); refit();
}
function fsLeave(){
  if(!fsBox) return;
  fsBox.classList.remove("fs-on"); document.body.classList.remove("fs-lock"); fsBox = null;
  if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(()=>{});
  fsLabel(); vmReal = null; setTimeout(()=>{ layoutVm(); vmScale(true); }, 60);
}
document.addEventListener("fullscreenchange", ()=>{ if(!document.fullscreenElement && fsBox && viaApi) fsLeave(); });
document.addEventListener("keydown", e=>{
  if(!document.getElementById("cm-canvas")) return;
  if(e.target.closest && e.target.closest("input,textarea")) return;
  if(e.key==="Escape" && fsBox) fsLeave();
  else if(e.key==="ArrowRight"){ e.preventDefault(); step(1); if(fsBox) refit(); }
  else if(e.key==="ArrowLeft"){ e.preventDefault(); step(-1); if(fsBox) refit(); }
});


window.Cartes = {
  mount(lesson, idx){
    L = lesson; vmReal = null; vmBoxes = null; fsBox = null;
    vmIdx = idx != null ? idx : store.get("map-"+L.id, 0);
    $("#cm-picker").addEventListener("click", e=>{ const b = e.target.closest("button[data-k]"); if(!b) return; vmIdx = +b.dataset.k; vmReal = null; drawVm(); });
    $("#cm-prev").addEventListener("click", ()=>step(-1));
    $("#cm-next").addEventListener("click", ()=>step(1));
    $("#cm-hide").addEventListener("click", e=>{
      const on = e.currentTarget.getAttribute("aria-pressed")!=="true";
      e.currentTarget.setAttribute("aria-pressed", on); $("#cm-canvas").classList.toggle("vm-hide", on);
      $("#cm-canvas").querySelectorAll(".vm-n.open,.db-idea.open").forEach(c=>c.classList.remove("open"));
    });
    $("#cm-zoom").addEventListener("click", ()=>{ vmReal = !vmReal; vmScale(true); });
    $("#cm-fs").addEventListener("click", ()=> fsBox ? fsLeave() : fsEnter());
    requestAnimationFrame(()=>drawVm());
  },
  count(lesson){ return lesson.vmaps.length + ((window.ESH_DEBATS||{})[lesson.id]||[]).length; },
  leave(){ if(fsBox) fsLeave(); }
};
})();

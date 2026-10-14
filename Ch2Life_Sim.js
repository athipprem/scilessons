/* Ch2Life_Sim.js: the Cell Life Simulator (both Unit 53 lessons), the tap-and-place order widget and the patch race.
   No lesson wording here: every label and caption is read from <span data-k="..."> in the page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext span[data-k="'+k+'"]');return e?e.textContent:''}
function SP(){return window.SIM_SPEED||1}
function show(e,on){if(e) e.style.display=on?'':'none'}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
var COL=['#e8710a','#37474f','#2e9c3f','#7b4fb0'];
var CELLF='#fff1e0', CELLS='#c2540a', NUCF='#eceff1', NUCS='#546e7a', GREEN='#43a047', RED='#d32f2f';
var P=[[-.5,-.35,25],[.45,-.4,-30],[-.4,.45,-50],[.5,.4,40]];
function f1(x){return x.toFixed(1)}
function thread(cx,cy,ang,len,col,w){var a=ang*Math.PI/180,dx=Math.cos(a)*len/2,dy=Math.sin(a)*len/2;
  return '<line x1="'+f1(cx-dx)+'" y1="'+f1(cy-dy)+'" x2="'+f1(cx+dx)+'" y2="'+f1(cy+dy)+'" stroke="'+col+'" stroke-width="'+w+'" stroke-linecap="round"/>'}
function xmark(cx,cy,s,col,w){return thread(cx,cy,40,s,col,w)+thread(cx,cy,-40,s,col,w)}
function ell(o,fill,stroke,sw){
  if(o.t==='r') return '<rect x="'+f1(o.x)+'" y="'+f1(o.y)+'" width="'+f1(o.w)+'" height="'+f1(o.h)+'"'+(o.rot?' transform="rotate('+f1(o.rot)+' '+f1(o.x+o.w/2)+' '+f1(o.y+o.h/2)+')"':'')+' fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'"/>';
  return '<ellipse cx="'+f1(o.cx)+'" cy="'+f1(o.cy)+'" rx="'+f1(o.rx)+'" ry="'+f1(o.ry)+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'"/>';}
function blob(list,fill,stroke,sw){var s='';list.forEach(function(o){s+=ell(o,stroke,stroke,sw*2)});list.forEach(function(o){s+=ell(o,fill,'none',0)});return s}
function E(cx,cy,rx,ry){return {t:'e',cx:cx,cy:cy,rx:rx,ry:ry}}
function nucleus(cx,cy,nr){return '<circle cx="'+f1(cx)+'" cy="'+f1(cy)+'" r="'+f1(nr)+'" fill="'+NUCF+'" stroke="'+NUCS+'" stroke-width="2.5"/>'}
function threads(cx,cy,nr,w){var s='';for(var i=0;i<4;i++) s+=thread(cx+P[i][0]*nr*.5,cy+P[i][1]*nr*.5,P[i][2],nr*.82,COL[i],w||3.4);return s}
function xs(cx,cy,nr){var s='';for(var i=0;i<4;i++) s+=xmark(cx+P[i][0]*nr*.55,cy+P[i][1]*nr*.55,nr*.42,COL[i],3);return s}
function arc(a0,a1,r,cx,cy){function pt(a){var t=(a-90)*Math.PI/180;return [cx+r*Math.cos(t),cy+r*Math.sin(t)]}
  var p0=pt(a0),p1=pt(a1);return 'M'+f1(p0[0])+','+f1(p0[1])+' A'+r+','+r+' 0 '+((a1-a0)>180?1:0)+' 1 '+f1(p1[0])+','+f1(p1[1])}
function svgWrap(inner,vb){return '<svg viewBox="'+(vb||'0 0 420 372')+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor,extra){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'start')+'"'+(extra||'')+'>'+s+'</text>'}

/* ---------------- body cell ---------------- */
var G=4800, D=3400, EN=1800, CX=210, CY=176;
function plainCell(cx,cy,r){var nr=r*.52;return blob([E(cx,cy,r,r)],CELLF,CELLS,3.5)+nucleus(cx,cy,nr)+threads(cx,cy,nr)}
function dividing(cx,cy,R,f){
  var nr=R*.52,s='';
  if(f<.34){
    var g=f/.34;
    s+=blob([E(cx,cy,R,R)],CELLF,CELLS,3.5)+nucleus(cx,cy,nr)+(g<.2?threads(cx,cy,nr):xs(cx,cy,nr));
  } else if(f<.67){
    var h=(f-.34)/.33;
    s+=blob([E(cx,cy,R*(1+.3*h),R*(1-.08*h))],CELLF,CELLS,3.5);
    s+='<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+f1(nr*(1+.9*h))+'" ry="'+f1(nr*(1-.1*h))+'" fill="'+NUCF+'" stroke="'+NUCS+'" stroke-width="2.5"/>';
    for(var i=0;i<4;i++){var dy=P[i][1]*nr*.5*(1-.3*h),dx=P[i][0]*nr*.3*(1-.5*h);
      s+=thread(cx-h*R*.5+dx,cy+dy,P[i][2],nr*.7,COL[i],3.2)+thread(cx+h*R*.5+dx,cy+dy,P[i][2],nr*.7,COL[i],3.2);}
  } else {
    var k=(f-.67)/.33, d=R*(.28+.62*k), lr=R*.74, nr2=R*.4, parts=[E(cx-d,cy,lr,lr),E(cx+d,cy,lr,lr)];
    if(k<1) parts.push({t:'r',x:cx-d,y:cy-R*.6*(1-k),w:2*d,h:2*R*.6*(1-k)});
    s+=blob(parts,CELLF,CELLS,3.5);
    [-d,d].forEach(function(o){s+=nucleus(cx+o,cy,nr2)+threads(cx+o,cy,nr2,2.8)});
  }
  return s;
}
function twoCells(cx,cy){var s=blob([E(cx-58,cy,46,46)],CELLF,CELLS,3.5)+blob([E(cx+58,cy,46,46)],CELLF,CELLS,3.5);
  [-58,58].forEach(function(o){s+=nucleus(cx+o,cy,24)+threads(cx+o,cy,24,3.2)});return s}
function ringHand(ang){
  var rr=118,s='<g fill="none" stroke-width="16"><path d="'+arc(0,324,rr,CX,CY)+'" stroke="'+GREEN+'"/><path d="'+arc(324,360,rr,CX,CY)+'" stroke="'+RED+'"/></g>';
  var t=(ang-90)*Math.PI/180, x1=CX+94*Math.cos(t), y1=CY+94*Math.sin(t), x2=CX+132*Math.cos(t), y2=CY+132*Math.sin(t);
  return s+'<line x1="'+f1(x1)+'" y1="'+f1(y1)+'" x2="'+f1(x2)+'" y2="'+f1(y2)+'" stroke="#263238" stroke-width="5" stroke-linecap="round"/><circle cx="'+f1(x2)+'" cy="'+f1(y2)+'" r="7" fill="#263238"/>';
}
function bodySVG(e,slow){
  var ang=0,content,nr=18;
  if(e<0) {content=plainCell(CX,CY,46);nr=24}
  else if(e<G){var f=e/G;ang=324*f;var r=46+18*f;content=plainCell(CX,CY,r);nr=r*.52}
  else if(e<G+D){var f2=(e-G)/D;ang=324+36*f2;content=dividing(CX,CY,64,f2);nr=33}
  else {content=twoCells(CX,CY);ang=0;nr=24}
  var s=txt(CX,16,T('lab-chromo'),14,'#37474f',800,'middle');
  s+='<line x1="'+CX+'" y1="24" x2="'+CX+'" y2="'+f1(CY-nr-3)+'" stroke="#546e7a" stroke-width="2" stroke-dasharray="4 4"/>';
  s+=ringHand(ang)+content;
  s+='<rect x="30" y="318" width="16" height="16" rx="3" fill="'+GREEN+'"/>'+txt(54,331,T('lg1'),14,'#1b5e20',800)+txt(54,349,T('lg2'),13.5,'#37474f',600,'start',' font-style="italic"');
  s+='<rect x="30" y="362" width="16" height="16" rx="3" fill="'+RED+'"/>'+txt(54,375,T('ld'),14,'#b71c1c',800);
  if(slow) s+=txt(140,375,T('slow'),12.5,'#b71c1c',600,'start',' font-style="italic"');
  return svgWrap(s,'0 0 420 392');
}
/* ---------------- photo ---------------- */
var PHOTO_N=[2,2,3];
function photoSVG(n){
  var idx=[];while(idx.length<n){var k=Math.floor(Math.random()*20);if(idx.indexOf(k)<0) idx.push(k)}
  var s='';
  for(var j=0;j<4;j++)for(var i=0;i<5;i++){
    var k=j*5+i,cx=48+i*81,cy=52+j*74;
    if(idx.indexOf(k)>=0){
      s+=blob([E(cx-12,cy,17,17),E(cx+12,cy,17,17)],CELLF,RED,3.5)+xmark(cx-7,cy,11,COL[0],3)+xmark(cx+7,cy,11,COL[1],3);
    } else {
      var r=18+Math.floor(Math.random()*8),nr=r*.5;
      s+=blob([E(cx,cy,r,r)],CELLF,CELLS,3)+nucleus(cx,cy,nr)+threads(cx,cy,nr,2.2);
    }
  }
  s+=txt(210,358,T('photo-key'),13,'#b71c1c',700,'middle');
  return {svg:svgWrap(s),n:n};
}
/* ---------------- yeast ---------------- */
var YT=8400, MX=150, MY=205;
function yeastSVG(p){
  var s='',b=0,rm=[88,76],bx,by,q=0,g=0;
  if(p<.22) b=44*(p/.22); else b=44;
  var ang=-25*Math.PI/180;
  function bpos(d){return [MX+d*Math.cos(ang),MY+d*Math.sin(ang)]}
  var sep=0; if(p>.7){sep=(p-.7)/.3}
  var dd=(p<.22)?(60+56*(p/.22)):(116+30*sep);
  var bp=bpos(dd); bx=bp[0]; by=bp[1];
  var parts=[E(MX,MY,rm[0],rm[1])];
  if(b>3) parts.push(E(bx,by,b,b*.95));
  if(p>.7&&sep<1){var nh=2*b*.62*(1-sep),mid=bpos(dd/2);parts.push({t:'r',x:mid[0]-dd/2,y:mid[1]-nh/2,w:dd,h:nh,rot:-25})}
  s+=blob(parts,CELLF,CELLS,3.5);
  s+=nucleus(MX,MY,36);
  g=(p<.22)?0:Math.min(1,(p-.22)/.23); q=(p<.45)?0:Math.min(1,(p-.45)/.25);
  var nrm=36;
  if(p<.22) s+=threads(MX,MY,nrm,3.4);
  else if(q<=0){ s+=xs(MX,MY,nrm*1.1); }
  else {
    s+=nucleus(bx,by,Math.max(8,b*.42));
    for(var i=0;i<4;i++){
      var ox=MX+P[i][0]*nrm*.55, oy=MY+P[i][1]*nrm*.55;
      var tx=bx+P[i][0]*b*.42*.5, ty=by+P[i][1]*b*.42*.5;
      s+=thread(ox,oy,40,nrm*.46,COL[i],3);
      s+=thread(ox+(tx-ox)*q,oy+(ty-oy)*q,-40,nrm*.46,COL[i],3);
    }
  }
  s+=txt(210,352,T('lab-yeast'),15,'#4a2205',800,'middle','');
  return svgWrap(s,'0 70 420 300');
}
function yeastCap(p){ if(p<=0) return T('y0'); if(p<.22) return T('y1'); if(p<.45) return T('y2'); if(p<.7) return T('y3'); return T('y4'); }
/* ---------------- plant ---------------- */
function clock(cx,cy,r,cls){
  return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" stroke="'+GREEN+'" stroke-width="'+(r>14?6:5)+'"/><path d="'+arc(324,360,r,cx,cy)+'" fill="none" stroke="'+RED+'" stroke-width="'+(r>14?6:5)+'"/>'+
   '<g class="'+cls+'" style="transform-origin:'+cx+'px '+cy+'px"><line x1="'+cx+'" y1="'+cy+'" x2="'+cx+'" y2="'+(cy-r+2)+'" stroke="#263238" stroke-width="3" stroke-linecap="round"/></g>';
}
function plantSVG(){
  var s='<rect x="0" y="200" width="420" height="172" fill="#e6d3b8"/><line x1="0" y1="200" x2="420" y2="200" stroke="#8a6a3a" stroke-width="3"/>';
  s+='<path d="M210,200 L210,78" stroke="#3a8a3a" stroke-width="10" stroke-linecap="round"/>';
  s+='<path d="M210,130 C170,116 146,126 138,142 C164,150 196,146 210,130Z" fill="#6cc26c" stroke="#2f7a2a" stroke-width="2"/>';
  s+='<path d="M210,112 C250,98 276,106 282,122 C256,132 226,128 210,112Z" fill="#6cc26c" stroke="#2f7a2a" stroke-width="2"/>';
  s+='<g stroke="#8a5a2a" stroke-width="6" stroke-linecap="round" fill="none"><path d="M210,200 L210,326"/><path d="M210,236 C190,262 168,282 150,300"/><path d="M210,244 C230,266 254,284 270,300"/></g>';
  s+='<circle cx="210" cy="60" r="30" fill="#ffd54f" opacity=".5"/><circle cx="210" cy="338" r="30" fill="#ffd54f" opacity=".5"/><circle cx="150" cy="306" r="20" fill="#ffd54f" opacity=".5"/><circle cx="270" cy="306" r="20" fill="#ffd54f" opacity=".5"/>';
  s+=clock(210,60,19,'spinF')+clock(210,338,19,'spinF')+clock(150,306,13,'spinF')+clock(270,306,13,'spinF');
  s+=clock(210,150,13,'spinS')+clock(210,262,13,'spinS');
  s+=txt(236,56,T('lab-shoot'),14,'#4a2205',800)+txt(236,342,T('lab-root'),14,'#4a2205',800)+txt(232,154,T('lab-mid'),13,'#37474f',700)+txt(232,266,T('lab-mid'),13,'#37474f',700);
  return svgWrap(s);
}

/* ---------------- simulator controller ---------------- */
function initSim(el){
  var st={mode:el.getAttribute('data-mode')||'body',need:el.getAttribute('data-need')||'',caps:el.getAttribute('data-caps')!=='0',
          running:false,photo:false,photos:0,loops:0,buds:0,be:-1,yp:0,done:false,pn:0,slow:false};
  var host=$('.simsvg',el), cap=$('.simcap',el), cnt=$('.simcnt',el), bPlay=$('.sPlay',el), bPhoto=$('.sPhoto',el), bBack=$('.sBack',el), tabs=$$('.mode',el);
  function bodyCap(e){
    if(!st.caps) return (e<0&&!st.done)?T('cap-idle'):'';
    if(e<0) return st.done?T('cap-again'):T('cap-idle');
    if(e<G) return T('cap-grow');
    if(e<G+D){var f=(e-G)/D;return f<.34?T('cap-copy'):(f<.67?T('cap-pull'):T('cap-split'))}
    return T('cap-again');
  }
  function paint(){
    tabs.forEach(function(t){t.classList.toggle('on',t.getAttribute('data-mode')===st.mode)});
    show(bBack,false);
    if(st.mode==='plant'){host.innerHTML=plantSVG();cap.textContent=T('cap-plant');cnt.textContent='';show(bPlay,false);show(bPhoto,false);return}
    if(st.mode==='yeast'){host.innerHTML=yeastSVG(st.yp);cap.textContent=yeastCap(st.yp);cnt.textContent=(st.yp>=1)?T('cnt-y1'):T('cnt-y0');show(bPlay,true);show(bPhoto,false);bPlay.disabled=st.running;return}
    if(st.photo){var ph=st.pdata;host.innerHTML=ph.svg;cap.textContent=T('cap-photo');cnt.textContent=T('cnt-photo').replace('{n}',ph.n);show(bPlay,false);show(bPhoto,true);show(bBack,true);bPhoto.disabled=false;return}
    host.innerHTML=bodySVG(st.be,st.be>=G&&st.be<G+D);cap.textContent=bodyCap(st.be);cnt.textContent='';
    show(bPlay,true);show(bPhoto,!!bPhoto);bPlay.disabled=st.running;if(bPhoto) bPhoto.disabled=st.running;
  }
  function run(){
    if(st.running) return; st.running=true;
    var t0=performance.now();
    function frame(now){
      var el_=(now-t0)*SP();
      if(st.mode==='yeast'){
        st.yp=Math.min(1,el_/YT); paint();
        if(st.yp>=1){st.running=false;st.buds++;paint();if(st.need==='bud') pass(el);return}
      } else {
        if(el_>=G+D+EN){st.running=false;st.be=-1;st.done=true;st.loops++;paint();if(st.need==='loop') pass(el);return}
        st.be=el_; paint();
      }
      st.raf=requestAnimationFrame(frame);
    }
    if(st.mode==='yeast') st.yp=0; else {st.be=0;st.done=false}
    st.raf=requestAnimationFrame(frame);
  }
  if(bPlay) bPlay.onclick=run;
  if(bPhoto) bPhoto.onclick=function(){
    var n=(st.photos<PHOTO_N.length)?PHOTO_N[st.photos]:[1,2,3][Math.floor(Math.random()*3)];
    st.photo=true; st.pdata=photoSVG(n); st.photos++; paint();
    if(st.need==='photo3'&&st.photos>=3) pass(el);
  };
  if(bBack) bBack.onclick=function(){st.photo=false;paint()};
  tabs.forEach(function(t){t.onclick=function(){
    if(st.running) return; st.mode=t.getAttribute('data-mode'); st.photo=false;
    if(st.mode==='yeast') st.yp=0; paint();}});
  paint();
}
$$('.sim').forEach(initSim);

/* ---------------- tap-and-place order widget ---------------- */
$$('.ordq').forEach(function(o){
  var cards=$$('.ocard',o), slots=$$('.oslot',o), fb=$('.fb',o), chk=$('.ochk',o), sel=null, ans=o.getAttribute('data-ans').split(',');
  function used(c){return slots.some(function(s){return s.getAttribute('data-got')===c.getAttribute('data-i')})}
  function sync(){cards.forEach(function(c){c.classList.toggle('used',used(c)); if(used(c)) c.classList.remove('sel')})}
  cards.forEach(function(c){c.onclick=function(){
    if(o.getAttribute('data-done')==='1'||used(c)) return;
    cards.forEach(function(x){x.classList.remove('sel')}); c.classList.add('sel'); sel=c;}});
  slots.forEach(function(s){s.onclick=function(){
    if(o.getAttribute('data-done')==='1') return;
    if(s.getAttribute('data-got')){s.removeAttribute('data-got');$('.st',s).textContent='';sync();return}
    if(!sel) return;
    s.setAttribute('data-got',sel.getAttribute('data-i')); $('.st',s).textContent=sel.textContent; sel.classList.remove('sel'); sel=null; sync();}});
  chk.onclick=function(){
    if(o.getAttribute('data-done')==='1') return;
    if(slots.some(function(s){return !s.getAttribute('data-got')})){fb.className='fb show no';fb.textContent=T('ord-fill');return}
    var ok=slots.every(function(s,k){return s.getAttribute('data-got')===ans[k]});
    if(ok){o.setAttribute('data-done','1');slots.forEach(function(s){s.classList.add('ok')});chk.disabled=true;
      fb.className='fb show ok';fb.textContent='✔ '+(o.getAttribute('data-why')||'');pass(o);}
    else{fb.className='fb show no';fb.textContent='✘ '+T('ord-no');
      slots.forEach(function(s){s.removeAttribute('data-got');$('.st',s).textContent=''});sel=null;sync();}
  };
});

/* ---------------- patch race ---------------- */
$$('.racebox').forEach(function(rb){
  var sCells=+rb.getAttribute('data-s-cells'), sLoop=+rb.getAttribute('data-s-loop');
  var hS=$('.pS',rb), hB=$('.pB',rb), nS=$('.nS',rb), nB=$('.nB',rb), run=$('.rcRun',rb), sl1=$('.rcCells',rb), sl2=$('.rcLoop',rb),
      v1=$('.vCells',rb), v2=$('.vLoop',rb), vu=$('.vUnit',rb), win=$('.rcWin',rb), cap=$('.rcCap',rb), LOOPS=[1,2,4], runs=0, busy=false, timer=0;
  function bigCells(){return +sl1.value}
  function bigLoop(){return LOOPS[+sl2.value-1]}
  function dots(n,newN,hl){
    var s='',cols=15,k,total=n+newN;
    for(k=0;k<total;k++){
      var x=8+(k%cols)*12.4,y=8+Math.floor(k/cols)*12.4, isNew=k>=n, isHl=(!isNew&&k<hl);
      s+='<circle cx="'+f1(x)+'" cy="'+f1(y)+'" r="4.6" fill="'+(isNew?'#e8710a':CELLF)+'" stroke="'+(isNew?'#9a3d00':(isHl?'#e8710a':CELLS))+'" stroke-width="'+(isHl?2.6:1.4)+'"/>';
      if(!isNew) s+='<circle cx="'+f1(x)+'" cy="'+f1(y)+'" r="1.6" fill="'+NUCS+'"/>';
    }
    return '<svg viewBox="0 0 190 140" xmlns="'+NS+'">'+s+'</svg>';
  }
  function setNums(){v1.textContent=bigCells(); v2.textContent=bigLoop(); vu.textContent=T(bigLoop()===1?'day':'days')}
  function reset(){ if(timer) clearInterval(timer); busy=false; run.disabled=false;
    setNums(); hS.innerHTML=dots(sCells,0,0); hB.innerHTML=dots(bigCells(),0,0); nS.textContent='0'; nB.textContent='0'; win.textContent=''; cap.textContent=''; }
  sl1.oninput=reset; sl2.oninput=reset;
  run.onclick=function(){
    if(busy) return; busy=true; run.disabled=true; win.textContent=''; cap.textContent='';
    var newS=Math.round(sCells/sLoop), newB=Math.round(bigCells()/bigLoop()), step=0, maxN=Math.max(newS,newB), bc=bigCells();
    hS.innerHTML=dots(sCells,0,newS); hB.innerHTML=dots(bc,0,newB);
    timer=setInterval(function(){
      step++; var a=Math.min(step,newS), b=Math.min(step,newB);
      hS.innerHTML=dots(sCells,a,newS); hB.innerHTML=dots(bc,b,newB); nS.textContent=a; nB.textContent=b;
      if(step>=maxN){clearInterval(timer);busy=false;run.disabled=false;runs++;
        win.textContent=newS>newB?T('win-s'):(newB>newS?T('win-b'):T('win-t'));
        cap.textContent=bigLoop()>sLoop?T('cap-fast'):T('cap-same');
        if(runs>=2) pass(rb);}
    },Math.max(8,70/SP()));
  };
  reset();
});
})();

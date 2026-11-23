/* Ch4MockB_Sim.js - behaviour and feedback lines for the warm-up and the Fix-It lesson. Widgets: job sort on a lily, pot builder with predict-first,
   overcrowding tray, two-ideas checker, the seed counter (No seed yet), the zoom sorter (Flower or capsule), the cut-and-dig scene (Can a banana seed grow),
   step ladders, three self-checks with route-back buttons, count-twice tapper. Every record goes to localStorage: sciU66Warm and sciU66Lesson. */
var IDMSG={
  anther:'Yes. The anther makes pollen. Pollen is made here, so this is the part that gives pollen away.',
  stigma:'Yes. The stigma catches pollen. Pollination is the transfer of pollen from the anther to the stigma.'
};
var MSG={
  sortDone:'Yes. The anther makes pollen. The stigma catches pollen. Two parts, two jobs: made here, caught there.',
  potW:'No water, no growth. Seeds need water, air and warmth.',
  potA:'No air, no growth. Seeds need water, air and warmth.',
  potT:'Too cold, no growth. Seeds need water, air and warmth.',
  potL:'It grows. Light is not needed for a seed to germinate.',
  potDone:'Remember: seeds need water, air and warmth. Light is not needed. Take away water, air or warmth and nothing grows. Take away light and it still grows.',
  trayOk:'Yes: overcrowding. Too many young plants in one place compete for water, light and nutrients.',
  trayNo:'Not the book word yet. Too many plants packed in one place. Use a naming word that starts with over.',
  wf:'Rule: after is called, use a naming word. After to, use a doing word.',
  twoOk:'Two ticks. A full answer says what happens and where it ends up.',
  twoOne:'One idea so far. A full answer says what happens and where it ends up. Add the missing one.',
  twoNone:'Not yet. Say what happens to the seed, and say where it ends up.',
  d1pol:'Pollen is on the stigma. That is pollination. The counter still says 0: no seed yet. Now try to blow the seed away.',
  d1grey:'You cannot disperse a seed that does not exist yet. The counter says 0, so the button stays grey.',
  d1tube:'The pollen grows a tube down to the ovule. A male cell fuses with a female cell inside the ovule, and the ovary holds the ovule. Fertilisation happens inside the flower. The counter says 1: a seed exists.',
  d1blow:'Now the seed can leave. A seed exists, so dispersal can come next. Order: pollination, fertilisation, seed dispersal, germination.',
  d1wait:'First tap a pollen grain, then tap the stigma.',
  z1:'Moss on a log, seen from the side. Thin stalks stand up from the mat. Zoom in.',
  z2:'At x10 the stalk tops look like buds. Is a bud a flower? Zoom in once more.',
  z3:'At x40 a capsule opens and puffs out dust. The dust is spores. Now check for flower parts.',
  d2done:'A moss capsule has no petals, no anther and no stigma. Moss has no flowers. The capsule makes spores, not seeds.',
  d2need:'Zoom in to x40 first, then look.',
  b1:'Tiny black dots. Are they seeds that can grow? Plant them and see.',
  b2:'Weeks go by. Nothing grows. The bananas we eat have no seeds that can grow.',
  b3:'Dig down. A young plant stands next to the old one. Tap Lift.',
  b4:'They come up together. The young plant is joined to the parent at the base. It is a sucker, not a seedling. Suckers and underground stems are plant parts, not seeds.',
  cntOk:'Yes. Point at each one, then count twice. Two counts that agree mean you can trust the number.',
  cntNo:'Count twice: point at each one again.'
};
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var PAGE=document.body.getAttribute('data-page')||'';
var KEY=(PAGE==='warm')?'sciU66Warm':'sciU66Lesson';
var LOG=(PAGE==='warm')
 ?{page:'warm-up',startedAt:new Date().toISOString(),qf1:{spots:[],spotWrong:0,sort:[],sortWrong:0},qf2:{rows:[]},qf3:{drops:0,typed:[],accepted:null},qf4:{typed:[],ticks:null,modelShown:false,tries:0},cards:{opened:[]},screensSeen:[]}
 :{page:'fix-it lesson',startedAt:new Date().toISOString(),d1:{concrete:null,ladder:[]},d2:{concrete:null,procedural:[]},d3:{concrete:null,procedural:[]},routine:{counts:null,picks:[]},deviceChecks:{d1:[],d2:[],d3:[]},routeWalk:[],screensSeen:[]};
function save(){LOG.savedAt=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(LOG))}catch(e){}}
LOG.screensSeen.push('s1'); save();
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function wrong(el){el.classList.add('wrongc');setTimeout(function(){el.classList.remove('wrongc')},700)}

/* ---- part tapper (lily): tap the part named, one at a time ---- */
$$('.idg').forEach(function(box){
  var steps=box.getAttribute('data-steps').split('|'), i=0, pr=$('.ipr',box), nt=$('.inote',box);
  function ask(){pr.textContent=(i<steps.length)?('Tap the part that '+box.getAttribute('data-verbs').split('|')[i]+'.'):'Both found.'}
  ask();
  $$('.spot',box).forEach(function(sp){sp.onclick=function(){
    if(i>=steps.length) return;
    if(sp.getAttribute('data-k')===steps[i]){
      sp.classList.add('good'); nt.textContent=IDMSG[steps[i]]; LOG.qf1.spots.push(steps[i]); save(); i++; ask(); if(i>=steps.length) gwDone(box);
    } else {LOG.qf1.spotWrong++; save(); nt.textContent='Not that one. Tap the part that '+box.getAttribute('data-verbs').split('|')[i]+'.'; wrong(sp)}
  }});
});

/* ---- job sort: tap a card, tap its box ---- */
$$('.sortw').forEach(function(box){
  var cur=null, cards=$$('.sc2',box), note=$('.snote2',box), left=cards.length;
  cards.forEach(function(c){c.onclick=function(){if(c.disabled) return; cur=c; cards.forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the box it belongs in.'}});
  $$('.sbin2',box).forEach(function(b){b.onclick=function(){
    if(!cur){note.textContent='Tap a card first.';return}
    if(cur.getAttribute('data-b')===b.getAttribute('data-b')){
      var w=$('.binlist[data-b="'+b.getAttribute('data-b')+'"]',box), s=document.createElement('div'); s.className='placed'; s.textContent=cur.textContent; w.appendChild(s);
      LOG.qf1.sort.push(cur.textContent); save();
      cur.disabled=true; cur.classList.remove('sel'); cur.classList.add('used'); cur=null; left--; note.textContent='Yes.';
      if(!left){note.textContent=MSG.sortDone; gwDone(box)}
    } else {LOG.qf1.sortWrong++; save(); note.textContent='Not that box. Which part makes pollen, and which part catches it?'; wrong(cur)}
  }});
});

/* ---- pot builder: predict first, then see ---- */
function potSvg(grows){
  var s='<svg viewBox="0 0 160 146" role="img" aria-label="Result"><rect x="0" y="130" width="160" height="14" fill="#c9a36a" stroke="#8d5a2b" stroke-width="2"/><path d="M48 130 L112 130 L104 80 L56 80 Z" fill="#c4683a" stroke="#7a3a1a" stroke-width="2.5"/><ellipse cx="80" cy="76" rx="26" ry="5" fill="#5a3a1a"/>';
  if(grows) s+='<path d="M80 74 L80 36" stroke="#4fb85a" stroke-width="5" stroke-linecap="round"/><ellipse cx="68" cy="34" rx="13" ry="6" transform="rotate(-25 68 34)" fill="#4fb85a"/><ellipse cx="94" cy="30" rx="13" ry="6" transform="rotate(25 94 30)" fill="#4fb85a"/>';
  else s+='<ellipse cx="80" cy="76" rx="5" ry="3.4" fill="#e8d9a0" stroke="#8d7a2a" stroke-width="1.5"/>';
  return s+'</svg>';
}
$$('.potb').forEach(function(box){
  var rows=$$('.prow',box), left=rows.length, note=$('.potnote',box);
  var RM={water:MSG.potW,air:MSG.potA,warmth:MSG.potT,light:MSG.potL};
  rows.forEach(function(r){
    var f=r.getAttribute('data-f'), grows=(f==='light');
    $$('.pbt button',r).forEach(function(b){b.onclick=function(){
      if(r.classList.contains('done')) return;
      var pg=(b.getAttribute('data-p')==='1'), right=(pg===grows);
      LOG.qf2.rows.push({factor:f,predictedGrows:pg,actualGrows:grows,predictionRight:right}); save();
      $$('.pbt button',r).forEach(function(x){x.disabled=true});
      r.classList.add('done'); $('.pslot',r).innerHTML=potSvg(grows);
      $('.ptxt',r).textContent=(right?'You predicted right. ':'Surprise. ')+RM[f];
      left--; if(!left){note.textContent=MSG.potDone; gwDone(box)} else note.textContent=left+' more to try.';
    }});
  });
});

/* ---- tray: drop the seeds, then type the word ---- */
$$('.trayw').forEach(function(box){
  var svg=$('.traysvg',box), drop=$('.tdrop',box), row=$('.trow2',box), inp=$('.tin',box), chk=$('.tchk',box), fb=$('.tfb',box);
  drop.onclick=function(){
    drop.disabled=true; LOG.qf3.drops++; svg.setAttribute('data-state','1');
    setTimeout(function(){svg.setAttribute('data-state','2'); row.classList.remove('hid'); fb.textContent='All the young plants are packed in one place. What is this called?'; inp.focus()},1300);
  };
  function go(){
    var v=(inp.value||'').trim().toLowerCase().replace(/\.$/,''); if(!v) return;
    var ok=/^over-?crowding$/.test(v); LOG.qf3.typed.push(v);
    if(ok){LOG.qf3.accepted=v; fb.textContent=MSG.trayOk; inp.readOnly=true; chk.disabled=true; var w=$('.wcard',box); if(w) w.classList.remove('hid'); gwDone(box)}
    else fb.textContent=MSG.trayNo;
    save();
  }
  chk.onclick=go; inp.onkeydown=function(e){if(e.key==='Enter') go()};
});

/* ---- two ideas checker ---- */
$$('.twoi').forEach(function(box){
  var ta=$('.twin',box), chk=$('.twchk',box), t1=$('.tk1',box), t2=$('.tk2',box), fb=$('.twfb',box), show=$('.twshow',box), model=$('.model',box);
  var R1=/(wing|wind|air|spin|glide|float|blow|blown|lift|fly|flies|flew|catch|water|river|carr|flow|current|wash|drift|stream)/i, R2=/(away|far|new place|another place|new spot|somewhere|different place|other place|land|ends? up|lands)/i;
  if(show) show.onclick=function(){model.classList.remove('hid'); LOG.qf4.modelShown=true; save()};
  chk.onclick=function(){
    var v=(ta.value||'').trim(); if(v.length<8){fb.textContent='Write your answer first.';return}
    var a=R1.test(v), b=R2.test(v); LOG.qf4.typed.push(v); LOG.qf4.tries++;
    t1.classList.toggle('ok',a); t2.classList.toggle('ok',b); LOG.qf4.ticks={happens:a,endsUp:b};
    if(a&&b){fb.textContent=MSG.twoOk; chk.disabled=true; ta.readOnly=true; gwDone(box)}
    else if(a||b){fb.textContent=MSG.twoOne}
    else {fb.textContent=MSG.twoNone}
    if(show&&LOG.qf4.tries>=2) show.classList.remove('hid');
    save();
  };
});

/* ---- D1: the seed counter ---- */
$$('.d1w').forEach(function(box){
  var svg=$('.d1svg',box), cnt=$('.cnt',box), blow=$('.b-blow',box), tube=$('.b-tube',box), note=$('.dnote',box);
  var grains=$$('.pg',svg), stg=$('.stg-spot',svg), sel=null, landed=false, fused=false, early=0, C={order:[],earlyBlowTries:0};
  tube.disabled=true; blow.classList.add('grey');
  grains.forEach(function(g){g.onclick=function(){
    if(landed) return; grains.forEach(function(x){x.classList.toggle('sel',x===g)}); sel=g; note.textContent='Now tap the stigma.';
  }});
  stg.onclick=function(){
    if(landed) return; if(!sel){note.textContent=MSG.d1wait; return}
    sel.style.transform='translate('+sel.getAttribute('data-dx')+'px,'+sel.getAttribute('data-dy')+'px)'; sel.classList.remove('sel'); landed=true; C.order.push('pollen on stigma');
    setTimeout(function(){note.textContent=MSG.d1pol},950);
  };
  blow.onclick=function(){
    if(!landed){note.textContent=MSG.d1wait; return}
    if(!fused){early++; C.earlyBlowTries=early; C.order.push('blow tried early'); note.textContent=MSG.d1grey; tube.disabled=false; save(); return}
    C.order.push('seed blown away'); svg.classList.add('gone'); blow.disabled=true; note.textContent=MSG.d1blow; LOG.d1.concrete=C; save(); gwDone(box);
  };
  tube.onclick=function(){
    if(fused||!landed) return; tube.disabled=true; C.order.push('pollen tube grown');
    $('.ptube',svg).style.strokeDashoffset='0'; $('.mn',svg).style.transform='translate(0px,76px)';
    setTimeout(function(){
      fused=true; svg.classList.add('fused'); cnt.textContent='1'; cnt.classList.add('up'); C.order.push('nuclei fused, counter 1');
      blow.classList.remove('grey'); note.textContent=MSG.d1tube; save();
    },1800);
  };
});

/* ---- step ladder ---- */
$$('.lad').forEach(function(box){
  var rs=$$('.rung',box); rs.forEach(function(r,i){ if(i>0) r.disabled=true; r.onclick=function(){
    if(r.classList.contains('on')) return; r.classList.add('on'); var dev=box.getAttribute('data-dev'); if(dev){LOG[dev].ladder=LOG[dev].ladder||[]; LOG[dev].ladder.push(i+1)} save();
    if(rs[i+1]) rs[i+1].disabled=false; else gwDone(box);
  }});
});

/* ---- D2: zoom sorter ---- */
$$('.d2w').forEach(function(box){
  var svg=$('.d2svg',box), r=$('.zr',box), lab=$('.zlab',box), zin=$('.zin',box), note=$('.dnote',box), rows=$$('.cr',box), res=$('.d2res',box);
  var LV=['','x1','x10','x40'], seen=[1], done=0, C={zoomSeen:[],checks:[]};
  function set(v){
    v=+v; svg.setAttribute('data-state',String(v)); lab.textContent=LV[v]; note.textContent=MSG['z'+v];
    if(seen.indexOf(v)<0) seen.push(v); C.zoomSeen=seen.slice();
    if(v===3) svg.classList.add('puff'); else svg.classList.remove('puff');
    rows.forEach(function(x){var b=$('button',x); if(!x.classList.contains('on')) b.disabled=(v<3)});
  }
  r.oninput=function(){set(r.value)}; r.onchange=function(){set(r.value)};
  zin.onclick=function(){var v=Math.min(3,(+r.value)+1); r.value=v; set(v)};
  rows.forEach(function(x){var b=$('button',x); b.onclick=function(){
    if(+r.value<3){note.textContent=MSG.d2need; return}
    if(x.classList.contains('on')) return; x.classList.add('on'); b.textContent='none'; b.disabled=true; done++; C.checks.push(x.getAttribute('data-k')); save();
    if(done===rows.length){res.classList.remove('hid'); note.textContent=MSG.d2done; LOG.d2.concrete=C; save(); gwDone(box)}
  }});
  set(1);
});

/* ---- D3: cut and dig ---- */
$$('.d3w').forEach(function(box){
  var cut=$('.b-cut',box), plant=$('.b-plant',box), dig=$('.b-dig',box), lift=$('.b-lift',box), note=$('.dnote',box);
  var a=$('.d3a',box), b=$('.d3b',box), wk=$$('.weeks div',box), bs=$('.bsvg',box), ds=$('.dsvg',box), C={steps:[]};
  plant.disabled=true; dig.disabled=true; lift.disabled=true;
  cut.onclick=function(){bs.classList.add('cut'); cut.disabled=true; plant.disabled=false; note.textContent=MSG.b1; C.steps.push('cut: tiny black dots')};
  plant.onclick=function(){
    plant.disabled=true; C.steps.push('planted the dots'); $('.weeks',box).classList.remove('hid');
    wk.forEach(function(w,i){setTimeout(function(){w.classList.add('on')},i*900)});
    setTimeout(function(){note.textContent=MSG.b2; dig.disabled=false; C.steps.push('nothing grew'); save()},wk.length*900+300);
  };
  dig.onclick=function(){a.classList.add('hid'); b.classList.remove('hid'); dig.disabled=true; lift.disabled=false; note.textContent=MSG.b3; C.steps.push('dug down')};
  lift.onclick=function(){ds.classList.add('lifted'); lift.disabled=true; C.steps.push('lifted together'); setTimeout(function(){note.textContent=MSG.b4; LOG.d3.concrete=C; save(); gwDone(box)},1500)};
});

/* ---- count twice ---- */
$$('.cntw').forEach(function(box){
  var items=$$('.cit',box), tot=$('.ctot',box), ans=$$('.cans',box), fb=$('.cfb',box), n=0, tries=0;
  items.forEach(function(it){it.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    if(it.classList.contains('counted')){it.classList.remove('counted');it.textContent=''} else {it.classList.add('counted')}
    var k=$$('.counted',box); n=k.length; k.forEach(function(e,i){e.textContent=String(i+1)});
    tot.textContent='You have counted '+n+'. Count twice, then pick.';
  }});
  ans.forEach(function(a){a.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return; tries++;
    if(a.hasAttribute('data-ok')){a.classList.add('good'); ans.forEach(function(x){x.disabled=true}); fb.textContent=MSG.cntOk; LOG.routine.counts={tries:tries,counted:n}; save(); gwDone(box)}
    else {a.classList.add('bad'); a.disabled=true; fb.textContent=MSG.cntNo}
  }});
});

/* ---- quick-pick logging (lesson): wrong taps per question, by device ---- */
document.addEventListener('pickdone',function(e){
  var el=e.detail&&e.detail.el; if(!el||el.getAttribute('data-done')!=='1') return;
  var sc=el.closest('.screen'); var dev=sc&&sc.getAttribute('data-dev'); var q=($('p',el)||{}).textContent||'';
  var rec={q:q.slice(0,60),wrongTaps:$$('.pb.bad',el).length};
  if(PAGE==='lesson'||PAGE==='fixit'){ if(dev&&LOG[dev]&&LOG[dev].procedural) LOG[dev].procedural.push(rec); else if(LOG.routine) LOG.routine.picks.push(rec); save(); }
});

/* ---- self-check: record each check, and send him to the OTHER route by name ---- */
var LASTR={};
(function(){var f=$('.screen.active'); if(f){var d=f.getAttribute('data-dev'), r=f.getAttribute('data-route'); if(d&&r){LASTR[d]=r; if(LOG.routeWalk) LOG.routeWalk.push(f.id)}}})();
$$('.selfq .chk').forEach(function(btn){
  btn.addEventListener('click',function(){
    var m=btn.closest('.selfq'), sc=m.closest('.screen'), dev=sc.getAttribute('data-dev'); if(!dev||!LOG.deviceChecks||m.getAttribute('data-done')!=='1') return;
    var ch=$('.opt.bad',m)||$('.opt.good',m);
    var arr=LOG.deviceChecks[dev], same=arr.filter(function(x){return x.item===($('p',m)||{}).textContent}).length;
    arr.push({item:($('p',m)||{}).textContent,chosen:ch?ch.textContent:null,firstCorrect:m.getAttribute('data-first')==='1',attempt:same+1,routeBefore:LASTR[dev]||null,at:new Date().toISOString()});
    save();
  });
});
$$('.selfres').forEach(function(res){
  var sc=res.closest('.screen'), dev=sc.getAttribute('data-dev');
  new MutationObserver(function(){
    var btns=$$('.gobtn',res);
    if(res.classList.contains('okbox')&&LOG.deviceChecks){LOG.deviceChecks[dev+'Result']='passed'; save()}
    if(!btns.length) return;
    var other=(LASTR[dev]==='A')?'B':'A';
    var tgt=$('.screen[data-dev="'+dev+'"][data-route="'+other+'"]');
    if(!tgt) return;
    btns.forEach(function(b,i){
      if(i>0){b.style.display='none';return}
      b.setAttribute('data-go',tgt.id); b.textContent='Go to '+tgt.getAttribute('data-label'); b.onclick=function(){window.sciShow(tgt.id)};
    });
    if(LOG.deviceChecks&&!res.getAttribute('data-logged')){res.setAttribute('data-logged','1'); var k=dev+'SentTo'; LOG.deviceChecks[k]=LOG.deviceChecks[k]||[]; LOG.deviceChecks[k].push(tgt.getAttribute('data-label')); save()}
  }).observe(res,{childList:true,attributes:true});
});
document.addEventListener('screenshown',function(e){
  var sc=document.getElementById(e.detail.id); if(!sc) return;
  if(LOG.screensSeen.indexOf(sc.id)<0) LOG.screensSeen.push(sc.id);
  if(LOG.cards) $$('[data-card]',sc).forEach(function(c){var k=c.getAttribute('data-card'); if(LOG.cards.opened.indexOf(k)<0) LOG.cards.opened.push(k)});
  var dev=sc.getAttribute('data-dev'), rt=sc.getAttribute('data-route');
  if(dev&&rt){LASTR[dev]=rt; if(LOG.routeWalk) LOG.routeWalk.push(sc.id)}
  var s=sc.querySelector('.selfres'); if(s) s.removeAttribute('data-logged');
  save();
});

/* ---- reveal .after notes once a screen's own check is passed ---- */
$$('.screen').forEach(function(sc){
  new MutationObserver(function(){ if(sc.getAttribute('data-term-pass')==='1'||sc.getAttribute('data-game-pass')==='1') $$('.after',sc).forEach(function(e){e.classList.remove('hid')}); }).observe(sc,{attributes:true});
});
})();

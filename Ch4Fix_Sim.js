/* Ch4Fix_Sim.js - behaviour and feedback lines for the Unit 67 warm-up and the Memory Tricks lesson.
   Widgets: save-note tap, recall sprint (answers kept as before, no feedback), the pollen-drop game (T1), the packed-lunch seed (T2),
   the word-tile builder (T3), step ladders, self-check taps with route-back buttons, the count tapper.
   Every record goes to localStorage: sciU67Warm (warm-up) and sciU67Lesson (lesson). */
var MSG={
  t1a:'Pollen pours out of the anthers. The anther makes the pollen. Anther, A for Away: the pollen goes away from here.',
  t1b:'Tilt the flower and the pollen drifts to the top and sticks. Sticky Stigma catches. S for Sticky, S for Stigma: the stigma catches the pollen.',
  t1done:'Sticky Stigma catches; the Anther makes the pollen. Say it twice in your head.',
  t2a:'Open the lunchbox. Inside are the seed leaves, full of food. A seed has a packed lunch.',
  t2b:'Dark room, and the seedling still grows. A seed has a packed lunch, so light is not needed.',
  t2c:'A new seed under water with oil on top. No air gets in, the breathing bar drops to zero, and nothing grows. A seed must breathe.',
  t2done:'Water, air and warmth, yes. Light, no. A seed has a packed lunch, and a seed must breathe.',
  t3wrong:'Not that tile yet. Which small tile comes first?',
  t3built:'over + crowd + ing. Too many, too close: overcrowding. Now type it without the tiles.',
  t3no:'Not yet. Say the three tiles in your head: over, crowd, ing. Then type the whole word.',
  t3ok:'Yes: overcrowding, a naming word. over + crowd + ing. Too many young plants in one place compete for water, light and nutrients.',
  wf:'After is called, use a naming word. After help to, use a doing word. The rule: use a naming word for the problem, use a doing word after to.',
  sr1:'Sticky Stigma catches. The anther makes the pollen.',
  sr2:'A seed has a packed lunch, so light is not needed. A seed must breathe.',
  sr3:'over + crowd + ing: a naming word. After to, use a doing word.',
  order:'The order, plain and simple: pollination, fertilisation, seed dispersal, germination.',
  cntOk:'Yes. Point at each one, then count twice. Two counts that agree mean you can trust the number.',
  cntNo:'Count twice: point at each one again.',
  keep:'Before you change an answer, name the fact that makes it wrong. If you cannot, keep it.'
};
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var PAGE=document.body.getAttribute('data-page')||'';
var KEY=(PAGE==='warm')?'sciU67Warm':'sciU67Lesson';
var LOG=(PAGE==='warm')
 ?{page:'warm-up',startedAt:new Date().toISOString(),saveNote:{acked:false,at:null},before:{t1:[],t2:[],t3:[]},counts:null,cards:{opened:[]},screensSeen:[]}
 :{page:'memory-tricks lesson',startedAt:new Date().toISOString(),t1:{concrete:null,ladder:[]},t2:{concrete:null,ladder:[]},t3:{concrete:null,ladder:[]},after:{t1:[],t2:[],t3:[]},deviceChecks:{t1:[],t2:[],t3:[]},routine:{said:false},routeWalk:[],screensSeen:[]};
function save(){LOG.savedAt=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(LOG))}catch(e){}}
LOG.screensSeen.push('s1'); save();
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function wrong(el){el.classList.add('wrongc');setTimeout(function(){el.classList.remove('wrongc')},700)}

/* ---- warm-up: the save note ---- */
$$('.ack').forEach(function(box){
  $('.gotit',box).onclick=function(){LOG.saveNote={acked:true,at:new Date().toISOString()}; this.disabled=true; this.textContent='Got it'; save(); gwDone(box)};
});

/* ---- warm-up: recall sprint. Each answer is kept as "before". No feedback until after the tricks. ---- */
$$('.rsp').forEach(function(box){
  var qs=$$('.rq',box), left=qs.length, note=$('.rnote',box);
  function fin(q,chosen,correct){
    var t=q.getAttribute('data-t');
    LOG.before[t].push({item:$('b',q).textContent,chosen:chosen,correct:correct});
    q.classList.add('done'); $$('button,input',q).forEach(function(x){x.disabled=true});
    left--; note.textContent=left?(left+' more to tap.'):'Done. We will look at these after the tricks.'; save();
    if(!left) gwDone(box);
  }
  qs.forEach(function(q){
    var key=q.getAttribute('data-key');
    $$('button[data-v]',q).forEach(function(b){b.onclick=function(){
      if(q.classList.contains('done')) return; b.classList.add('on');
      fin(q,b.getAttribute('data-v'),b.getAttribute('data-v')===key);
    }});
    var inp=$('input',q), ok=$('.rok',q);
    if(inp&&ok) ok.onclick=function(){
      var v=(inp.value||'').trim(); if(!v||q.classList.contains('done')) return;
      fin(q,v,/^\W*over-?crowding\W*$/i.test(v));
    };
  });
});

/* ---- T1: the pollen-drop game ---- */
$$('.t1w').forEach(function(box){
  var svg=$('.t1svg',box), shake=$('.b-shake',box), tilt=$('.b-tilt',box), note=$('.dnote',box), C={steps:[]};
  tilt.disabled=true;
  shake.onclick=function(){svg.setAttribute('data-state','1'); shake.disabled=true; tilt.disabled=false; C.steps.push('shook: pollen poured out of the anthers'); note.textContent=MSG.t1a; save()};
  tilt.onclick=function(){
    svg.setAttribute('data-state','2'); tilt.disabled=true; C.steps.push('tilted: pollen stuck on the stigma'); note.textContent=MSG.t1b;
    setTimeout(function(){note.textContent=MSG.t1done; LOG.t1.concrete=C; save(); gwDone(box)},1800);
  };
});

/* ---- T2: the packed-lunch seed ---- */
$$('.t2w').forEach(function(box){
  var svg=$('.t2svg',box), open=$('.b-open',box), dark=$('.b-dark',box), sub=$('.b-sub',box), note=$('.dnote',box), bar=$('.lf',box), C={steps:[]};
  dark.disabled=true; sub.disabled=true; bar.style.width='100%';
  open.onclick=function(){svg.setAttribute('data-open','1'); open.disabled=true; dark.disabled=false; C.steps.push('opened the lunchbox: seed leaves'); note.textContent=MSG.t2a; save()};
  dark.onclick=function(){
    svg.setAttribute('data-dark','1'); dark.disabled=true; C.steps.push('dark room: seed still grew');
    setTimeout(function(){svg.setAttribute('data-grow','1'); note.textContent=MSG.t2b; sub.disabled=false; save()},900);
  };
  sub.onclick=function(){
    sub.disabled=true; svg.setAttribute('data-open','0'); svg.setAttribute('data-dark','0'); svg.setAttribute('data-grow','0'); svg.setAttribute('data-sub','1'); bar.style.width='0%';
    C.steps.push('under water with oil: breathing stopped, nothing grew'); note.textContent=MSG.t2c;
    setTimeout(function(){LOG.t2.concrete=C; save(); gwDone(box)},1400);
  };
});

/* ---- T3: the word tiles ---- */
$$('.t3w').forEach(function(box){
  var tiles=$$('.tile',box), slots=$$('.tslots span',box), note=$('.dnote',box), row=$('.t3row',box), inp=$('.tin',box), chk=$('.tchk',box);
  var ORDER=['over','crowd','ing'], at=0, C={wrongTaps:0,typed:[],accepted:null};
  tiles.forEach(function(t){t.onclick=function(){
    var w=t.getAttribute('data-w');
    if(w===ORDER[at]){slots[at].textContent=w; slots[at].classList.add('on'); t.disabled=true; at++;
      if(at===3){note.textContent=MSG.t3built; row.classList.remove('hid'); inp.focus()}}
    else {C.wrongTaps++; note.textContent=MSG.t3wrong; wrong(t); save()}
  }});
  function go(){
    var v=(inp.value||'').trim().toLowerCase().replace(/\.$/,''); if(!v) return; C.typed.push(v);
    if(/^over-?crowding$/.test(v)){C.accepted=v; note.textContent=MSG.t3ok; inp.readOnly=true; chk.disabled=true; LOG.t3.concrete=C; save(); gwDone(box)}
    else {note.textContent=MSG.t3no; save()}
  }
  chk.onclick=go; inp.onkeydown=function(e){if(e.key==='Enter') go()};
});

/* ---- step ladder ---- */
$$('.lad').forEach(function(box){
  var rs=$$('.rung',box); rs.forEach(function(r,i){ if(i>0) r.disabled=true; r.onclick=function(){
    if(r.classList.contains('on')) return; r.classList.add('on'); var dev=box.getAttribute('data-dev'); if(dev&&LOG[dev]){LOG[dev].ladder.push(i+1)} save();
    if(rs[i+1]) rs[i+1].disabled=false; else gwDone(box);
  }});
});

/* ---- say the book line ---- */
$$('.sayb').forEach(function(b){b.onclick=function(){var n=b.parentNode.querySelector('.dnote'); if(n) n.textContent=MSG.order; LOG.routine.said=true; save()}});

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
    if(a.hasAttribute('data-ok')){a.classList.add('good'); ans.forEach(function(x){x.disabled=true}); fb.textContent=MSG.cntOk; var rec={tries:tries,counted:n}; if(PAGE==='warm') LOG.counts=rec; else LOG.routine.counts=rec; save(); gwDone(box)}
    else {a.classList.add('bad'); a.disabled=true; fb.textContent=MSG.cntNo}
  }});
});

/* ---- self-check: record each tap, keep the first try as "after", and send him to the OTHER route by name ---- */
var LASTR={};
(function(){var f=$('.screen.active'); if(f){var d=f.getAttribute('data-dev'), r=f.getAttribute('data-route'); if(d&&r){LASTR[d]=r; if(LOG.routeWalk) LOG.routeWalk.push(f.id)}}})();
$$('.selfq .chk').forEach(function(btn){
  btn.addEventListener('click',function(){
    var m=btn.closest('.selfq'), sc=m.closest('.screen'), dev=sc.getAttribute('data-dev'); if(!dev||!LOG.deviceChecks||m.getAttribute('data-done')!=='1') return;
    var ch=$('.opt.bad',m)||$('.opt.good',m), item=($('p',m)||{}).textContent;
    var arr=LOG.deviceChecks[dev], same=arr.filter(function(x){return x.item===item}).length;
    var rec={item:item,chosen:ch?ch.textContent:null,firstCorrect:m.getAttribute('data-first')==='1',attempt:same+1,routeBefore:LASTR[dev]||null,at:new Date().toISOString()};
    arr.push(rec);
    if(same===0) LOG.after[dev].push({item:item,chosen:rec.chosen,correct:rec.firstCorrect});
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

/* Ch4MockC_Sim.js - behaviour for the Unit 68 warm-up (about 5 minutes, no marks).
   Widgets: instant quick-picks (logged, first try kept), the bryophyllum leaf tap, the count tapper.
   Every record goes to localStorage key sciU68Warm; the Mock C results file carries it as warmUp. */
var MSG={
  bryoOk:'On the edge.',
  bryoNo:'Not that spot. Look for the tiny plants.',
  cntOk:'Yes. Point at each one, then count twice. Two counts that agree mean you can trust the number.',
  cntNo:'Count twice: point at each one again.'
};
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY='sciU68Warm';
var LOG={page:'warm-up',startedAt:new Date().toISOString(),picks:{},bryo:{tapped:[],wrongTaps:0,done:false},counts:null,screensSeen:['s1']};
function save(){LOG.savedAt=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(LOG))}catch(e){}}
save();
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function wrong(el){el.classList.add('wrongc');setTimeout(function(){el.classList.remove('wrongc')},700)}
/* ---- log every quick-pick tap; the first try is the one that counts ---- */
$$('.pick').forEach(function(p){
  var id=p.getAttribute('data-id')||('p'+Math.random());
  $$('.pb',p).forEach(function(b){b.addEventListener('click',function(){
    if(b.disabled||p.getAttribute('data-done')==='1') return;
    var r=LOG.picks[id]||(LOG.picks[id]={tries:[],firstCorrect:null,solved:false});
    var ok=b.hasAttribute('data-ok'); r.tries.push({chosen:b.textContent,ok:ok,at:new Date().toISOString()});
    if(r.firstCorrect===null) r.firstCorrect=ok; if(ok) r.solved=true; save();
  },true)});
});
/* ---- the bryophyllum leaf: tap the spot where the tiny new plants start ---- */
$$('.spw').forEach(function(box){
  var note=$('.dnote',box);
  $$('.spot',box).forEach(function(sp,i){sp.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    var ok=sp.hasAttribute('data-ok'); LOG.bryo.tapped.push({spot:i,ok:ok});
    if(ok){sp.classList.add('good'); note.textContent=MSG.bryoOk; var f=$('.fact',box); if(f) f.classList.remove('hid'); LOG.bryo.done=true; save(); gwDone(box)}
    else {LOG.bryo.wrongTaps++; note.textContent=MSG.bryoNo; wrong(sp); save()}
  }});
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
    if(a.hasAttribute('data-ok')){a.classList.add('good'); ans.forEach(function(x){x.disabled=true}); fb.textContent=MSG.cntOk; LOG.counts={tries:tries,counted:n}; save(); gwDone(box)}
    else {a.classList.add('bad'); a.disabled=true; fb.textContent=MSG.cntNo}
  }});
});
document.addEventListener('screenshown',function(e){
  var sc=document.getElementById(e.detail.id); if(!sc) return;
  if(LOG.screensSeen.indexOf(sc.id)<0) LOG.screensSeen.push(sc.id); save();
});
})();

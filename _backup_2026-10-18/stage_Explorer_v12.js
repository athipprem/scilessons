/* Ch2Review_Explorer.js — the Cell Explorer for U54 (modes 1-6). Wording lives here and in the lesson HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
window.GDONE=window.GDONE||{};
var GDONE=window.GDONE;
function pass(id){var sc=document.getElementById(id); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}

/* ---------- Mode 1: plant / animal ---------- */
var NAME={wall:'cell wall',membrane:'cell membrane',cytoplasm:'cytoplasm',nucleus:'nucleus',vacuole:'large vacuole',chloroplast:'chloroplasts'};
var JOB={
 wall:'The cell wall is stiff and made of cellulose. It gives the plant cell its shape and support. Only plant cells have one.',
 membrane:'The cell membrane controls what moves in and out of the cell. Every cell has one.',
 cytoplasm:'The cytoplasm is the jelly inside the cell. This is where most of the cell’s work happens.',
 nucleus:'The nucleus controls the cell. It is the cell’s control centre, and it holds the chromosomes.',
 vacuole:'The large vacuole holds cell sap. When it is full it pushes on the wall and the plant cell stays firm (turgid).',
 chloroplast:'Chloroplasts hold chlorophyll. They make food using light. Only plant cells have them.'
};
var ANIMAL_HAS={membrane:1,cytoplasm:1,nucleus:1};
window.XSEEN=window.XSEEN||{};
var cur1='plant';
function seen1(cell,part){XSEEN[cell+':'+part]=1; var n=Object.keys(XSEEN).length; $('#xc1').textContent=n+' of 12 found'; if(n>=12) pass('sM1');}
function info1(part){
  var box=$('#xi1');
  if(cur1==='animal' && !ANIMAL_HAS[part]){
    box.innerHTML='<b>'+NAME[part]+'</b>: Animal cells do not have this. It is only in plant cells.';
  } else box.innerHTML='<b>'+NAME[part]+'</b>: '+JOB[part];
  $$('#xp1 .chip').forEach(function(c){c.classList.toggle('on',c.getAttribute('data-part')===part)});
  seen1(cur1,part);
}
function setCell(c){
  cur1=c;
  $$('#xp1 .cellview').forEach(function(v){v.classList.toggle('hid',v.getAttribute('data-cell')!==c)});
  $$('#xp1 .mode').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-cell')===c)});
  $$('#xp1 .chip').forEach(function(ch){var p=ch.getAttribute('data-part'); ch.classList.toggle('grey',c==='animal'&&!ANIMAL_HAS[p]); ch.classList.remove('on')});
  $('#xi1').textContent= c==='plant' ? 'This is a leaf cell from a plant. Tap each part, or each name below.' : 'This is a cheek cell from an animal. Some names are greyed out. Tap them too.';
}
$$('#xp1 .mode').forEach(function(b){b.onclick=function(){setCell(b.getAttribute('data-cell'))}});
$$('#xp1 .chip').forEach(function(c){c.onclick=function(){info1(c.getAttribute('data-part'))}});
$$('#xp1 svg .part').forEach(function(p){p.addEventListener('click',function(){info1(p.getAttribute('data-part'))})});
if($('#xp1')) setCell('plant');

/* ---------- Mode 2: the table fills itself from what he found ---------- */
document.addEventListener('screenshown',function(e){
  if(e.detail.id!=='sM2') return;
  $$('#cmpbody tr').forEach(function(tr){
    var p=tr.getAttribute('data-part'), tds=tr.querySelectorAll('td');
    tds[1].textContent= XSEEN['plant:'+p] ? '✔' : '?';
    tds[2].textContent= XSEEN['animal:'+p] ? (ANIMAL_HAS[p]?'✔':'✘') : '?';
    tds[1].className=tds[2].className='';
    if(XSEEN['animal:'+p] && !ANIMAL_HAS[p]) tds[2].className='no';
  });
});

/* ---------- Mode 3: microscope ---------- */
var MJOB={
 eyepiece:'The eyepiece is the lens you look through. It has a number on it, such as ×10.',
 objective:'The objective lens is the lens just above the slide. A turret holds several, such as ×4, ×10 and ×40.',
 stage:'The stage is the flat shelf where the slide sits.',
 light:'The light source shines up through the slide so you can see the specimen.',
 knob:'The focusing knob moves the lenses up and down to make the picture sharp.'
};
var mseen={}, mcombos={}, ep=10, ob=4;
var m3part1=false;
function m3check(){ if(Object.keys(mseen).length>=4 && Object.keys(mcombos).length>=3){ m3part1=true; if(GDONE.gcReal) pass('sM3'); } $('#xc3').textContent=Object.keys(mseen).length+' of 5 parts found · '+Math.min(3,Object.keys(mcombos).length)+' of 3 magnifications tried';}
function mtap(p){ $('#xi3').innerHTML='<b>'+p+'</b>: '+MJOB[p]; mseen[p]=1; m3check(); }
$$('#xp3 svg .part').forEach(function(p){p.addEventListener('click',function(){mtap(p.getAttribute('data-part'))})});
$$('#xp3 .chip').forEach(function(c){c.onclick=function(){mtap(c.getAttribute('data-part'))}});
function mtot(){
  var t=ep*ob; mcombos[t]=1;
  $('#mtot').innerHTML='eyepiece × objective = '+ep+' × '+ob+' = <b>'+t+'</b>';
  $('#mlow').textContent= ob===4 ? 'This is low power: you see the most of the slide. Always start here.' : 'High power shows a tiny part of the slide, so it is hard to find anything. Go back to low power to find it first.';
  $$('#xp3 .ebtn').forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-v')===ep)});
  $$('#xp3 .obtn').forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-v')===ob)});
  m3check();
}
$$('#xp3 .ebtn').forEach(function(b){b.onclick=function(){ep=+b.getAttribute('data-v'); mtot()}});
$$('#xp3 .obtn').forEach(function(b){b.onclick=function(){ob=+b.getAttribute('data-v'); mtot()}});
if($('#xp3')){ mcombos={}; mtot(); }

/* ---------- Mode 4: zoom ladder ---------- */
var LAD=[
 {lv:'Organism',say:'A whole person. A living thing you can see. This is an organism.'},
 {lv:'Organ system',say:'Zoom in. The digestive system is an organ system: several organs that team up to do one big job.'},
 {lv:'Organ',say:'Zoom in. The stomach is an organ: it is made of different tissues that team up to do one job.'},
 {lv:'Tissue',say:'Zoom in. The stomach lining is a tissue: many cells of the same kind doing the same job.'},
 {lv:'Cell',say:'Zoom in again. One cell: the basic unit of all living things.'}
];
var lstep=0;
function lad(){
  $$('#xp4 .lsvg').forEach(function(s,i){s.classList.toggle('hid',i!==lstep)});
  $('#xi4').innerHTML='<b>'+LAD[lstep].lv+'.</b> '+LAD[lstep].say;
  $$('#xp4 .rung').forEach(function(r,i){r.classList.toggle('on',i===lstep); r.classList.toggle('done',i<lstep)});
  $('#zbtn').textContent= lstep<4 ? 'Zoom in ▶' : 'Start again';
  if(lstep===4) pass('sM4');
}
if($('#xp4')){ $('#zbtn').onclick=function(){lstep=(lstep>=4)?0:lstep+1; lad()}; lad(); }

/* ---------- Mode 5: special cells ---------- */
var SP={
 nerve:'A nerve cell is long and has branches. It carries messages around the body.',
 roothair:'A root hair cell has a long thin part that pokes into the soil. That gives it more surface to take in water.',
 redblood:'A red blood cell is a round disc. It carries oxygen around the body in the blood.',
 muscle:'A muscle cell is long and can shorten (contract). Many muscle cells together can pull and move a body part.',
 amoeba:'An amoeba is unicellular: made of one cell. It lives in pond water and is a whole living thing on its own.',
 yeast:'Yeast is unicellular too: a fungus made of one cell. It makes new cells by budding.'
};
var spseen={};
$$('#xp5 .card').forEach(function(c){c.onclick=function(){
  var k=c.getAttribute('data-k'); spseen[k]=1; $('#xi5').innerHTML='<b>'+c.getAttribute('data-n')+'</b>: '+SP[k];
  $$('#xp5 .card').forEach(function(x){x.classList.toggle('on',x===c)}); c.classList.add('seen');
  $('#xc5').textContent=Object.keys(spseen).length+' of 6 cells looked at';
  if(Object.keys(spseen).length>=6) pass('sM5');
};});

/* ---------- Mode 6: divide ---------- */
var DS=[
 ['Grow','The cell grows bigger and does its job. Most of its life is spent here.'],
 ['Copy','Before splitting, it copies its chromosomes inside the nucleus.'],
 ['Split','The cell splits in the middle.'],
 ['Two','Now there are two identical cells. Each one starts the loop again.']
];
var dstep=0;
function dv(){
  $$('#xp6 .dsvg').forEach(function(s,i){s.classList.toggle('hid',i!==dstep)});
  $('#xi6').innerHTML='<b>'+(dstep+1)+'. '+DS[dstep][0]+'.</b> '+DS[dstep][1];
  $('#dbtn').textContent= dstep<3 ? 'Next step ▶' : 'Again';
  if(dstep===3){ $('#xp6').setAttribute('data-loopdone','1'); chk6(); }
}
function chk6(){}
if($('#xp6')){ $('#dbtn').onclick=function(){dstep=(dstep>=3)?0:dstep+1; dv()}; dv(); }

var rounds=0, dblAnim=false;
function dbl(){
  var n=Math.pow(2,rounds);
  $$('#xp7 .gsvg').forEach(function(s,i){s.classList.toggle('hid',i!==rounds)});
  $$('#xp7 .rrow').forEach(function(r,i){r.classList.toggle('on',i===rounds); r.classList.toggle('done',i<=rounds)});
  $('#xc7').innerHTML='After '+rounds+(rounds===1?' round':' rounds')+': <b>'+n+'</b> '+(n===1?'cell':'cells')+(rounds>0?' (the number of cells doubles each round)':'');
  $('#d2btn').textContent= rounds<4 ? 'Divide again ▶' : 'Start again';
  if(rounds===4){ dblAnim=true; if(GDONE.gcDouble) pass('sM6b'); }
}
if($('#xp7')){ $('#d2btn').onclick=function(){rounds=(rounds>=4)?0:rounds+1; dbl()}; dbl(); }
/* sM6a passes once the 4 steps have been seen */
document.addEventListener('click',function(e){
  if(e.target && e.target.id==='dbtn' && dstep===3) pass('sM6a');
});

/* ---------- guided calc walkthrough (U54 v1.2): Watch me -> Your turn -> On your own ----------
   Beginner design (Lui, 18 Oct 2026): the explanation stays on the SAME screen as the practice; every step is
   checked on its own; a wrong answer first shows a hint, a second wrong answer highlights the matching Watch-me step. */
function gcInit(box){
  var id=box.id, watch=$('.gwatch',box), turn=$('.gturn',box), own=$('.gown',box);
  var ws=$$('.ws',watch), wbtn=$('.gwbtn',watch), shown=0;
  wbtn.onclick=function(){
    if(shown<ws.length){ ws[shown].classList.remove('hid'); shown++; }
    if(shown<ws.length){ wbtn.innerHTML='Show step '+(shown+1)+' &#9654;'; }
    else { wbtn.style.display='none'; turn.classList.remove('hid'); var f=$('input',turn); if(f) f.focus(); }
  };
  function wire(stepsBox, onAll){
    var steps=$$('.gs',stepsBox);
    steps.forEach(function(st,i){
      var tries=0, fb=$('.gfb',st);
      function good(msg){ st.classList.add('ok'); fb.className='gfb ok'; fb.innerHTML='&#10004; '+msg;
        $$('button',st).forEach(function(b){b.disabled=true}); var inp=$('input',st); if(inp) inp.readOnly=true;
        $$('.ws',watch).forEach(function(w){w.classList.remove('flash')});
        if(steps[i+1]){ steps[i+1].classList.remove('hid'); var f=$('input',steps[i+1]); if(f) f.focus(); } else onAll(); }
      function bad(){ tries++; fb.className='gfb no';
        var h=st.getAttribute('data-hint'), h2=st.getAttribute('data-hint2'), w=+st.getAttribute('data-ws');
        if(tries===1){ fb.innerHTML='&#10008; Not yet. Hint: '+h; }
        else if(h2){ fb.innerHTML='&#10008; Not yet. '+h2; }
        else { fb.innerHTML='&#10008; Not yet. Look at the yellow Watch-me step '+w+' and do the same with your numbers. '+h;
          $$('.ws',watch).forEach(function(x,k){x.classList.toggle('flash',k===w-1)}); }
      }
      if(st.getAttribute('data-kind')==='num'){
        var inp=$('input',st), b=$('.gchk',st), ans=parseFloat(st.getAttribute('data-ans'));
        function go(){ var v=parseFloat((inp.value||'').replace(/,/g,'').replace(/[^0-9.\-]/g,'')); if(isNaN(v)) return;
          if(Math.abs(v-ans)<1e-9) good('Yes, '+st.getAttribute('data-ans')+'.'); else bad(); }
        b.onclick=go; inp.onkeydown=function(e){ if(e.key==='Enter') go(); };
      } else {
        $$('.gopt',st).forEach(function(o){ o.onclick=function(){ if(o.getAttribute('data-ok')) good('Yes. '+o.textContent+'.'); else bad(); }; });
      }
    });
  }
  wire(turn, function(){ own.classList.remove('hid'); var f=$('input',own); if(f) f.focus(); });
  wire(own, function(){ GDONE[id]=true; var d=document.createElement('div'); d.className='job'; d.innerHTML='&#127881; <b>You did it on your own.</b> Same steps every time: say what the numbers mean, write the step, size check.'; own.appendChild(d);
    if(id==='gcReal' && m3part1) pass('sM3'); if(id==='gcDouble' && dblAnim) pass('sM6b'); });
}
$$('.gcalc').forEach(gcInit);

/* ---------- written practice: type, show the model answer, self-mark, done ---------- */
$$('.wr').forEach(function(w){
  var ta=$('textarea',w), btn=$('.wshow',w), mod=$('.wmodel',w), go=$('.wdone',w);
  ta.oninput=function(){btn.disabled=(ta.value.trim().length<6)};
  btn.onclick=function(){ mod.classList.remove('hid'); btn.style.display='none'; ta.readOnly=true; };
  go.onclick=function(){ go.disabled=true; w.setAttribute('data-done','1'); $('.wfb',w).textContent='Saved. Well done for writing it out.'; pass(w.closest('.screen').id); };
});
})();

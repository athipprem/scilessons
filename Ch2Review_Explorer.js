/* Ch2Review_Explorer.js — the Cell Explorer for U54 (modes 1-6). Wording lives here and in the lesson HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
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
function m3check(){ if(Object.keys(mseen).length>=4 && Object.keys(mcombos).length>=3) pass('sM3'); $('#xc3').textContent=Object.keys(mseen).length+' of 5 parts found · '+Math.min(3,Object.keys(mcombos).length)+' of 3 magnifications tried';}
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

var rounds=0;
function dbl(){
  var n=Math.pow(2,rounds);
  $$('#xp7 .gsvg').forEach(function(s,i){s.classList.toggle('hid',i!==rounds)});
  $$('#xp7 .rrow').forEach(function(r,i){r.classList.toggle('on',i===rounds); r.classList.toggle('done',i<=rounds)});
  $('#xc7').innerHTML='After '+rounds+(rounds===1?' round':' rounds')+': <b>'+n+'</b> '+(n===1?'cell':'cells')+(rounds>0?' (the number of cells doubles each round)':'');
  $('#d2btn').textContent= rounds<4 ? 'Divide again ▶' : 'Start again';
  if(rounds===4) pass('sM6b');
}
if($('#xp7')){ $('#d2btn').onclick=function(){rounds=(rounds>=4)?0:rounds+1; dbl()}; dbl(); }
/* sM6a passes once the 4 steps have been seen */
document.addEventListener('click',function(e){
  if(e.target && e.target.id==='dbtn' && dstep===3) pass('sM6a');
});

/* ---------- calc check item: typed step first, then the answer box ---------- */
(function(){
  var st=$('#cstep'); if(!st) return;
  var sb=$('#cstepb'), fb=$('#cstepfb'), ans=$('#cans'), ai=$('#cansin'), ab=$('#cansb'), afb=$('#cansfb'), sz=$('#csize');
  st.oninput=function(){sb.disabled=st.value.trim().length<3};
  sb.onclick=function(){
    var v=st.value.replace(/\s+/g,'');
    var ok=/^25(\u00f7|\/|:|dividedby)50$/i.test(v) || /^25(\u00f7|\/|:)(10\*5|10x5|10\u00d75)$/i.test(v);
    if(ok){ fb.className='fb show ok'; fb.textContent='\u2714 Good step: picture size \u00f7 total magnification, and 10 \u00d7 5 = 50.'; st.readOnly=true; sb.disabled=true; ans.classList.remove('hid'); }
    else { fb.className='fb show no'; fb.textContent='\u2718 Not quite. Write picture size \u00f7 total magnification, using numbers. You need to work out the total magnification first.'; }
  };
  ai.oninput=function(){ab.disabled=ai.value.trim().length<1};
  ab.onclick=function(){
    var v=parseFloat(ai.value.replace(',','.'));
    if(Math.abs(v-0.5)<1e-9){ afb.className='fb show ok'; afb.textContent='\u2714 0.5 mm. The real leg is half a millimetre long.'; ai.readOnly=true; ab.disabled=true; sz.classList.remove('hid'); pass('sM3b'); }
    else { afb.className='fb show no'; afb.textContent='\u2718 Not quite. Check your step: what is 25 \u00f7 50?'; }
  };
})();

/* ---------- written practice: type, show the model answer, self-mark, done ---------- */
$$('.wr').forEach(function(w){
  var ta=$('textarea',w), btn=$('.wshow',w), mod=$('.wmodel',w), go=$('.wdone',w);
  ta.oninput=function(){btn.disabled=(ta.value.trim().length<6)};
  btn.onclick=function(){ mod.classList.remove('hid'); btn.style.display='none'; ta.readOnly=true; };
  go.onclick=function(){ go.disabled=true; w.setAttribute('data-done','1'); $('.wfb',w).textContent='Saved. Well done for writing it out.'; pass(w.closest('.screen').id); };
});
})();

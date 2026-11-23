/* Ch4Mock_Sim.js - behaviour for this unit (warm-up and lesson): "Where does the new plant start?" tapper, 3-bin and 4-bin sort,
   statement checker, drop demo with predict-first, keep-or-change card, part-ID gym, cycle drag and match-up, fair-test builder,
   guided real-size calculation, flip cards, "count twice" tapper. Content text lives in each page's HTML; feedback lines live here. */
var TAPMSG={
  pine:'Yes. The base of the plant. Suckers are new shoots that grow from buds at the base. Plants from suckers take a shorter time to grow into adult plants than plants from seeds.',
  pot:'Yes. The bud. On a potato, a new plant grows from a bud.',
  seed:'Yes. A seed inside the fruit. A male reproductive cell fuses with a female reproductive cell to make the seed, and a seed grows into a new plant.',
  fern:'Yes. The dots under the frond are spore bags. Non-flowering plants such as ferns and moss reproduce from spores, and spores are carried by the wind.',
  leaf:'Yes. The edge of the leaf. A bryophyllum leaf can grow new plants. It has one parent, so the young are identical.',
  gin:'Yes. The bud on the shoot. Ginger grows underground stems, and a new plant grows from a bud. A piece of ginger has one parent, so the young are identical, and it takes a shorter time to grow into adult plants than a seed does.',
  pinew:'Yes. The base: new shoots that grow from buds at the base are suckers.',
  potw:'Yes. The bud. The piece with a bud can grow, because a new plant grows from a bud.'
};
var IDMSG={
  anther:'Yes. The anther makes the pollen. Next, pollination is the transfer of pollen from the anther to the stigma.',
  stigma:'Yes. The stigma is where the pollen lands. Pollination is the transfer of pollen from the anther to the stigma.',
  ovary:'Yes. The ovary holds the ovules and becomes the fruit.',
  ovule:'Yes. Each ovule holds a female reproductive cell. After a male reproductive cell fuses with a female reproductive cell, the ovules develop into seeds.',
  'seed leaves':'Yes. The seed leaves feed the seedling until it can make its own food.',
  shoot:'Yes. The shoot grows up, and the seedling gets taller. The first root grows downwards while the shoot grows up.',
  root:'Yes. The root: the first root grows downwards, and the seedling grows from it.'
};
var MSG={
 sq:'No. Only some fruits split, and they scatter seeds. Spores are carried by the wind, from spore bags under a frond. Remember: non-flowering plants such as ferns and moss reproduce from spores.',
 sqno:'Think again: a spore comes from a spore bag. Does a spore need a fruit?',
 dropA:'They landed at about the same time. The heavy ball and the light ball are the same size, so heavier does not mean faster.',
 dropB:'Slowed down, they still land at about the same time. Rule: if an option says ALWAYS, find one case where it fails. Heavy things do not ALWAYS fall faster: same size, they land at about the same time.',
 keepOk:'Keep it. You could not name a fact that makes it wrong, because there is none: a new plant grows from a bud. Rule: change only if you can name the fact that makes it wrong.',
 keepNo:'Can you name the fact that makes the first answer wrong? If you cannot, keep it.',
 fairOk:'A fair test. Change only one thing: the warmth. Everything else stays the same, so only warmth can explain what happens. Seeds need water, air and the right temperature.',
 cycDone:'Yes. The order: pollination, fertilisation, seed dispersal and germination.',
 cntOk:'Yes. Point at each one, count it, then count twice. Two counts that agree mean you can trust the number.',
 stmtOk:'Good: you checked every statement.',
 sortDone:'Seed dispersal is step three of pollination, fertilisation, seed dispersal and germination.',
 fairNo2:'That one thing is not warmth. Seeds need water, air and the right temperature, but this test asks about warmth, so only the room changes.',
 tc:'Take this into the test: an indicator changes colour, so the colour tells you what the liquid is. Rough surfaces give more friction, so rough soles grip.',
 wf1:'Rule: after to, use a doing word.',
 wf2:'Rule: after the, use a naming word. After to or will, use a doing word.',
 wf3:'Rule: for the event itself, use a naming word.'
};
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var LOG={stmt:[],drop:null,keep:null,tapper:[],sort:[]};
function save(){try{localStorage.setItem('sciU65Warm',JSON.stringify(LOG))}catch(e){}}
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

/* ---- feedback lines for the tapper: one line per spot, naming the route ---- */
var TAPNO='Not there. Ask: where does the new plant start? Look for the seed, the spore bag, the bud or the base.';

/* ---- tapper: tap the spot where the new plant starts ---- */
$$('.tapw').forEach(function(box){
  var tpls=$$('.tpl',box), note=$('.tnote',box), left=tpls.length;
  tpls.forEach(function(t){
    var k=t.getAttribute('data-k'), res=$('.tres',t);
    $$('.spot',t).forEach(function(sp){ sp.onclick=function(){
      if(t.classList.contains('done')) return;
      if(sp.hasAttribute('data-ok')){
        sp.classList.add('good'); t.classList.add('done'); res.textContent=TAPMSG[k]||'Yes.'; left--;
        LOG.tapper.push(k); save();
        note.textContent=left?('Good. '+left+' more to go.'):'All of them found. Ask yourself where does the new plant start, every time.';
        if(!left) gwDone(box);
      } else { sp.classList.add('wrongc'); note.textContent=box.getAttribute('data-hint')||TAPNO; setTimeout(function(){sp.classList.remove('wrongc')},700); }
    }; });
  });
});

/* ---- part-ID gym: tap the part named, one at a time ---- */
$$('.idg').forEach(function(box){
  var steps=box.getAttribute('data-steps').split('|'), i=0, pr=$('.ipr',box), nt=$('.inote',box);
  function ask(){ pr.textContent=(i<steps.length)?('Tap the '+steps[i]+'.'):'All parts found.'; }
  ask();
  $$('.spot',box).forEach(function(sp){ sp.onclick=function(){
    if(i>=steps.length) return;
    if(sp.getAttribute('data-k')===steps[i]){
      sp.classList.add('good'); nt.textContent=IDMSG[steps[i]]||'Yes.'; i++; ask();
      if(i>=steps.length) gwDone(box);
    } else { sp.classList.add('wrongc'); nt.textContent='Not that one. Tap the '+steps[i]+'.'; setTimeout(function(){sp.classList.remove('wrongc')},700); }
  }; });
});

/* ---- sort board: tap a card, tap its box ---- */
$$('.sortw').forEach(function(box){
  var cur=null, cards=$$('.sc2',box), note=$('.snote2',box), left=cards.length;
  cards.forEach(function(c){c.onclick=function(){ if(c.disabled) return; cur=c; cards.forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the box it belongs in.'; };});
  $$('.sbin2',box).forEach(function(b){b.onclick=function(){
    if(!cur){ note.textContent='Tap a card first.'; return; }
    if(cur.getAttribute('data-b')===b.getAttribute('data-b')){
      var w=$('.binlist[data-b="'+b.getAttribute('data-b')+'"]',box); var s=document.createElement('div'); s.className='placed';
      var f=cur.getAttribute('data-f'); s.innerHTML='<b>'+esc(cur.textContent)+'</b>'+(f?' &mdash; '+esc(f):''); w.appendChild(s);
      cur.disabled=true; cur.classList.remove('sel'); cur.classList.add('used'); cur=null; left--; note.textContent='Yes.';
      if(!left){ var d=$('.sdone',box); if(d) d.classList.remove('hid'); if(box.getAttribute('data-m')) note.textContent=MSG[box.getAttribute('data-m')]; gwDone(box); }
    } else { note.textContent=box.getAttribute('data-hint')||'Not that box. Think about the clue on the card.'; cur.classList.add('wrongc'); var cc=cur; setTimeout(function(){cc.classList.remove('wrongc')},650); }
  };});
});
/* one-tap check inside the 3-bin sort: do spores pop out of a splitting fruit? */
$$('.sporeq').forEach(function(box){
  var fb=$('.sqfb',box);
  $$('.sqb',box).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    if(b.hasAttribute('data-ok')){ b.classList.add('good'); fb.textContent=MSG.sq; $$('.sqb',box).forEach(function(x){x.disabled=true}); gwDone(box); }
    else { b.classList.add('bad'); b.disabled=true; fb.textContent=MSG.sqno; }
  };});
});

/* ---- statement checker: answers open only after every statement has a True or False tap ---- */
function roman(a){var n=['I','II','III'],o=[];a.forEach(function(v,i){if(v)o.push(n[i])});
  if(o.length===0) return 'none of them'; if(o.length===3) return 'I, II and III'; if(o.length===1) return o[0]+' only';
  return o.slice(0,-1).join(', ')+' and '+o[o.length-1]+' only';}
$$('.stmt').forEach(function(box){
  var rows=$$('.srow',box), opts=$$('.so',box), note=$('.snote',box), fb=$('.pfb',box);
  var taps=rows.map(function(){return null}), first=null, tries=0;
  function allTapped(){return taps.every(function(v){return v!==null})}
  function refreshOpts(){
    var ready=allTapped(), mine=ready?roman(taps):'';
    opts.forEach(function(o){ if(box.getAttribute('data-done')==='1') return; o.disabled=!ready; o.classList.toggle('mine',ready&&o.getAttribute('data-r')===mine); });
    note.textContent=ready?('Your taps say: '+mine+'. Now pick the answer.'):'Tap True or False on every statement. The answers open when you have tapped all three.';
  }
  rows.forEach(function(r,i){ $$('.tf',r).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-done')==='1') return;
    taps[i]=+b.getAttribute('data-v'); $$('.tf',r).forEach(function(x){x.classList.toggle('on',x===b)}); refreshOpts(); };}); });
  opts.forEach(function(o){o.onclick=function(){
    if(o.disabled||box.getAttribute('data-done')==='1') return;
    tries++; if(first===null) first=o.getAttribute('data-r');
    if(o.hasAttribute('data-ok')){
      box.setAttribute('data-done','1'); o.classList.add('good'); opts.forEach(function(x){x.disabled=true});
      var tr=rows.map(function(r,i){return (['I','II','III'][i])+' is '+(r.getAttribute('data-t')==='1'?'true':'false')}).join('. ');
      fb.className='pfb show ok'; fb.textContent='✔ '+tr+'. Good: you checked every statement.';
      LOG.stmt.push({item:box.getAttribute('data-id'),taps:taps.slice(),firstPick:first,tries:tries}); save();
      gwDone(box);
    } else { o.classList.add('bad'); o.disabled=true; fb.className='pfb show no'; fb.textContent='✘ Not that one. Read each statement again. Check every statement; do not stop at the first true one.'; }
  };});
  refreshOpts();
});

/* ---- drop demo: predict first, then drop, then slow it down ---- */
$$('.dropdemo').forEach(function(box){
  var picked=null, go=$('.dgo',box), slow=$('.dslow',box), res=$('.dres',box);
  $$('.dpick',box).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-ran')) return;
    picked=b.getAttribute('data-k'); $$('.dpick',box).forEach(function(x){x.classList.toggle('on',x===b)}); go.disabled=false;
    res.textContent='You predict: '+b.textContent+'. Now drop them.';
  };});
  go.disabled=true; slow.disabled=true;
  go.onclick=function(){
    if(!picked||box.getAttribute('data-ran')) return;
    box.setAttribute('data-ran','1'); go.disabled=true; box.classList.add('fell');
    setTimeout(function(){
      var right=(picked==='same');
      res.textContent=(right?'Your prediction was right. ':'Your prediction was different. ')+MSG.dropA;
      LOG.drop={pick:picked,right:right}; save(); slow.disabled=false;
    },1300);
  };
  slow.onclick=function(){
    slow.disabled=true; box.classList.remove('fell','slow'); void box.offsetWidth; box.classList.add('slow','fell');
    setTimeout(function(){
      res.textContent=MSG.dropB;
      $$('.dpick',box).forEach(function(b){b.disabled=true});
      gwDone(box);
    },6400);
  };
});

/* ---- keep or change? ---- */
$$('.keepc').forEach(function(box){
  var fb=$('.kfb',box), tries=0;
  $$('.kb',box).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    tries++;
    if(b.hasAttribute('data-ok')){
      b.classList.add('good'); $$('.kb',box).forEach(function(x){x.disabled=true});
      fb.textContent=MSG.keepOk;
      LOG.keep={choice:b.getAttribute('data-k'),tries:tries}; save(); gwDone(box);
    } else { b.classList.add('bad'); b.disabled=true; fb.textContent=MSG.keepNo; }
  };});
});

/* ---- cycle drag and match-up: pick a word chip, then tap an empty cell ---- */
$$('.fillt').forEach(function(box){
  var cur=null, cells=$$('.fcell',box), note=$('.fnote',box);
  $$('.fchip',box).forEach(function(c){c.onclick=function(){ if(c.disabled) return; cur=c; $$('.fchip',box).forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the empty box that matches.'; };});
  cells.forEach(function(cl){cl.onclick=function(){
    if(cl.getAttribute('data-got')) return;
    if(!cur){ note.textContent='Pick a word first, then tap a box.'; return; }
    if(cur.getAttribute('data-v')===cl.getAttribute('data-a')){
      cl.setAttribute('data-got','1'); cl.textContent=cur.textContent; cl.classList.add('full'); note.textContent='Yes.';
      cur.disabled=true; cur.classList.remove('sel'); cur=null;
      if(cells.every(function(x){return x.getAttribute('data-got')})){ if(box.getAttribute('data-m')) note.textContent=MSG[box.getAttribute('data-m')]; var d=$('.fdone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { cl.classList.add('wrongc'); setTimeout(function(){cl.classList.remove('wrongc')},650); note.textContent=box.getAttribute('data-hint')||'Not that one. Think again.'; }
  };});
});

/* ---- fair-test builder: switch each thing to Keep the same or Change, then check ---- */
$$('.fairb').forEach(function(box){
  var rows=$$('.frow',box), res=$('.fres',box), chk=$('.fcheck',box), tries=0;
  rows.forEach(function(r){ var b=$('.ftog',r); b.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    var on=b.classList.toggle('chg'); b.textContent=on?'Change it':'Keep the same'; };});
  chk.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    tries++;
    var changed=rows.filter(function(r){return $('.ftog',r).classList.contains('chg')});
    var right=changed.length===1&&changed[0].hasAttribute('data-warm');
    if(right){
      res.textContent=MSG.fairOk;
      rows.forEach(function(r){$('.ftog',r).disabled=true}); chk.disabled=true; box.setAttribute('data-wdone','1');
      gwDone(box);
    } else if(changed.length===0){ res.textContent='Nothing is changed yet. To test warmth, one thing must be different.'; }
    else if(changed.length>1){ res.textContent='Too many changes. If you change more than one thing, you cannot tell which one caused the result. Change only one thing.'; }
    else { res.textContent=MSG.fairNo2; }
  };
});

/* ---- guided calculation: Watch me, Your turn, On your own ---- */
function gcInit(box){
  var watch=$('.gwatch',box), turn=$('.gturn',box), own=$('.gown',box);
  var ws=$$('.ws',watch), wbtn=$('.gwbtn',watch), shown=0;
  wbtn.onclick=function(){
    if(shown<ws.length){ ws[shown].classList.remove('hid'); shown++; }
    if(shown<ws.length){ wbtn.innerHTML='Show step '+(shown+1)+' &#9654;'; }
    else { wbtn.style.display='none'; turn.classList.remove('hid'); var g0=$('.gs',turn); if(g0) g0.classList.remove('hid'); var f=$('input',turn); if(f) f.focus(); }
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
          if(Math.abs(v-ans)<1e-9) good('Yes, '+st.getAttribute('data-ans')+'. Divide by the magnification.'); else bad(); }
        b.onclick=go; inp.onkeydown=function(e){ if(e.key==='Enter') go(); };
      } else {
        $$('.gopt',st).forEach(function(o){ o.onclick=function(){ if(o.getAttribute('data-ok')) good('Yes. '+o.textContent+'.'); else bad(); }; });
      }
    });
  }
  wire(turn, function(){ own.classList.remove('hid'); var g1=$('.gs',own); if(g1) g1.classList.remove('hid'); var f=$('input',own); if(f) f.focus(); });
  wire(own, function(){ var d=document.createElement('div'); d.className='job'; d.innerHTML='&#127881; <b>You did it on your own.</b> Same steps every time: say what the numbers mean, write the step, size check.'; own.appendChild(d); gwDone(box); });
}
$$('.gcalc').forEach(gcInit);

/* ---- flip cards (toolbox) ---- */
$$('.tcards').forEach(function(g){
  var cs=$$('.tcard',g);
  cs.forEach(function(c){ $('.tfront',c).onclick=function(){ $('.tback',c).classList.toggle('hid'); c.classList.add('seenc'); if(cs.every(function(x){return x.classList.contains('seenc')})){ if(!$('.tcn',g)){ var d=document.createElement('div'); d.className='why tcn'; d.textContent=MSG.tc; g.appendChild(d); } gwDone(g); } }; });
});

/* ---- count twice: tap each one you count, then answer ---- */
$$('.cntw').forEach(function(box){
  var items=$$('.cit',box), tot=$('.ctot',box), ans=$$('.cans',box), fb=$('.cfb',box), n=0;
  items.forEach(function(it){ it.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    if(it.classList.contains('counted')){ it.classList.remove('counted'); n--; it.textContent=''; }
    else { it.classList.add('counted'); n++; it.textContent=String(n); }
    var k=$$('.counted',box).sort(function(a,b){return (+a.textContent)-(+b.textContent)}); n=k.length; k.forEach(function(e,i){e.textContent=String(i+1)});
    tot.textContent='You have counted '+n+'. Count twice, then pick.';
  };});
  ans.forEach(function(a){ a.onclick=function(){
    if(box.getAttribute('data-wdone')==='1') return;
    if(a.hasAttribute('data-ok')){ a.classList.add('good'); ans.forEach(function(x){x.disabled=true}); fb.textContent=MSG.cntOk; gwDone(box); }
    else { a.classList.add('bad'); a.disabled=true; fb.textContent='Count twice: point at each one again.'; }
  };});
});

document.addEventListener('pickdone',function(e){ var el=e.detail&&e.detail.el; if(!el) return; var m=el.getAttribute('data-m'); if(m&&MSG[m]){ var f=$('.pfb',el); if(f&&!f.getAttribute('data-x')){ f.setAttribute('data-x','1'); f.textContent+=' '+MSG[m]; } } });

/* ---- reveal .after notes once a screen's own check is passed ---- */
$$('.screen').forEach(function(sc){
  new MutationObserver(function(){ if(sc.getAttribute('data-term-pass')==='1'||sc.getAttribute('data-game-pass')==='1') $$('.after',sc).forEach(function(e){e.classList.remove('hid')}); }).observe(sc,{attributes:true});
});
})();

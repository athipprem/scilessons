/* FlowerPower_Sim.js - behaviour for Unit 62 (warm-up, Lesson 1, Lesson 2): dissection, fill-the-table, order-the-steps,
   sorting, statement checker, guided calculation, flip cards, written practice. Content text lives in each page's HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var LOG={stmt:[],written:null};
function save(){try{localStorage.setItem('sciU62Warm',JSON.stringify(LOG))}catch(e){}}
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}

/* ---- dissection: tap a part (or its button) to read about it ---- */
var INFO={
 stigma:'The stigma is the top of the female part. Pollen lands here.',
 ovary:'The ovary is the round base of the female part. Remember: the ovary has one or more ovules.',
 ovule:'Tap the ovule picture below to look inside it. Remember: each ovule contains an egg.',
 egg:'This is the egg, the female reproductive cell. Remember: each ovule contains an egg.',
 anther:'The anther sits at the tip of a thin stalk. Remember: the anther contains pollen sacs.',
 pollen:'Pollen is the male reproductive cell. Pollen has a similar job to sperm.'
};
$$('.dissect').forEach(function(box){
  var seen={}, info=$('.info',box), cnt=$('.cnt',box), keys=$$('.chip',box).map(function(c){return c.getAttribute('data-k')});
  function pick(k){
    seen[k]=1;
    $$('[data-k]',box).forEach(function(e){e.classList.toggle('on',e.getAttribute('data-k')===k)});
    $$('.chip',box).forEach(function(c){if(seen[c.getAttribute('data-k')]) c.classList.add('seenc')});
    info.textContent=INFO[k];
    $$('.inset',box).forEach(function(i){ if(i.getAttribute('data-for')===k||(k==='egg'&&i.getAttribute('data-for')==='ovule')||(k==='pollen'&&i.getAttribute('data-for')==='anther')) i.classList.remove('hid'); });
    var n=keys.filter(function(x){return seen[x]}).length;
    cnt.textContent=n+' of '+keys.length+' parts found';
    if(n===keys.length) gwDone(box);
  }
  $$('[data-k]',box).forEach(function(e){e.addEventListener('click',function(){pick(e.getAttribute('data-k'))})});
});

/* ---- fill the table: pick a word chip, then tap an empty cell ---- */
$$('.fillt').forEach(function(box){
  var cur=null, cells=$$('.fcell',box), note=$('.fnote',box);
  $$('.fchip',box).forEach(function(c){c.onclick=function(){ cur=c; $$('.fchip',box).forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the empty box that matches.'; };});
  cells.forEach(function(cl){cl.onclick=function(){
    if(cl.getAttribute('data-got')) return;
    if(!cur){ note.textContent='Pick a word first, then tap a box.'; return; }
    if(cur.getAttribute('data-v')===cl.getAttribute('data-a')){
      cl.setAttribute('data-got','1'); cl.textContent=cur.textContent; cl.classList.add('full'); note.textContent='Yes.';
      if(cells.every(function(x){return x.getAttribute('data-got')})){ var d=$('.fdone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { cl.classList.add('wrongc'); setTimeout(function(){cl.classList.remove('wrongc')},600); note.textContent='Not that one. Think about what each cell is called, and who makes it.'; }
  };});
});

/* ---- tap the steps in order ---- */
$$('.ordw').forEach(function(box){
  var cards=$$('.ocd',box), list=$('.olist',box), note=$('.onote',box), placed=0;
  cards.forEach(function(c){c.onclick=function(){
    if(c.disabled) return;
    if(+c.getAttribute('data-i')===placed){
      placed++; c.disabled=true; c.classList.add('used');
      var li=document.createElement('div'); li.className='oitem'; li.innerHTML='<b>'+placed+'.</b> '+c.textContent; list.appendChild(li);
      note.textContent='Yes.';
      if(placed===cards.length){ var d=$('.odone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { note.textContent=box.getAttribute('data-hint')||'Not yet. Which one comes first?'; c.classList.add('wrongc'); setTimeout(function(){c.classList.remove('wrongc')},600); }
  };});
});

/* ---- sort cards into two bins ---- */
$$('.sortw').forEach(function(box){
  var cur=null, cards=$$('.sc2',box), note=$('.snote2',box), left=cards.length;
  cards.forEach(function(c){c.onclick=function(){ if(c.disabled) return; cur=c; cards.forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the box it belongs in.'; };});
  $$('.sbin2',box).forEach(function(b){b.onclick=function(){
    if(!cur){ note.textContent='Tap a card first.'; return; }
    if(cur.getAttribute('data-b')===b.getAttribute('data-b')){
      var w=$('.binlist[data-b="'+b.getAttribute('data-b')+'"]',box); var s=document.createElement('div'); s.className='placed'; s.textContent=cur.textContent; w.appendChild(s);
      cur.disabled=true; cur.classList.remove('sel'); cur.classList.add('used'); cur=null; left--; note.textContent='Yes.';
      if(!left){ var d=$('.sdone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { note.textContent=box.getAttribute('data-hint')||'Not that box. Think about the clue on the card.'; cur.classList.add('wrongc'); var cc=cur; setTimeout(function(){cc.classList.remove('wrongc')},600); }
  };});
});

/* ---- statement checker: the answers open only after every statement has a True or False tap ---- */
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
      fb.className='pfb show ok'; fb.textContent='✔ '+tr+'. Good: you chose to check every statement.';
      LOG.stmt.push({item:box.getAttribute('data-id'),taps:taps.slice(),firstPick:first,tries:tries}); save();
      if(window.sciRefresh) window.sciRefresh();
    } else { o.classList.add('bad'); o.disabled=true; fb.className='pfb show no'; fb.textContent='✘ Not that one. Read each statement again. Check every statement; do not stop at the first true one.'; }
  };});
  refreshOpts();
});

/* ---- flip cards (toolbox) ---- */
$$('.tcards').forEach(function(g){
  var cs=$$('.tcard',g);
  cs.forEach(function(c){ $('.tfront',c).onclick=function(){ $('.tback',c).classList.toggle('hid'); c.classList.add('seenc'); if(cs.every(function(x){return x.classList.contains('seenc')})) gwDone(g); }; });
});

/* ---- guided calculation: Watch me, Your turn, On your own ---- */
function gcInit(box){
  var watch=$('.gwatch',box), turn=$('.gturn',box), own=$('.gown',box);
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
  wire(own, function(){ var d=document.createElement('div'); d.className='job'; d.innerHTML='&#127881; <b>You did it on your own.</b> Same steps every time: say what the numbers mean, write the step, size check.'; own.appendChild(d); gwDone(box); });
}
$$('.gcalc').forEach(gcInit);

/* ---- written practice: type, show the model, tick the ideas, done ---- */
$$('.wr').forEach(function(w){
  var ta=$('textarea',w), btn=$('.wshow',w), mod=$('.wmodel',w), go=$('.wdone',w), startp=w.getAttribute('data-start')||'';
  ta.oninput=function(){btn.disabled=(ta.value.trim().length<6)};
  btn.onclick=function(){
    var a=ta.value.toLowerCase().replace(/[^a-z ]/g,' ').replace(/\s+/g,' '), s=startp.toLowerCase().replace(/[^a-z ]/g,' ').replace(/\s+/g,' ').trim().split(' ');
    var ok=false; for(var i=0;i+3<=s.length;i++){ if(a.indexOf(s.slice(i,i+3).join(' '))>=0) ok=true; }
    LOG.written={startedFromQuestion:ok,length:ta.value.trim().length}; save();
    mod.classList.remove('hid'); btn.style.display='none'; ta.readOnly=true;
  };
  go.onclick=function(){ go.disabled=true; LOG.written=LOG.written||{}; LOG.written.tickedWhy=!!$('.wtick input',w).checked; save(); $('.wfb',w).textContent='Saved. Well done for writing it out.'; gwDone(w); };
});
/* ---- reveal .after notes once a screen's own check is passed ---- */
$$('.screen').forEach(function(sc){
  new MutationObserver(function(){ if(sc.getAttribute('data-term-pass')==='1'||sc.getAttribute('data-game-pass')==='1') $$('.after',sc).forEach(function(e){e.classList.remove('hid')}); }).observe(sc,{attributes:true});
});
})();

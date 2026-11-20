/* PlantTricks_Sim.js - behaviour for this unit (warm-up, Lesson 1, Lesson 2): fern frond flip, sort board with feature reveal,
   plantlet-vs-seedling time-lapse, fill-the-table and fill-the-tree, drop race with predict-first, "and why is that good" ladder,
   statement checker, wall simulator, disease simulator, guided calculation, flip cards. Content text lives in each page's HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var LOG={stmt:[],race:null,ladderSteps:null};
function save(){try{localStorage.setItem('sciU64Warm',JSON.stringify(LOG))}catch(e){}}
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

/* ---- fern frond: flip it, then tap a dot to open a spore bag ---- */
$$('.frondw').forEach(function(box){
  var svg=$('.fsvg',box), flip=$('.fbtn',box), note=$('.fnote2',box), zoom=$('.zoomb',box), flipped=false, opened=false;
  flip.onclick=function(){
    var s=svg.getAttribute('data-state')==='1'?'0':'1'; svg.setAttribute('data-state',s);
    if(s==='1'){ flipped=true; flip.textContent='Flip back to the top'; note.textContent='Many small spore bags can be found on the underside of a fern frond. Tap one dot.'; }
    else { flip.textContent='Flip the frond over'; note.textContent='The top of the frond is just green leaflets. Flip it over.'; }
  };
  $$('.dotb',box).forEach(function(d){d.onclick=function(){
    if(svg.getAttribute('data-state')!=='1') return;
    zoom.classList.remove('hid'); opened=true; note.textContent='Each dot is a spore bag. It holds thousands of tiny spores.';
    if(flipped&&opened) gwDone(box);
  };});
});

/* ---- sort board: tap a card, tap its box; the placed card shows the feature that does the job ---- */
$$('.sortw').forEach(function(box){
  var cur=null, cards=$$('.sc2',box), note=$('.snote2',box), left=cards.length;
  cards.forEach(function(c){c.onclick=function(){ if(c.disabled) return; cur=c; cards.forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the box it belongs in.'; };});
  $$('.sbin2',box).forEach(function(b){b.onclick=function(){
    if(!cur){ note.textContent='Tap a card first.'; return; }
    if(cur.getAttribute('data-b')===b.getAttribute('data-b')){
      var w=$('.binlist[data-b="'+b.getAttribute('data-b')+'"]',box); var s=document.createElement('div'); s.className='placed';
      var f=cur.getAttribute('data-f'); s.innerHTML='<b>'+esc(cur.textContent)+'</b>'+(f?' &mdash; '+esc(f):''); w.appendChild(s);
      cur.disabled=true; cur.classList.remove('sel'); cur.classList.add('used'); cur=null; left--; note.textContent='Yes.';
      if(!left){ var d=$('.sdone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { note.textContent=box.getAttribute('data-hint')||'Not that box. Think about the clue on the card.'; cur.classList.add('wrongc'); var cc=cur; setTimeout(function(){cc.classList.remove('wrongc')},650); }
  };});
});

/* ---- bean time-lapse: step through stages 1 to 4 ---- */
$$('.tl').forEach(function(box){
  var s=1, svg=$('.tlsvg',box), btn=$('.tlnext',box), caps=$$('.tcap',box);
  function draw(){
    svg.setAttribute('data-state',String(s));
    caps.forEach(function(c){c.classList.toggle('show',c.getAttribute('data-s')===String(s))});
    if(s<4){ btn.innerHTML='Jump ahead &#9654;'; } else { btn.style.display='none'; gwDone(box); }
  }
  btn.onclick=function(){ if(s<4){ s++; draw(); } };
  draw();
});

/* ---- drop race: predict the order first, then run it ---- */
$$('.race').forEach(function(box){
  var picked=null, run=$('.rrun',box), res=$('.rres',box);
  var W={hairs:90,wing:60,big:10};
  $$('.rpick',box).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-ran')) return;
    picked=b.getAttribute('data-k'); $$('.rpick',box).forEach(function(x){x.classList.toggle('on',x===b)}); run.disabled=false;
    res.textContent='You predict: '+b.textContent+'. Now run the race.';
  };});
  run.disabled=true;
  run.onclick=function(){
    if(!picked||box.getAttribute('data-ran')) return;
    box.setAttribute('data-ran','1'); run.disabled=true;
    $$('.rfill',box).forEach(function(f){f.style.width=W[f.getAttribute('data-k')]+'%'; f.setAttribute('data-landed',String(W[f.getAttribute('data-k')]/10));});
    setTimeout(function(){
      var right=(picked==='hairs');
      res.textContent=right?'Your prediction was right. Seeds with tufts of hairs stay up the longest, so the wind carries them farthest. The wing is next. The big seed drops close.':'Your prediction was different. Look at the bars: seeds with tufts of hairs stay up the longest and go farthest, then the wing, then the big seed.';
      LOG.race={pick:picked,right:right}; save();
      $$('.rpick',box).forEach(function(b){b.disabled=true});
      gwDone(box);
    },1800);
  };
});

/* ---- the "and why is that good?" ladder: climb two rungs ---- */
$$('.ladder').forEach(function(box){
  var rungs=$$('.lrung',box), tries=rungs.map(function(){return 0});
  rungs.forEach(function(r,i){
    var fb=$('.lfb',r), opts=$$('.lopt',r);
    opts.forEach(function(o){o.onclick=function(){
      if(o.disabled) return;
      if(o.hasAttribute('data-ok')){
        o.classList.add('good'); opts.forEach(function(x){x.disabled=true});
        fb.className='lfb ok'; fb.textContent='\u2714 '+(o.getAttribute('data-fb')||'Yes.');
        if(rungs[i+1]){ rungs[i+1].classList.remove('hid'); }
        else { LOG.ladderSteps={rung1Tries:tries[0],rung2Tries:tries[1],climbed:rungs.length}; save();
          var d=$('.ldone',box); if(d) d.classList.remove('hid'); gwDone(box); }
      } else {
        tries[i]++; o.classList.add('bad'); o.disabled=true;
        fb.className='lfb no'; fb.textContent='\u2718 '+(o.getAttribute('data-fb')||'Not that one. Ask: and why is that good?');
      }
    };});
  });
});

/* ---- wall simulator: spores land on a damp wall and a dry wall ---- */
$$('.wallsim').forEach(function(box){
  var go=$('.wgo',box), wall=$('.wall',box), res=$('.wres',box);
  go.onclick=function(){
    if(wall.classList.contains('go')) return;
    wall.classList.add('go'); go.disabled=true;
    res.textContent='The damp, shady wall grows moss. The dry, sunny wall stays bare. Spores need water to start growing.';
    gwDone(box);
  };
});

/* ---- disease simulator: one disease reaches two fields ---- */
$$('.disease').forEach(function(box){
  var go=$('.dgo',box), res=$('.dres',box);
  go.onclick=function(){
    if(box.getAttribute('data-ran')) return;
    box.setAttribute('data-ran','1'); go.disabled=true;
    $$('.fcellp',box).forEach(function(c){ if(c.getAttribute('data-r')==='0') c.classList.add('sick'); });
    res.textContent='Left field: every plant is an identical copy, so none can resist. All are sick. Right field: the plants are a little different, so some resist and live.';
    gwDone(box);
  };
});

/* ---- fill the table: pick a word chip, then tap an empty cell (also used for the cycle and the flower) ---- */
$$('.fillt').forEach(function(box){
  var cur=null, cells=$$('.fcell',box), note=$('.fnote',box);
  $$('.fchip',box).forEach(function(c){c.onclick=function(){ if(c.disabled) return; cur=c; $$('.fchip',box).forEach(function(x){x.classList.toggle('sel',x===c)}); note.textContent='Now tap the empty box that matches.'; };});
  cells.forEach(function(cl){cl.onclick=function(){
    if(cl.getAttribute('data-got')) return;
    if(!cur){ note.textContent='Pick a word first, then tap a box.'; return; }
    if(cur.getAttribute('data-v')===cl.getAttribute('data-a')){
      cl.setAttribute('data-got','1'); cl.textContent=cur.textContent; cl.classList.add('full'); note.textContent='Yes.';
      cur.disabled=true; cur.classList.remove('sel'); cur=null;
      if(cells.every(function(x){return x.getAttribute('data-got')})){ var d=$('.fdone',box); if(d) d.classList.remove('hid'); gwDone(box); }
    } else { cl.classList.add('wrongc'); setTimeout(function(){cl.classList.remove('wrongc')},650); note.textContent=box.getAttribute('data-hint')||'Not that one. Think again.'; }
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
      gwDone(box);
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
          if(Math.abs(v-ans)<1e-9) good('Yes, '+st.getAttribute('data-ans')+'.'); else bad(); }
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

/* ---- reveal .after notes once a screen's own check is passed ---- */
$$('.screen').forEach(function(sc){
  new MutationObserver(function(){ if(sc.getAttribute('data-term-pass')==='1'||sc.getAttribute('data-game-pass')==='1') $$('.after',sc).forEach(function(e){e.classList.remove('hid')}); }).observe(sc,{attributes:true});
});
})();

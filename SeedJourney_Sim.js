/* SeedJourney_Sim.js - behaviour for Unit 63 (warm-up, Lesson 1, Lesson 2): pot simulator, sort board with feature reveal,
   germination switchboard, bean time-lapse, drop simulator, iodine dropper, membrane-tube simulator with predict-first,
   fill-the-cycle, statement checker, guided calculation, flip cards. Content text lives in each page's HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var LOG={stmt:[],mem:null,noun:null};
function save(){try{localStorage.setItem('sciU63Warm',JSON.stringify(LOG))}catch(e){}}
function gwDone(el){
  el.setAttribute('data-wdone','1');
  var sc=el.closest('.screen');
  if(sc&&$$('.gw',sc).every(function(w){return w.getAttribute('data-wdone')==='1'})) sc.setAttribute('data-game-pass','1');
  if(window.sciRefresh) window.sciRefresh();
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

/* ---- pot simulator: 1, 5 or 20 seedlings share one pot ---- */
function potSVG(n){
  var h=n===1?48:(n===5?36:20), col=n===1?'#2e9b4e':(n===5?'#6aae45':'#b9b94a'), sw=n===1?4:(n===5?3:1.6), lr=n===1?10:(n===5?7:3.5);
  var g='<rect x="30" y="76" width="180" height="34" rx="4" fill="#b5651d" stroke="#7a4310" stroke-width="2"/><rect x="26" y="70" width="188" height="10" rx="3" fill="#8d5a2b"/>';
  for(var i=0;i<n;i++){
    var x=n===1?120:30+(180*(i+0.5)/n), hh=h-(n===20&&i%2?4:0);
    g+='<path d="M'+x+' 72 L'+x+' '+(72-hh)+'" stroke="'+col+'" stroke-width="'+sw+'" fill="none"/>';
    g+='<ellipse cx="'+(x-lr*0.8)+'" cy="'+(72-hh*0.7)+'" rx="'+lr+'" ry="'+(lr*0.55)+'" fill="'+col+'"/><ellipse cx="'+(x+lr*0.8)+'" cy="'+(72-hh)+'" rx="'+lr+'" ry="'+(lr*0.55)+'" fill="'+col+'"/>';
  }
  return '<svg viewBox="0 0 240 120" role="img" aria-label="Pot with '+n+' seedlings">'+g+'</svg>';
}
$$('.potsim').forEach(function(box){
  var tried={}, pic=$('.potpic',box), note=$('.potnote',box), bars=$$('.pfill',box);
  var share={1:100,5:20,20:5};
  var msg={1:'One seedling gets all the water, light and nutrients. It grows strong and green.',5:'Five seedlings share. Each gets less. They are smaller.',20:'Overcrowding: twenty seedlings. Each gets very little. They are thin, pale and weak.'};
  $$('.pbtn',box).forEach(function(b){b.onclick=function(){
    var n=+b.getAttribute('data-n'); tried[n]=1;
    $$('.pbtn',box).forEach(function(x){x.classList.toggle('on',x===b)});
    pic.innerHTML=potSVG(n); bars.forEach(function(f){f.style.width=share[n]+'%'});
    note.textContent=msg[n];
    if(tried[1]&&tried[5]&&tried[20]) gwDone(box);
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

/* ---- germination switchboard: sprouts only when water, oxygen and warmth are all on; light is free to be on or off ---- */
$$('.swb').forEach(function(box){
  var st={water:false,oxygen:true,warmth:true,light:false}, noLightSprout=false, lightBlocked=false;
  var svg=$('.swstate',box), note=$('.swnote',box);
  function draw(){
    var sprout=st.water&&st.oxygen&&st.warmth;
    svg.setAttribute('data-state',sprout?'1':'0');
    $$('.sw',box).forEach(function(b){var k=b.getAttribute('data-k'); b.classList.toggle('on',st[k]); b.setAttribute('aria-pressed',st[k]?'true':'false'); $('.swv',b).textContent=st[k]?'ON':'OFF';});
    if(sprout){ note.textContent=st.light?'The seed germinates: water, oxygen and the right temperature are on, so the first root and first shoot start to grow.':'The seed germinates with the light OFF. It does not need light to start.'; if(!st.light) noLightSprout=true; }
    else { var miss=[]; ['water','oxygen','warmth'].forEach(function(k){if(!st[k]) miss.push(k)}); note.textContent='Nothing happens. Still needed: '+miss.join(', ')+'.'; if(st.light) lightBlocked=true; }
    if(noLightSprout&&lightBlocked) gwDone(box);
  }
  $$('.sw',box).forEach(function(b){b.onclick=function(){var k=b.getAttribute('data-k'); st[k]=!st[k]; draw();};});
  draw();
});

/* ---- bean time-lapse: step through stages 1 to 4 ---- */
$$('.tl').forEach(function(box){
  var s=1, svg=$('.tlsvg',box), btn=$('.tlnext',box), caps=$$('.tcap',box);
  function draw(){
    svg.setAttribute('data-state',String(s));
    caps.forEach(function(c){c.classList.toggle('show',c.getAttribute('data-s')===String(s))});
    if(s<4){ btn.innerHTML='Next stage '+(s+1)+' &#9654;'; } else { btn.style.display='none'; gwDone(box); }
  }
  btn.onclick=function(){ if(s<4){ s++; draw(); } };
  draw();
});

/* ---- drop simulator: three seeds, same breeze ---- */
$$('.dropsim').forEach(function(box){
  var done={}, n=$$('.dseed',box).length, note=$('.dnote',box);
  $$('.dseed',box).forEach(function(b){b.onclick=function(){
    var d=+b.getAttribute('data-d'), bar=$('.dfill',b.parentNode);
    bar.style.width=(d*10)+'%'; bar.setAttribute('data-landed',String(d));
    $('.dout',b.parentNode).textContent=b.getAttribute('data-out'); done[b.getAttribute('data-k')]=1;
    if(Object.keys(done).length===n){ note.classList.remove('hid'); gwDone(box); }
  };});
});

/* ---- iodine dropper: add a drop to each food ---- */
$$('.iod').forEach(function(box){
  var foods=$$('.food',box), n=0;
  foods.forEach(function(f){ $('.idrop',f).onclick=function(){
    if(f.getAttribute('data-tested')) return;
    f.setAttribute('data-tested','1'); n++;
    var starch=f.getAttribute('data-s')==='1', sw=$('.swatch',f);
    sw.style.background=starch?'#1b1b3d':'#c8863a'; sw.setAttribute('data-colour',starch?'blue-black':'brown');
    $('.iout',f).textContent=starch?'Blue-black! Starch is here.':'Stays brown. No starch.';
    this.disabled=true;
    if(n===foods.length) gwDone(box);
  };});
});

/* ---- membrane tube: predict first, then run. Small iodine passes through; big starch stays. ---- */
$$('.mem').forEach(function(box){
  var picked=null, run=$('.mrun',box), svg=$('.msvg',box), res=$('.mres',box), pf=$('.mpf',box);
  $$('.mpick',box).forEach(function(b){b.onclick=function(){
    if(box.getAttribute('data-ran')) return;
    picked=b.getAttribute('data-k'); $$('.mpick',box).forEach(function(x){x.classList.toggle('on',x===b)});
    run.disabled=false; pf.textContent='You predict: '+b.textContent+'. Now run it.';
  };});
  run.disabled=true;
  run.onclick=function(){
    if(!picked||box.getAttribute('data-ran')) return;
    box.setAttribute('data-ran','1'); run.disabled=true;
    svg.setAttribute('data-state','1');
    setTimeout(function(){ svg.setAttribute('data-state','2'); },1400);
    setTimeout(function(){
      svg.setAttribute('data-state','3');
      var inEl=$('.m-in',svg), outEl=$('.m-out',svg);
      inEl.setAttribute('data-colour','blue-black'); outEl.setAttribute('data-colour','brown');
      res.classList.remove('hid');
      pf.textContent=(picked==='in')?'Your prediction was right.':'Your prediction was different from what happened. Look at where the starch is.';
      LOG.mem={pick:picked,right:picked==='in'}; save();
      $$('.mpick',box).forEach(function(b){b.disabled=true});
      gwDone(box);
    },2900);
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

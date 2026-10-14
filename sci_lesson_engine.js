/* sci_lesson_engine.js — generic lesson behaviour (screens, quick-picks, check-quizzes,
   self-check routing, word-match). Contains NO lesson content; all wording lives in each lesson's HTML. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var screens=$$('.screen'), cur=0, lastRoute=null;
var prev=$('#prev'), next=$('#next'), dots=$('#dots');
var body=document.body;

function solved(el){return el.getAttribute('data-done')==='1'}
function screenOK(sc){
  var lock=(sc.getAttribute('data-lock')||'').split(' ');
  var ok=true;
  if(lock.indexOf('mcq')>=0) $$('.mcq:not(.selfq)',sc).forEach(function(m){if(!solved(m))ok=false});
  if(lock.indexOf('pick')>=0) $$('.pick',sc).forEach(function(m){if(!solved(m))ok=false});
  if(lock.indexOf('term')>=0 && sc.getAttribute('data-term-pass')!=='1') ok=false;
  if(lock.indexOf('self')>=0 && sc.getAttribute('data-self-pass')!=='1') ok=false;
  if(lock.indexOf('game')>=0 && sc.getAttribute('data-game-pass')!=='1') ok=false;
  if(lock.indexOf('twist')>=0) $$('.twist',sc).forEach(function(m){if(!solved(m))ok=false});
  if(lock.indexOf('clue')>=0) $$('.cluebox',sc).forEach(function(m){if(!solved(m))ok=false});
  return ok;
}
function refresh(){
  var sc=screens[cur];
  prev.disabled=(cur===0);
  var last=(cur===screens.length-1);
  next.textContent= last ? (body.getAttribute('data-last-label')||'Finish') : 'Next →';
  next.disabled=!screenOK(sc);
  next.title=next.disabled?'Finish this screen first':'';
  var lm=$('#lockmsg'); if(!lm&&dots){lm=document.createElement('div'); lm.id='lockmsg'; lm.style.cssText='text-align:center;font-size:.85rem;font-weight:700;color:#b0426b;margin-top:4px'; dots.parentNode.insertBefore(lm,dots.nextSibling);}
  if(lm) lm.textContent=next.disabled?'Next unlocks when every question on this screen is answered.':'';
  if(dots) dots.textContent='Screen '+(cur+1)+' of '+screens.length;
}
function show(n){
  cur=n;
  screens.forEach(function(s,k){s.classList.toggle('active',k===n)});
  var r=screens[n].getAttribute('data-route'); if(r) lastRoute=r;
  if(screens[n].getAttribute('data-self-fail')==='1') resetSelf(screens[n]);
  refresh(); window.scrollTo(0,0);
  document.dispatchEvent(new CustomEvent('screenshown',{detail:{n:n,id:screens[n].id}}));
}
window.sciRefresh=refresh;
window.sciShow=function(id){screens.forEach(function(s,k){if(s.id===id) show(k)})};
prev.onclick=function(){if(cur>0) show(cur-1)};
next.onclick=function(){
  if(cur<screens.length-1) show(cur+1);
  else window.location.href=body.getAttribute('data-next-href');
};

/* ---- select-then-Check quizzes (.mcq) : retry until right ---- */
function bindMCQ(m){
  var opts=$$('.opt',m), chk=$('.chk',m), fb=$('.fb',m), sel=null, selfq=m.classList.contains('selfq');
  opts.forEach(function(o){o.onclick=function(){
    if(solved(m)||o.disabled) return;
    opts.forEach(function(x){x.classList.remove('sel')}); o.classList.add('sel'); sel=o;};});
  chk.onclick=function(){
    if(!sel||solved(m)) return;
    var ok=sel.hasAttribute('data-ok');
    if(selfq){
      m.setAttribute('data-done','1'); m.setAttribute('data-first',ok?'1':'0');
      opts.forEach(function(o){o.disabled=true; if(o.hasAttribute('data-ok')) o.classList.add('good'); else if(o===sel) o.classList.add('bad');});
      chk.disabled=true; fb.className='fb show '+(ok?'ok':'no'); fb.textContent=ok?'✔ Correct.':'✘ Not quite.';
      selfEval(m.closest('.screen')); return;
    }
    if(ok){
      m.setAttribute('data-done','1');
      opts.forEach(function(o){o.disabled=true; if(o.hasAttribute('data-ok')) o.classList.add('good');});
      fb.className='fb show ok'; fb.textContent='✔ '+(m.getAttribute('data-why')||'Correct.'); chk.disabled=true;
    } else {
      sel.classList.remove('sel'); sel.classList.add('bad'); sel.disabled=true; sel=null;
      fb.className='fb show no'; fb.textContent='✘ '+(m.getAttribute('data-hint')||'Not quite. Think again and try another answer.');
    }
    refresh();
  };
}
$$('.mcq').forEach(bindMCQ);

/* ---- instant quick-picks (.pick) ---- */
$$('.pick').forEach(function(p){
  var fb=$('.pfb',p);
  $$('.pb',p).forEach(function(b){b.onclick=function(){
    if(solved(p)||b.disabled) return;
    if(b.hasAttribute('data-ok')){
      p.setAttribute('data-done','1'); b.classList.add('good');
      $$('.pb',p).forEach(function(x){x.disabled=true});
      fb.className='pfb show ok'; fb.textContent='✔ '+(p.getAttribute('data-why')||'');
    } else {
      b.classList.add('bad'); b.disabled=true;
      fb.className='pfb show no'; fb.textContent='✘ '+(p.getAttribute('data-hint')||'Not quite. Try the other one.');
    }
    var nx=p.nextElementSibling; if(solved(p)&&nx&&nx.classList.contains('gated')) nx.classList.remove('gated');
    refresh(); document.dispatchEvent(new CustomEvent('pickdone',{detail:{el:p}}));
  };});
});

/* ---- self-check routing ---- */
function selfEval(sc){
  var qs=$$('.selfq',sc);
  if(!qs.every(solved)) return;
  var res=$('.selfres',sc), bad=qs.filter(function(q){return q.getAttribute('data-first')==='0'});
  if(!bad.length){ sc.setAttribute('data-self-pass','1'); res.innerHTML='<b>✅ Ready.</b> You can move on.'; res.className='selfres show okbox'; refresh(); return; }
  sc.setAttribute('data-self-fail','1');
  var html='<b>Not ready yet.</b> ';
  var seen={};
  bad.forEach(function(q){
    var f=q.getAttribute('data-fail'), tgt;
    if(f==='route'){ var want= lastRoute==='A'?'B':'A'; tgt=$('.screen[data-route="'+want+'"]'); }
    else tgt=document.getElementById(f);
    if(tgt && !seen[tgt.id]){ seen[tgt.id]=1; html+='<button class="gobtn" data-go="'+tgt.id+'">Go to '+tgt.getAttribute('data-label')+'</button> '; }
  });
  res.innerHTML=html; res.className='selfres show nobox';
  $$('.gobtn',res).forEach(function(b){b.onclick=function(){window.sciShow(b.getAttribute('data-go'))}});
}
function resetSelf(sc){
  sc.removeAttribute('data-self-fail');
  $$('.selfq',sc).forEach(function(m){
    m.removeAttribute('data-done'); m.removeAttribute('data-first');
    $$('.opt',m).forEach(function(o){o.disabled=false; o.classList.remove('sel','good','bad')});
    $('.chk',m).disabled=false; $('.fb',m).className='fb';
  });
  var r=$('.selfres',sc); r.className='selfres'; r.innerHTML='';
}


/* ---- twist: tap the one word that changes the answer, then the options appear ---- */
$$('.twist').forEach(function(t){
  var fb=$('.pfb',t), after=$('.after',t);
  $$('.tw',t).forEach(function(w){w.onclick=function(){
    if(solved(t)) return;
    if(w.hasAttribute('data-ok')){
      t.setAttribute('data-done','1'); w.classList.add('good');
      fb.className='pfb show ok'; fb.textContent='\u2714 '+(t.getAttribute('data-why')||'');
      if(after) after.classList.remove('hid');
      refresh();
    } else { w.classList.add('bad'); fb.className='pfb show no'; fb.textContent='\u2718 '+(t.getAttribute('data-hint')||'Not that word. Which one word changes the answer?'); }
  };});
});

/* ---- predict-first: type a short guess, then the options appear ---- */
$$('.pred').forEach(function(m){
  var inp=$('.pin',m), btn=$('.pshow',m), body=$('.pbody',m);
  inp.oninput=function(){ btn.disabled=(inp.value.trim().length<2); };
  btn.onclick=function(){ if(inp.value.trim().length<2) return; inp.readOnly=true; btn.style.display='none'; body.classList.remove('hid'); m.setAttribute('data-pred',inp.value.trim()); };
});

/* ---- word-match term check ---- */
$$('.termcheck').forEach(function(tc){
  var sc=tc.closest('.screen'), chips=$$('.tchip',tc), rows=$$('.trow',tc), sel=null, res=$('.tres',tc), chk=$('.tchk',tc);
  chips.forEach(function(c){c.onclick=function(){ if(c.classList.contains('used')) return; chips.forEach(function(x){x.classList.remove('sel')}); c.classList.add('sel'); sel=c; };});
  rows.forEach(function(r){r.onclick=function(){
    var slot=$('.slot',r);
    if(r.classList.contains('locked')) return;
    if(r.getAttribute('data-got')){ chips.forEach(function(c){if(c.getAttribute('data-t')===r.getAttribute('data-got')) c.classList.remove('used')}); r.removeAttribute('data-got'); slot.textContent='…'; return; }
    if(!sel) return;
    r.setAttribute('data-got',sel.getAttribute('data-t')); slot.textContent=sel.textContent; sel.classList.add('used'); sel.classList.remove('sel'); sel=null;
  };});
  chk.onclick=function(){
    if(rows.some(function(r){return !r.getAttribute('data-got')})){ res.textContent='Match all '+rows.length+' words first.'; return; }
    var n=0;
    rows.forEach(function(r){ var ok=r.getAttribute('data-got')===r.getAttribute('data-t'); r.classList.toggle('rgood',ok); r.classList.toggle('rbad',!ok); if(ok){n++; r.classList.add('locked');} });
    if(n===rows.length){ sc.setAttribute('data-term-pass','1'); res.innerHTML='<b>'+n+' / '+n+' — unlocked!</b>'; chk.disabled=true; }
    else { res.innerHTML='<b>'+n+' / '+rows.length+'.</b> Tap a red word to clear it, then fix it and press Check again.';
      rows.forEach(function(r){ if(r.classList.contains('rbad')){ r.onclick2=1; } }); }
    refresh();
  };
  rows.forEach(function(r){ r.addEventListener('click',function(){ r.classList.remove('rbad'); }); });
});

/* ---- plain state-stepper buttons: <button class="seqbtn" data-target="#id" data-max="3"> ---- */
$$('.seqbtn').forEach(function(b){
  b.onclick=function(){
    var t=$(b.getAttribute('data-target')), max=+b.getAttribute('data-max');
    var s=(+t.getAttribute('data-state')||0); s=(s>=max)?0:s+1; t.setAttribute('data-state',s);
    $$('.cap',t.parentNode).forEach(function(c){c.classList.toggle('show',c.getAttribute('data-s')==String(s))});
  };
});

refresh();
})();

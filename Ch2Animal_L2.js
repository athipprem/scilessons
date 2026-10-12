/* Lesson 2 visuals/behaviour: slide-making animation, cell-or-bubble game, two-clue boxes.
   Wording is read from the page, not stored here. */
(function(){
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function txt(sel,k,attr){var e=$(sel+' span['+attr+'="'+k+'"]'); return e?e.textContent:''}

/* ---- slide animation ---- */
var step=1;
function setStep(n){
  step=n;
  for(var k=1;k<=5;k++){var g=$('#st'+k); if(g) g.style.display=(k===n)?'':'none';}
  $$('.stepbar span').forEach(function(s){s.classList.toggle('on',+s.getAttribute('data-n')===n)});
  $('#sline').textContent=txt('#stline',n,'data-n');
  $('#lidbtns').style.display=(n===4)?'':'none';
  $('#bStep').style.display=(n===4)?'none':'';
  $('#bStep').textContent=(n===5)?'Start again':'Next step';
  if(n===4){$('#lidflat').style.display='none';$('#lidangle').style.display='none';}
}
if($('#bStep')){
  $('#bStep').onclick=function(){ setStep(step>=5?1:step+1) };
  $('#bFlat').onclick=function(){ $('#lidflat').style.display=''; $('#lidangle').style.display='none'; $('#sline').textContent=txt('#stline','f','data-n'); };
  $('#bAngle').onclick=function(){ $('#lidflat').style.display='none'; $('#lidangle').style.display=''; $('#sline').textContent=txt('#stline','a','data-n'); $('#bStep').style.display=''; };
  setStep(1);
}

/* ---- cell or bubble game ---- */
var objs=$$('#micro .obj'), picked=null, solvedN=0;
objs.forEach(function(o){o.onclick=function(){
  if(o.classList.contains('done')) return;
  picked=o; objs.forEach(function(x){x.style.filter=''}); o.style.filter='drop-shadow(0 0 6px #7b2d6b)';
  $('#ask').classList.add('show');
};});
function answer(kind){
  if(!picked) return;
  if(picked.getAttribute('data-kind')===kind){
    picked.classList.add('done'); picked.style.filter=''; solvedN++;
    $('#gamefb').textContent=txt('#gtxt','right','data-k')+' '+picked.getAttribute('data-clue');
    $('#gamecount').textContent=solvedN+' / '+objs.length+' sorted';
    picked=null; $('#ask').classList.remove('show');
    if(solvedN===objs.length){ $('#tGame').setAttribute('data-game-pass','1'); $('#gamefb').textContent+=' '+txt('#gtxt','all','data-k'); window.sciRefresh(); }
  } else $('#gamefb').textContent=txt('#gtxt','wrong','data-k');
}
if($('#aCell')){ $('#aCell').onclick=function(){answer('cell')}; $('#aBub').onclick=function(){answer('bubble')}; }

/* ---- two-clue boxes ---- */
$$('.cluebox').forEach(function(cb){
  var cls=$$('.cl',cb), fb=$('.fb',cb), chk=$('.chk',cb);
  cls.forEach(function(c){c.onclick=function(){ if(cb.getAttribute('data-done')==='1') return; c.classList.toggle('sel'); };});
  chk.onclick=function(){
    if(cb.getAttribute('data-done')==='1') return;
    var sel=cls.filter(function(c){return c.classList.contains('sel')}).map(function(c){return c.getAttribute('data-n')}).sort().join(',');
    if(!sel) return;
    if(sel.indexOf(',')<0){ fb.className='fb show no'; fb.textContent='✘ '+cb.getAttribute('data-one'); return; }
    if(sel===cb.getAttribute('data-good')){
      cb.setAttribute('data-done','1'); fb.className='fb show ok'; fb.textContent='✔ '+cb.getAttribute('data-why'); chk.disabled=true;
      cls.forEach(function(c){c.disabled=true});
      window.sciRefresh();
    } else { fb.className='fb show no'; fb.textContent='✘ '+cb.getAttribute('data-bad'); cls.forEach(function(c){c.classList.remove('sel')}); }
  };
});
})();

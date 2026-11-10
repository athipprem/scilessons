/* Ch3MockB_Sim.js - warm-up behaviour for Milestone 6: statement checker, spelling, prediction match. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var LOG={stmt:[],pred:null,spell:[]};
function save(){try{localStorage.setItem('sciM6Warm',JSON.stringify(LOG))}catch(e){}}
function roman(a){var n=['I','II','III'],o=[];a.forEach(function(v,i){if(v)o.push(n[i])});
  if(o.length===0) return 'none of them';
  if(o.length===3) return 'I, II and III';
  if(o.length===1) return o[0]+' only';
  return o.slice(0,-1).join(', ')+' and '+o[o.length-1]+' only';}

/* ---- S1: statement checker. Options stay locked until every statement has a True or False tap. ---- */
$$('.stmt').forEach(function(box,bi){
  var rows=$$('.srow',box), opts=$$('.so',box), note=$('.snote',box), fb=$('.pfb',box);
  var taps=rows.map(function(){return null}), first=null, tries=0;
  function allTapped(){return taps.every(function(v){return v!==null})}
  function refreshOpts(){
    var ready=allTapped(), mine=ready?roman(taps):'';
    opts.forEach(function(o){
      if(box.getAttribute('data-done')==='1') return;
      o.disabled=!ready; o.classList.toggle('mine',ready&&o.getAttribute('data-r')===mine);
    });
    note.textContent=ready?('Your taps say: '+mine+'. Now pick the answer, and check every statement once more.'):'Tap True or False on every statement. The answers open when you have tapped all three.';
  }
  rows.forEach(function(r,i){
    $$('.tf',r).forEach(function(b){b.onclick=function(){
      if(box.getAttribute('data-done')==='1') return;
      taps[i]=+b.getAttribute('data-v');
      $$('.tf',r).forEach(function(x){x.classList.toggle('on',x===b)});
      refreshOpts();
    };});
  });
  opts.forEach(function(o){o.onclick=function(){
    if(o.disabled||box.getAttribute('data-done')==='1') return;
    tries++; if(first===null) first=o.getAttribute('data-r');
    if(o.hasAttribute('data-ok')){
      box.setAttribute('data-done','1'); o.classList.add('good');
      opts.forEach(function(x){x.disabled=true});
      var tr=rows.map(function(r,i){return 'I'.repeat(i+1).replace('IIII','IV')+' is '+(r.getAttribute('data-t')==='1'?'true':'false')}).join('. ');
      fb.className='pfb show ok'; fb.textContent='✔ '+tr+'. Good: you chose to check every statement.';
      LOG.stmt.push({item:box.getAttribute('data-id'),taps:taps.slice(),firstPick:first,tries:tries}); save();
      if(typeof window.sciRefresh==='function') window.sciRefresh();
    } else {
      o.classList.add('bad'); o.disabled=true;
      fb.className='pfb show no'; fb.textContent='✘ Not that one. Read each statement again slowly. You must check every statement, not stop at the first true one.';
    }
  };});
  refreshOpts();
});

/* ---- S3: prediction match. After the pick, compare it with what he typed first. ---- */
$$('.predm').forEach(function(box){
  var panel=$('.mm',box);
  $$('.pb',box).forEach(function(b){b.addEventListener('click',function(){
    var pred=(box.getAttribute('data-pred')||'').toLowerCase().trim(), pick=b.textContent.toLowerCase().trim();
    if(!pred) return;
    var same=pred===pick||pred.replace(/[^0-9a-z]/g,'')===pick.replace(/[^0-9a-z]/g,'')||(pred.match(/\d+/)||[''])[0]===(pick.match(/\d+/)||['x'])[0]&&/\d/.test(pred);
    LOG.pred={predicted:box.getAttribute('data-pred'),picked:b.textContent.trim(),match:same}; save();
    panel.className='mm show '+(same||b.hasAttribute('data-ok')?'okbox':'nobox');
    if(!same&&b.hasAttribute('data-ok')){panel.innerHTML='You predicted <b>'+box.getAttribute('data-pred')+'</b> but picked <b>'+b.textContent.trim()+'</b>, and that is right. A prediction is a first idea: it is fine to change it when the numbers tell you.'; return}
    panel.innerHTML=same?('You predicted <b>'+box.getAttribute('data-pred')+'</b> and picked <b>'+b.textContent.trim()+'</b>. My answer matches my prediction.'):
      ('You predicted <b>'+box.getAttribute('data-pred')+'</b> but picked <b>'+b.textContent.trim()+'</b>. Does my answer match my prediction? Keep it or change it: only change it if you can point to the word that tells you.');
  });});
});

})();

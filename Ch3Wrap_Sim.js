/* Ch3Wrap_Sim.js: warm-up sort and iodine slide, hens (what if they stopped), fertilisation stepper, Bird's-eye concept map,
   starter builder and the guided calc walkthrough (gcInit). Captions that teach a fact live in the page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext [data-k="'+k+'"]');return e?e.textContent:''}
function SP(){return window.SIM_SPEED||1}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
function svgWrap(inner,vb){return '<svg viewBox="'+vb+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'start')+'">'+s+'</text>'}

var TEAL='#0a4d55', ORG='#e8903c';

/* ---------- warm-up: onion skin before / after iodine ---------- */
var iod=$('#iod');
if(iod){
  var seenI={};
  function onion(after){
    var s='';
    for(var r=0;r<3;r++) for(var c=0;c<6;c++){
      var x=14+c*58+(r%2)*14, y=10+r*50;
      s+='<rect x="'+x+'" y="'+y+'" width="54" height="46" rx="3" fill="'+(after?'#f3cf7a':'#f4f1e6')+'" stroke="'+(after?'#7a4a12':'#cfd8dc')+'" stroke-width="'+(after?3:1.5)+'"/>';
      if(after) s+='<circle cx="'+(x+27)+'" cy="'+(y+23)+'" r="7" fill="#5b3510"/>';
    }
    return svgWrap(s,'0 0 380 160');
  }
  function iodShow(a){ $('#iodsvg').innerHTML=onion(a); var c=$('#iodcap'); c.textContent=T(a?'iod1':'iod0'); c.classList.add('show'); seenI[a?'a':'b']=1;
    if(seenI.a&&seenI.b){ $('#iodend').classList.remove('hid'); pass(iod); } }
  $('#iodb').onclick=function(){ iodShow(false); };
  $('#ioda').onclick=function(){ iodShow(true); };
  iodShow(false); seenI={};
}

/* ---------- warm-up: does the clue PROVE it? (card sort, on screen) ---------- */
var ps=$('#psort');
if(ps){
  var RND=[
    {c:'lays eggs',a:{eagle:'bird',ostrich:'bird',crocodile:'reptile',butterfly:'insect',platypus:'mammal'},v:0},
    {c:'can fly',a:{eagle:'bird',butterfly:'insect'},v:0},
    {c:'gives birth to live young',a:{dolphin:'mammal',cow:'mammal',shark:'fish'},v:0},
    {c:'feeds young on milk',a:{dolphin:'mammal',cow:'mammal',platypus:'mammal'},v:1},
    {c:'has feathers',a:{eagle:'bird',ostrich:'bird'},v:1}
  ];
  var ri=0, misses=0, locked=false, tray=$('#pstray'), pile=$('#pspile'), fb=$('#psfb'), vr=$('#psv');
  function setFb(t,c){ fb.textContent=t; fb.className='pfb show '+(c||'no'); }
  function showRound(){
    $('#psclue').textContent='Round '+(ri+1)+' of 5. Put every animal that has this clue in the pile: '+RND[ri].c;
    $$('.pcd',pile).concat($$('.pcd',tray)).forEach(function(b){ tray.appendChild(b); b.classList.remove('glow'); var sm=$('small',b); if(sm) b.removeChild(sm); b.disabled=false; });
    misses=0; locked=false; vr.classList.add('hid'); fb.className='pfb'; fb.textContent=''; $('#pscheck').disabled=false;
  }
  $$('.pcd',tray).forEach(function(b){ b.onclick=function(){ if(locked) return; (b.parentNode===pile?tray:pile).appendChild(b); b.classList.remove('glow'); }; });
  $('#pscheck').onclick=function(){
    if(locked) return;
    var R=RND[ri], inP=$$('.pcd',pile).map(function(b){return b.getAttribute('data-a')});
    var extra=inP.filter(function(x){return !(x in R.a)}), miss=Object.keys(R.a).filter(function(x){return inP.indexOf(x)<0});
    if(extra.length){ setFb('Does a '+extra[0]+' really do this?'); return; }
    if(miss.length){ misses++;
      if(misses>=2){ var mb=$('.pcd[data-a="'+miss[0]+'"]'); if(mb) mb.classList.add('glow'); }
      setFb(miss.length===1?T('ps-miss1'):T('ps-missN')); return; }
    locked=true; $('#pscheck').disabled=true;
    $$('.pcd',pile).forEach(function(b){ var sm=document.createElement('small'); sm.textContent=R.a[b.getAttribute('data-a')]; b.appendChild(sm); });
    setFb(T('ps-yes'),'ok'); vr.classList.remove('hid');
  };
  $$('button',vr).forEach(function(b){ b.onclick=function(){
    if(+b.getAttribute('data-v')!==RND[ri].v){ setFb(T('ps-verdict')); return; }
    setFb(T('ps-ok'),'ok'); vr.classList.add('hid'); ri++;
    if(ri<RND.length) setTimeout(showRound,350/SP());
    else { $('#psclue').textContent='All 5 rounds done.'; $('#psend').classList.remove('hid'); pass(ps); }
  }; });
  showRound();
}

/* ---------- L1 s1: what if they stopped? ---------- */
function hen(){ return '<svg class="hen" viewBox="0 0 60 60" xmlns="'+NS+'" role="img" aria-label="a hen"><ellipse cx="28" cy="38" rx="20" ry="15" fill="#f6ddb5" stroke="#8a5a00" stroke-width="2.4"/><circle cx="46" cy="22" r="9" fill="#f6ddb5" stroke="#8a5a00" stroke-width="2.4"/><path d="M54,22 l7,3 l-7,3 Z" fill="#e8903c" stroke="#8a5a00" stroke-width="1.6"/><path d="M42,13 q3,-8 6,0 q3,-6 4,2" fill="#d94a3a" stroke="#8a2a1a" stroke-width="1.6"/><circle cx="48" cy="21" r="1.8" fill="#263238"/><path d="M10,36 q-8,-10 -4,-18 q8,6 12,14" fill="#e0b97a" stroke="#8a5a00" stroke-width="2"/></svg>'; }
var hn=$('#hens');
if(hn){
  var N=5, gone=0, busy2=false;
  hn.innerHTML=new Array(N+1).join(hen());
  var hs=$$('.hen',hn), sb=$('#stopb');
  sb.onclick=function(){
    if(busy2||gone>=N) return; busy2=true; sb.disabled=true;
    var t=setInterval(function(){
      hs[gone].classList.add('gone'); gone++;
      $('#stopcap').textContent=T('stop'+(gone<N?'1':'2')).replace('%n',N-gone);
      if(gone>=N){ clearInterval(t); $('#stopend').classList.remove('hid'); $('#stopcap').classList.add('ex'); pass(hn); busy2=false; }
    },450/SP());
  };
}

/* ---------- L1 s5: fertilisation stepper (Ken's family) ---------- */
var fe=$('#fert');
if(fe){
  var st=0, MAXS=4;
  function fcell(cx,cy,r,nuc,fill){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(fill||'#fff3e0')+'" stroke="#d98a1c" stroke-width="3"/>'+(nuc?'<circle cx="'+cx+'" cy="'+cy+'" r="'+nuc+'" fill="#0a4d55"/>':''); }
  function sperm(x,y,sc){ return '<g transform="translate('+x+' '+y+') scale('+sc+')"><ellipse cx="0" cy="0" rx="9" ry="6" fill="#1565c0" stroke="#0d47a1" stroke-width="2"/><path d="M9,0 q10,-8 20,0 t20,0" fill="none" stroke="#1565c0" stroke-width="2.6"/></g>'; }
  function fdraw(){
    var s='';
    if(st===0){ s+=fcell(240,80,42,10)+txt(240,142,'egg (mother)',15,TEAL,800,'middle')+sperm(80,80,1.3)+txt(100,118,'sperm (father)',15,'#0d47a1',800,'middle'); }
    if(st===1){ s+=fcell(190,80,42,10)+sperm(110,80,1.1)+'<circle cx="150" cy="80" r="6" fill="#0d47a1"/>'+txt(190,142,'the sperm reaches the egg',15,TEAL,800,'middle'); }
    if(st===2){ s+=fcell(190,80,42,0)+'<circle cx="176" cy="80" r="9" fill="#0d47a1"/><circle cx="204" cy="80" r="9" fill="#0a4d55"/>'+txt(190,142,'the two nuclei join',15,TEAL,800,'middle'); }
    if(st===3){ s+=fcell(190,80,40,0,'#ffe8c2')+'<circle cx="190" cy="80" r="12" fill="#6b2a8a"/>'+txt(190,142,'a fertilised egg',15,TEAL,800,'middle'); }
    if(st===4){
      s+=fcell(150,34,18,5,'#ffe8c2')+fcell(190,34,18,5,'#ffe8c2')+txt(228,40,'it divides',14,TEAL,800,'start');
      [[8,'organs forming'],[12,'organs formed'],[38,'almost ready']].forEach(function(w,i){
        var x=70+i*120, r=10+i*7; s+='<ellipse cx="'+x+'" cy="'+(130-i*3)+'" rx="'+r+'" ry="'+(r*1.15)+'" fill="#f7c9a0" stroke="#8a4b1a" stroke-width="2.4"/>'+txt(x,176,'week '+w[0],14,TEAL,800,'middle')+txt(x,194,w[1]+' ('+w[0]+')',12,'#455a64',700,'middle');
      });
    }
    $('#fertsvg').innerHTML=svgWrap(s,st===4?'0 0 380 205':'0 0 380 155');
    $('#fertcap').textContent=T('fert'+st); $('#fertcap').classList.add('show');
    $('#fertb').textContent= st<MAXS ? T('fertbtn'+st) : '';
    if(st>=MAXS){ $('#fertb').style.display='none'; $('#fertend').classList.remove('hid'); pass(fe); }
  }
  $('#fertb').onclick=function(){ if(st<MAXS){ st++; fdraw(); } };
  fdraw();
}

/* ---------- L1 s8: the Bird's-eye concept map ---------- */
var cm=$('#cmap');
if(cm){
  var cur=null, filled=0, bl=$$('#cmap .blank'), bk=$$('#cmap .bk');
  bk.forEach(function(b){ b.onclick=function(){ if(b.classList.contains('used')) return; bk.forEach(function(x){x.classList.remove('sel')}); b.classList.add('sel'); cur=b; $('#cmfb').textContent=''; }; });
  bl.forEach(function(k){ k.onclick=function(){
    var fb=$('#cmfb');
    if(k.classList.contains('full')) return;
    if(!cur){ fb.textContent=T('cm-pick'); fb.className='pfb show no'; return; }
    if(cur.getAttribute('data-v')===k.getAttribute('data-a')){
      k.textContent=cur.textContent; k.classList.add('full'); cur.classList.add('used'); cur.classList.remove('sel'); cur=null; filled++;
      fb.textContent=T('cm-ok')+' '+filled+' of '+bl.length+'.'; fb.className='pfb show ok';
      if(filled===bl.length){ $('#cmend').classList.remove('hid'); pass(cm); }
    } else { fb.textContent=T('cm-no'); fb.className='pfb show no'; }
  }; });
}
/* ---------- tap a card, then tap its bin ---------- */
var srt=$('#sort');
if(srt){
  var selc=null, placed=0, cards=$$('#sort .sc');
  cards.forEach(function(c){c.onclick=function(){ if(c.disabled) return; cards.forEach(function(x){x.classList.remove('sel')}); c.classList.add('sel'); selc=c; };});
  $$('#sort .sbin').forEach(function(b){b.onclick=function(){
    var fb=$('#sortfb');
    if(!selc){ fb.textContent='Tap a card first.'; fb.className='pfb show no'; return; }
    if(selc.getAttribute('data-bin')===b.getAttribute('data-bin')){
      var li=document.createElement('div'); li.className='placed'; li.textContent=selc.textContent; $('.bl',b.parentNode).appendChild(li);
      selc.disabled=true; selc.classList.remove('sel'); selc.classList.add('used'); selc=null; placed++;
      fb.textContent='Yes. '+placed+' of '+cards.length+' sorted.'; fb.className='pfb show ok';
      if(placed===cards.length){ $('#sortend').classList.remove('hid'); pass(srt); }
    } else { fb.textContent=T('sort-no'); fb.className='pfb show no'; }
  };});
}


/* ---------- answer-the-question starter builder ---------- */
var xw=$('#xw');
if(xw){
  var lines=$$('#xw .xl'), shown=0, wb=$('#xwbtn');
  wb.onclick=function(){
    if(lines.length>shown){ lines[shown].classList.remove('hid'); shown++; }
    if(shown===lines.length){ wb.style.display='none'; $('#xt').classList.remove('hid'); }
    else wb.textContent='Show line '+(shown+1)+' ▶';
  };
  var QW=($('#xt').getAttribute('data-q')||'').toLowerCase().replace(/[^a-z ]/g,' ').split(/\s+/).filter(Boolean);
  var startsOK=function(v){
    var a=' '+v.toLowerCase().replace(/[^a-z ]/g,' ').split(/\s+/).filter(Boolean).join(' ')+' ';
    for(var i=0;i+4<=QW.length;i++){ if(a.indexOf(' '+QW.slice(i,i+4).join(' ')+' ')>=0) return true; }
    return false;
  };
  var boxes=$$('#xt .tbx');
  var unlock=function(i){ $$('#xw .xl').forEach(function(l){l.classList.remove('flash')}); if(boxes[i+1]){ boxes[i+1].classList.remove('hid'); var f=$('input[type=text]',boxes[i+1]); if(f) f.focus(); } else $('#xown').classList.remove('hid'); };
  boxes.forEach(function(bx,i){
    var tries=0, kind=bx.getAttribute('data-kind'), fb=$('.gfb',bx), mdl=$('.tmodel',bx);
    function good(){ bx.classList.add('ok'); fb.className='gfb ok'; fb.innerHTML='&#10004; Yes.'; $$('input,button',bx).forEach(function(e){ if(e.type==='text') e.readOnly=true; else e.disabled=true; }); unlock(i); }
    function bad(){
      tries++; fb.className='gfb no';
      if(tries===1) fb.innerHTML='&#10008; Not yet. Hint: '+bx.getAttribute('data-h1');
      else {
        fb.innerHTML='&#10008; Not yet. '+bx.getAttribute('data-h2');
        var n=+bx.getAttribute('data-flash'); $$('#xw .xl').forEach(function(l,k){l.classList.toggle('flash',k===n)});
        mdl.innerHTML='<b>Try this line:</b> '+bx.getAttribute('data-model')+' <br>Now type it yourself in the box.'; mdl.classList.remove('hid');
      }
    }
    if(kind==='choice'){ $$('.xo',bx).forEach(function(o){ o.onclick=function(){ if(o.hasAttribute('data-ok')) good(); else bad(); }; }); return; }
    var inp=$('input[type=text]',bx), btn=$('.tbchk',bx);
    function go(){
      var v=inp.value.trim(); if(!v) return;
      var ok= kind==='starter' ? startsOK(v) : (new RegExp(bx.getAttribute('data-rx1'),'i').test(v) && (!bx.getAttribute('data-rx2') || new RegExp(bx.getAttribute('data-rx2'),'i').test(v)));
      if(ok) good(); else bad();
    }
    btn.onclick=go; inp.onkeydown=function(e){ if(e.key==='Enter') go(); };
  });
  var ta=$('#xta'), xshow=$('#xshow'), xfin=$('#xfin'), edits=0;
  ta.oninput=function(){ xshow.disabled=(ta.value.trim().length===0); };
  xshow.onclick=function(){ $('#xcheck').classList.remove('hid'); xshow.style.display='none'; };
  xfin.onclick=function(){
    var all=$$('#xcheck input[type=checkbox]').every(function(c){return c.checked});
    if(all || edits>=1){ ta.readOnly=true; xfin.disabled=true; $('#xmsg').textContent= all ? T('x-good') : T('x-ok'); pass(xw); }
    else { edits++; ta.focus(); $('#xmsg').textContent=T('x-add'); }
  };
}

/* ---------- guided calc walkthrough (as in Ch3Two_Sim.js) ---------- */
function gcInit(box){
  var watch=$('.gwatch',box), turn=$('.gturn',box), own=$('.gown',box);
  var ws=$$('.ws',watch), wbtn=$('.gwbtn',watch), shown=0;
  wbtn.onclick=function(){
    if(ws.length>shown){ ws[shown].classList.remove('hid'); shown++; }
    if(ws.length>shown){ wbtn.innerHTML='Show step '+(shown+1)+' &#9654;'; }
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
        var go=function(){ var v=parseFloat((inp.value||'').replace(/,/g,'').replace(/[^0-9.\-]/g,'')); if(isNaN(v)) return;
          if(Math.abs(v-ans)<1e-9) good('Yes, '+st.getAttribute('data-ans')+'.'); else bad(); };
        b.onclick=go; inp.onkeydown=function(e){ if(e.key==='Enter') go(); };
      } else {
        $$('.gopt',st).forEach(function(o){ o.onclick=function(){ if(o.getAttribute('data-ok')) good('Yes. '+o.textContent+'.'); else bad(); }; });
      }
    });
  }
  wire(turn, function(){ own.classList.remove('hid'); var f=$('input',own); if(f) f.focus(); });
  wire(own, function(){ var d=document.createElement('div'); d.className='job'; d.innerHTML='&#127881; <b>You did it on your own.</b> Same steps every time: say what the numbers mean, write the step, size check.'; own.appendChild(d); pass(box); });
}
$$('.gcalc').forEach(gcInit);
})();

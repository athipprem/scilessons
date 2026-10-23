/* Ch3Two_Sim.js: Beetle Garden, plant sort, Water World, embryo timeline, life-stage order, typed Explain-it builder
   and the guided calc walkthrough (gcInit, copied from Ch3Why_Sim.js). Captions that teach a fact live in the page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext [data-k="'+k+'"]');return e?e.textContent:''}
function SP(){return window.SIM_SPEED||1}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
function svgWrap(inner,vb){return '<svg viewBox="'+vb+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'start')+'">'+s+'</text>'}
var TEAL='#0e8a8a', CORAL='#e8604c', INK='#263238', GREYC='#cfd8dc';

/* ---------- Beetle Garden: two gardens of 20 beetles, then change comes ---------- */
var bg=$('#bg');
if(bg){
  var TYPES=['G','B','S','G','D','B','G','S','G','D','S','G','B','G','D','G','S','B','G','D'];
  var mode='calm', seen={};
  function beetle(cx,cy,t,alive){
    var fill={G:'#3a9a3a',B:'#8a5a2b',S:'#d8b66a',D:'#2b2b2b'}[t];
    if(!alive) return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="9" ry="7" fill="none" stroke="#b0a58f" stroke-width="1.5" stroke-dasharray="3 3" opacity=".7"/>';
    var s='<ellipse cx="'+cx+'" cy="'+cy+'" rx="9" ry="7" fill="'+fill+'" stroke="#1b1b1b" stroke-width="1.2"/><circle cx="'+(cx+10)+'" cy="'+cy+'" r="3.3" fill="#1b1b1b"/>';
    if(t==='S') s+='<circle cx="'+(cx-3)+'" cy="'+(cy-2)+'" r="1.6" fill="#4a3210"/><circle cx="'+(cx+1)+'" cy="'+(cy+2)+'" r="1.6" fill="#4a3210"/><circle cx="'+(cx-5)+'" cy="'+(cy+2)+'" r="1.4" fill="#4a3210"/>';
    return s;
  }
  function aliveA(i){ return mode==='calm' || (mode==='autumn' && i===7); }
  function aliveB(i){ var t=TYPES[i]; return mode==='calm' || (mode==='autumn' && (t==='B'||t==='S')) || (mode==='disease' && t!=='G'); }
  function bgDraw(){
    var leaf= mode==='autumn' ? '#e6cfa3' : (mode==='disease' ? '#d9e3c0' : '#cfe8c0'), s='', i, nA=0, nB=0;
    s+='<rect x="4" y="22" width="170" height="140" rx="10" fill="'+leaf+'" stroke="#7a8b6a" stroke-width="2"/>';
    s+='<rect x="186" y="22" width="170" height="140" rx="10" fill="'+leaf+'" stroke="#7a8b6a" stroke-width="2"/>';
    s+=txt(89,16,'One parent',13,INK,800,'middle')+txt(271,16,'Two parents',13,INK,800,'middle');
    for(i=0;20>i;i++){
      var cx=26+(i%5)*30, cy=46+Math.floor(i/5)*30, a=aliveA(i), b=aliveB(i);
      if(a) nA++; if(b) nB++;
      s+=beetle(cx,cy,'G',a)+beetle(cx+182,cy,TYPES[i],b);
    }
    $('#bgsvg').innerHTML=svgWrap(s,'0 0 360 170');
    $('#bgcnt').innerHTML='<div class="twocol"><div class="cap show">20 &rarr; <b>'+nA+'</b> left<br>one parent, identical young</div><div class="cap show">20 &rarr; <b>'+nB+'</b> left<br>two parents, different young</div></div>';
    $('#bgcap').textContent= mode==='calm' ? T('bg0') : (mode==='autumn' ? T('bga') : T('bgd'));
    if(seen.autumn && seen.disease){ $('#bgend').classList.remove('hid'); pass(bg); }
  }
  $('#bgaut').onclick=function(){ mode='autumn'; seen.autumn=1; bgDraw(); };
  $('#bgdis').onclick=function(){ mode='disease'; seen.disease=1; bgDraw(); };
  $('#bgrst').onclick=function(){ mode='calm'; bgDraw(); };
  bgDraw();
}

/* ---------- tap a card, then tap its bin (copy of parent / mix of two) ---------- */
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
      fb.textContent='Yes. '+placed+' of 6 sorted.'; fb.className='pfb show ok';
      if(placed===6) pass(srt);
    } else { fb.textContent=T('sort-no'); fb.className='pfb show no'; }
  };});
}

/* ---------- Water World: a pond, fish, eggs and sperm; drain it ---------- */
var ww=$('#ww');
if(ww){
  var drained=false, wwSeen={};
  function wwDraw(){
    var s='';
    if(!drained){
      s+='<rect width="360" height="200" rx="12" fill="#eef6f7"/><rect x="6" y="46" width="348" height="148" rx="14" fill="#a9dcec" stroke="#2a8fb0" stroke-width="3"/>';
      s+='<path d="M40,112 q14,-14 28,0 q14,14 28,0 l-10,-9 l0,18 z" fill="#f08a4b" stroke="#a54a12" stroke-width="2"/><circle cx="52" cy="108" r="2.6" fill="#263238"/>';
      s+='<path d="M36,150 q14,-14 28,0 q14,14 28,0 l-10,-9 l0,18 z" fill="#e8604c" stroke="#a02a1c" stroke-width="2"/><circle cx="48" cy="146" r="2.6" fill="#263238"/>';
      var ys=[100,116,132,148,164];
      for(var i=0;5>i;i++){ s+='<circle cx="256" cy="'+ys[i]+'" r="9" fill="#f4c430" stroke="#c99a0a" stroke-width="2"/>'; }
      var dur=(2.6/SP()).toFixed(2);
      for(var k=0;5>k;k++){
        var y=96+k*17;
        s+='<circle cx="104" cy="'+y+'" r="3.4" fill="#1565c0"><animate attributeName="cx" values="104;240" dur="'+dur+'s" begin="'+(k*0.35).toFixed(2)+'s" repeatCount="indefinite"/></circle>';
      }
      s+=txt(180,34,'A pond: water all around',14,'#0d47a1',800,'middle')+txt(256,190,'eggs',13,'#7a4a00',800,'middle')+txt(104,190,'sperm',13,'#0d47a1',800,'middle');
    } else {
      s+='<rect width="360" height="200" rx="12" fill="#f6efe2"/><rect x="6" y="176" width="348" height="18" rx="6" fill="#c9e3ee" stroke="#7fb6cf" stroke-width="2"/><rect x="6" y="190" width="348" height="6" fill="#b79b78"/>';
      for(var a=0;3>a;a++){ var ax=120+a*50; s+='<path d="M'+ax+',150 q-8,-14 0,-28 q8,-14 0,-28" fill="none" stroke="#e8604c" stroke-width="3" stroke-dasharray="5 4"/><path d="M'+(ax-6)+',100 l6,-8 l6,8" fill="none" stroke="#e8604c" stroke-width="3"/>'; }
      for(var j=0;5>j;j++){ s+='<circle cx="'+(210+j*20)+'" cy="172" r="4.5" fill="#b08a4a" stroke="#6d4f1f" stroke-width="1.5"/>'; }
      for(j=0;5>j;j++){ s+='<line x1="'+(60+j*16)+'" y1="172" x2="'+(66+j*16)+'" y2="170" stroke="#8d6e63" stroke-width="2"/>'; }
      s+=txt(180,34,'The pond dried up',14,'#7a2a1c',800,'middle')+txt(268,160,'dried eggs',12,'#6d4f1f',800,'middle')+txt(94,160,'dried sperm',12,'#6d4f1f',800,'middle');
    }
    $('#wwsvg').innerHTML=svgWrap(s,'0 0 360 200');
    $('#wwcap').textContent= drained ? T('ww-dry') : T('ww-wet');
    $('#wwdrain').disabled=drained; $('#wwfill').disabled=!drained;
    wwSeen[drained?'dry':'wet']=1;
    if(wwSeen.dry && !drained){ $('#wwend').classList.remove('hid'); pass(ww); }
  }
  $('#wwdrain').onclick=function(){ drained=true; wwDraw(); };
  $('#wwfill').onclick=function(){ drained=false; wwDraw(); };
  wwDraw();
}

/* ---------- embryo timeline: 1, 3, 6 and 9 months ---------- */
var emb=$('#emb');
if(emb){
  var HR=[5,11,18,25], seenE={};
  function embDraw(i){
    var hr=HR[i], cx=180, cy=104, s='';
    s+='<rect width="360" height="200" rx="12" fill="#fdeeea"/>';
    s+='<ellipse cx="180" cy="104" rx="104" ry="80" fill="#ffd9cf" stroke="#e8604c" stroke-width="4"/><ellipse cx="180" cy="104" rx="84" ry="62" fill="#fff4f0" stroke="#e8a090" stroke-width="2" stroke-dasharray="5 4"/>';
    s+='<ellipse cx="'+cx+'" cy="'+(cy+hr*1.3)+'" rx="'+(hr*0.9).toFixed(1)+'" ry="'+(hr*1.3).toFixed(1)+'" fill="#f4b49a" stroke="#a5503a" stroke-width="2"/>';
    s+='<circle cx="'+cx+'" cy="'+(cy-hr*0.9)+'" r="'+hr+'" fill="#f4b49a" stroke="#a5503a" stroke-width="2"/>';
    if(i>=1) s+='<circle cx="'+(cx+hr*0.35)+'" cy="'+(cy-hr*0.95)+'" r="'+(Math.max(1.4,hr*0.1)).toFixed(1)+'" fill="#263238"/>';
    if(i>=2) s+='<path d="M'+(cx-hr*0.8)+','+(cy+hr*0.6)+' q'+(-hr*0.7)+','+(hr*0.4)+' '+(-hr*0.3)+','+(hr*1.1)+' M'+(cx+hr*0.8)+','+(cy+hr*0.6)+' q'+(hr*0.7)+','+(hr*0.4)+' '+(hr*0.3)+','+(hr*1.1)+'" fill="none" stroke="#a5503a" stroke-width="3" stroke-linecap="round"/>';
    s+=txt(180,22,['1 month: bean-sized','3 months: small','6 months: growing','9 months: ready to be born'][i],14,'#7a2a1c',800,'middle');
    $('#embsvg').innerHTML=svgWrap(s,'0 0 360 200');
    $$('#emb .wlb').forEach(function(b,k){b.classList.toggle('on',k===i)});
    $('#embcap').textContent=T('emb'+i);
    seenE[i]=1; $('#embcnt').textContent=Object.keys(seenE).length+' of 4 stages seen';
    if(Object.keys(seenE).length===4) pass(emb);
  }
  $$('#emb .wlb').forEach(function(b,k){b.onclick=function(){embDraw(k)}});
  embDraw(0);
}

/* ---------- life stages: tap a card, then the next empty slot ---------- */
var stg=$('#stages');
if(stg){
  var ORDER=['baby','child','teenager','adult'], sel2=null, got=0;
  function person(kind){
    var h={baby:12,child:10,teenager:9,adult:9}[kind], bh={baby:18,child:28,teenager:36,adult:40}[kind], col={baby:'#ffd166',child:'#06a77d',teenager:'#4361ee',adult:'#e8604c'}[kind];
    return '<svg viewBox="0 0 46 64" xmlns="'+NS+'" aria-hidden="true"><rect x="'+(23-bh/4-4)+'" y="'+(62-bh)+'" width="'+(bh/2+8)+'" height="'+bh+'" rx="5" fill="'+col+'" stroke="#263238" stroke-width="1.3"/><circle cx="23" cy="'+(62-bh-h+2)+'" r="'+h+'" fill="#f4b49a" stroke="#a5503a" stroke-width="1.5"/></svg>';
  }
  var pc=$$('#stages .pcard');
  pc.forEach(function(c){ c.insertAdjacentHTML('afterbegin',person(c.getAttribute('data-k'))); c.onclick=function(){ if(c.disabled) return; pc.forEach(function(x){x.classList.remove('sel')}); c.classList.add('sel'); sel2=c; }; });
  $$('#stages .pslot').forEach(function(sl,i){ sl.onclick=function(){
    var fb=$('#stagefb');
    if(!sel2){ fb.textContent='Tap a card first.'; fb.className='pfb show no'; return; }
    if(i!==got){ fb.textContent='Not that slot yet. Which stage comes next in a person’s life?'; fb.className='pfb show no'; return; }
    if(sel2.getAttribute('data-k')===ORDER[i]){
      sl.innerHTML=person(ORDER[i])+'<span>'+ORDER[i]+'</span>'; sl.classList.add('ok');
      sel2.disabled=true; sel2.classList.remove('sel'); sel2.classList.add('used'); sel2=null; got++;
      fb.textContent='Yes. '+got+' of 4 in place.'; fb.className='pfb show ok';
      if(got===4){ $('#stageend').classList.remove('hid'); pass(stg); }
    } else { fb.textContent='Not that card for this slot. Who comes first, then next?'; fb.className='pfb show no'; }
  }; });
}

/* ---------- Explain-it builder: watch lines, typed boxes, then on your own ---------- */
var xw=$('#xw');
if(xw){
  var lines=$$('#xw .xl'), shown=0, wb=$('#xwbtn');
  wb.onclick=function(){
    if(lines.length>shown){ lines[shown].classList.remove('hid'); shown++; }
    if(shown===lines.length){ wb.style.display='none'; $('#xt').classList.remove('hid'); }
    else wb.textContent='Show line '+(shown+1)+' ▶';
  };
  var boxes=$$('#xt .tbx');
  boxes.forEach(function(bx,i){
    var tries=0, inp=$('input',bx), fb=$('.gfb',bx), mdl=$('.tmodel',bx), btn=$('.tbchk',bx);
    var r1=new RegExp(bx.getAttribute('data-rx1'),'i'), r2=bx.getAttribute('data-rx2')?new RegExp(bx.getAttribute('data-rx2'),'i'):null;
    function go(){
      var v=inp.value.trim(); if(!v) return;
      if(r1.test(v) && (!r2 || r2.test(v))){
        bx.classList.add('ok'); fb.className='gfb ok'; fb.innerHTML='&#10004; Yes.'; inp.readOnly=true; btn.disabled=true;
        $$('#xw .xl').forEach(function(l){l.classList.remove('flash')});
        if(boxes[i+1]){ boxes[i+1].classList.remove('hid'); $('input',boxes[i+1]).focus(); } else $('#xown').classList.remove('hid');
        return;
      }
      tries++; fb.className='gfb no';
      if(tries===1) fb.innerHTML='&#10008; Not yet. Hint: '+bx.getAttribute('data-h1');
      else {
        fb.innerHTML='&#10008; Not yet. '+bx.getAttribute('data-h2');
        var n=+bx.getAttribute('data-flash'); $$('#xw .xl').forEach(function(l,k){l.classList.toggle('flash',k===n)});
        if(tries>=2){ mdl.innerHTML='<b>Try this line:</b> '+bx.getAttribute('data-model')+' <br>Now type it yourself in the box.'; mdl.classList.remove('hid'); }
      }
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

/* ---------- guided calc walkthrough (copied from Ch2Review_Explorer.js; passes its own screen when done) ---------- */
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

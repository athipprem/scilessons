/* Ch3Why_Sim.js: Survival Pond, elephant mode, trouble mode, Egg Builder, shell zoom, care sort, Explain-it builder and the
   guided calc walkthrough (gcInit, copied from Ch2Review_Explorer.js). Captions that teach a fact live in the page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext [data-k="'+k+'"]');return e?e.textContent:''}
function SP(){return window.SIM_SPEED||1}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
function svgWrap(inner,vb){return '<svg viewBox="'+vb+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'start')+'">'+s+'</text>'}
var GREEN='#2f8f4e', GREY='#cfd8dc', RED='#d32f2f', AMB='#d99a0b';

/* ---------- Survival Pond: 100 dots, each worth 10 eggs ---------- */
var pond=$('#pond');
if(pond){
  var LOST=[60,25,12,2], pstep=0;
  function pondDraw(){
    var lostTotal=0, i; for(i=0;pstep>i;i++) lostTotal+=LOST[i];
    var s='';
    for(i=0;100>i;i++){
      var cx=18+(i%10)*24, cy=16+Math.floor(i/10)*24;
      var alive=(100-lostTotal)>i;
      s+='<circle cx="'+cx+'" cy="'+cy+'" r="9" fill="'+(alive?GREEN:GREY)+'" stroke="'+(alive?'#1b5e20':'#b0bec5')+'" stroke-width="1.5"/>';
    }
    $('#pondsvg').innerHTML=svgWrap(s,'0 0 258 250');
    var left=(100-lostTotal)*10;
    $('#pondcount').textContent='Eggs left: '+String(left).replace(/\B(?=(\d{3})+$)/g,',')+' of 1,000';
    $('#pondmsg').textContent= pstep===0 ? T('d0') : T('d'+pstep);
    var b=$('#pondbtn');
    if(pstep===4){ b.textContent='Start again'; $('#pondend').classList.remove('hid'); pass(pond); }
    else b.textContent= pstep===0 ? 'Next danger' : 'Next danger ('+pstep+' of 4 done)';
  }
  $('#pondbtn').onclick=function(){ pstep=(pstep===4)?0:pstep+1; if(pstep===0) $('#pondend').classList.add('hid'); pondDraw(); };
  pondDraw();
}

/* ---------- Few young: the elephant mother and her 4 calves ---------- */
var ele=$('#ele');
if(ele){
  var calves=4, lion=false, dry=false;
  function eleDraw(){
    var s='<rect width="360" height="190" rx="12" fill="#f6f1e4"/>';
    s+='<ellipse cx="110" cy="112" rx="70" ry="42" fill="#90a4ae" stroke="#546e7a" stroke-width="3"/>';
    s+='<circle cx="190" cy="92" r="27" fill="#90a4ae" stroke="#546e7a" stroke-width="3"/>';
    s+='<path d="M208,100 C232,106 232,138 220,150" fill="none" stroke="#546e7a" stroke-width="9" stroke-linecap="round"/>';
    s+='<ellipse cx="170" cy="94" rx="13" ry="20" fill="#b0bec5" stroke="#546e7a" stroke-width="2"/>';
    s+='<circle cx="196" cy="86" r="3" fill="#263238"/>';
    s+='<rect x="64" y="140" width="16" height="30" rx="5" fill="#78909c"/><rect x="132" y="140" width="16" height="30" rx="5" fill="#78909c"/>';
    for(var i=0;4>i;i++){
      var alive=calves>i, cx=240+i*32, cy=146;
      var cf=alive?'#90a4ae':'#e3e8ea', cs=alive?'#546e7a':'#b0bec5';
      s+='<ellipse cx="'+cx+'" cy="'+cy+'" rx="12" ry="9" fill="'+cf+'" stroke="'+cs+'" stroke-width="2"/>';
      s+='<circle cx="'+(cx+11)+'" cy="'+(cy-5)+'" r="6" fill="'+cf+'" stroke="'+cs+'" stroke-width="2"/>';
      s+='<path d="M'+(cx+16)+','+(cy-3)+' C'+(cx+21)+','+cy+' '+(cx+21)+','+(cy+6)+' '+(cx+18)+','+(cy+9)+'" fill="none" stroke="'+cs+'" stroke-width="3" stroke-linecap="round"/>';
      s+='<rect x="'+(cx-8)+'" y="'+(cy+6)+'" width="5" height="9" rx="2" fill="'+cs+'"/><rect x="'+(cx+2)+'" y="'+(cy+6)+'" width="5" height="9" rx="2" fill="'+cs+'"/>';
    }
    if(lion) s+='<ellipse cx="290" cy="150" rx="76" ry="32" fill="none" stroke="'+GREEN+'" stroke-width="4" stroke-dasharray="7 5"/>';
    s+=txt(180,22,'Mother and herd',14,'#37474f',800,'middle');
    $('#elesvg').innerHTML=svgWrap(s,'0 0 360 190');
    $('#elecount').textContent=calves+' of 4 calves grew up';
    var m=''; if(lion) m+=T('lion')+' '; if(dry) m+=T('dry');
    $('#elemsg').textContent=m||T('d0e');
    if(lion && dry){ $('#eleend').classList.remove('hid'); pass(ele); }
  }
  $('#elelion').onclick=function(){ lion=true; eleDraw(); };
  $('#eledry').onclick=function(){ if(!dry){ dry=true; calves=3; } eleDraw(); };
  eleDraw();
}

/* ---------- Trouble mode: 5 generations, young that grow up per pair ---------- */
var tr=$('#trouble');
if(tr){
  var NPER=[3,2,1,0], running=false;
  function trLabel(){
    var n=NPER[+$('#trslide').value];
    $('#trn').textContent='Young that grow up per pair: '+n;
  }
  function trDraw(vals,stamp){
    var mx=Math.max.apply(null,vals), s='';
    s+='<line x1="10" y1="165" x2="350" y2="165" stroke="#90a4ae" stroke-width="2"/>';
    for(var i=0;vals.length>i;i++){
      var h=mx>0?Math.round(vals[i]/mx*120):0, x=22+i*56;
      s+='<rect x="'+x+'" y="'+(165-h)+'" width="40" height="'+h+'" rx="4" fill="'+(i===0?AMB:GREEN)+'"/>';
      s+=txt(x+20,160-h,String(vals[i]),14,'#263238',800,'middle');
      s+=txt(x+20,184,i===0?'start':'gen '+i,12,'#546e7a',700,'middle');
    }
    if(stamp) s+='<g transform="rotate(-8 262 52)"><rect x="176" y="28" width="172" height="46" rx="8" fill="#fff" stroke="'+RED+'" stroke-width="5"/>'+txt(262,64,'EXTINCT',30,RED,900,'middle')+'</g>';
    $('#trsvg').innerHTML=svgWrap(s,'0 0 360 192');
  }
  function trRun(){
    if(running) return; running=true;
    var n=NPER[+$('#trslide').value], vals=[16], cur=16, k=0;
    $('#trcap').textContent=''; $('#trdone').classList.add('hid');
    trDraw(vals,false);
    (function step(){
      if(k===5){
        running=false;
        var ext=vals[vals.length-1]===0;
        $('#trcap').textContent= n>=2 ? T('tr-ok') : T('tr-bad');
        trDraw(vals,ext);
        if(ext){ $('#trdone').classList.remove('hid'); pass(tr); }
        return;
      }
      cur=Math.floor(cur/2)*n; vals.push(cur); k++; trDraw(vals,false);
      setTimeout(step,450/SP());
    })();
  }
  $('#trslide').oninput=function(){ if(!running){ trLabel(); trDraw([16],false); $('#trcap').textContent=''; } };
  $('#trrun').onclick=trRun;
  $('#trreset').onclick=function(){ if(running) return; $('#trslide').value=0; trLabel(); trDraw([16],false); $('#trcap').textContent=''; };
  trLabel(); trDraw([16],false);
}

/* ---------- Egg Builder: one food budget of 12 yolk blocks ---------- */
var egb=$('#egb');
if(egb){
  var NS_=[1,2,3,4,6,12], HEART=[6,5,4,3,2,1], seenFew=false, seenMany=false;
  function egDraw(){
    var i=+$('#egslide').value, n=NS_[i], y=12/n, s='';
    var yr=8*Math.sqrt(y), er=yr+13, cols= n===12?6:(n===6?3:(n===4?4:n)), rows=Math.ceil(n/cols);
    var cw=Math.min(110,330/cols), ch=Math.min(150,170/rows);
    for(var k=0;n>k;k++){
      var cx=180+((k%cols)-(cols-1)/2)*cw, cy=88+(Math.floor(k/cols)-(rows-1)/2)*ch;
      s+='<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(er*.86).toFixed(1)+'" ry="'+er.toFixed(1)+'" fill="#fff" stroke="#bfae8a" stroke-width="2.5"/>';
      s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+yr.toFixed(1)+'" fill="#f4c430" stroke="#c99a0a" stroke-width="1.5"/>';
    }
    $('#egsvg').innerHTML=svgWrap(s,'0 0 360 180');
    $('#egn').innerHTML='Eggs: <b>'+n+'</b> &middot; yolk blocks in each egg: <b>'+y+'</b>';
    var h=''; for(k=0;6>k;k++) h+= HEART[i]>k ? '&#10084;&#65039;' : '&#9825;';
    $('#egheart').innerHTML='Care: '+h;
    $('#egcap').textContent= n<=3 ? T('cap-few') : (n===4 ? T('cap-mid') : T('cap-many'));
    if(n<=2) seenFew=true; if(n>=6) seenMany=true;
    $('#egseen').textContent=(seenFew?1:0)+(seenMany?1:0)+' of 2 plans seen';
    if(seenFew && seenMany) pass(egb);
  }
  $('#egslide').oninput=egDraw; egDraw();
}

/* ---------- Water egg, land egg, shell zoom ---------- */
var wl=$('#wl');
if(wl){
  var did={};
  function air(x,y,d){return '<circle cx="'+x+'" cy="'+y+'" r="5" fill="#90caf9" stroke="#1976d2" stroke-width="1.5"><animate attributeName="cy" values="'+y+';'+(y+d)+'" dur="'+(2.2/SP()).toFixed(2)+'s" repeatCount="indefinite"/></circle>'}
  function wlDraw(m){
    var s='';
    if(m==='water'){
      s+='<rect width="360" height="200" rx="12" fill="#d6ecfa"/>';
      for(var i=0;3>i;i++){ var cx=90+i*90; s+='<circle cx="'+cx+'" cy="110" r="38" fill="#e8f7ee" stroke="#9ccc65" stroke-width="3"/><circle cx="'+cx+'" cy="110" r="14" fill="#f4c430"/>'; }
      s+=txt(180,34,'Water egg: a jelly coat, sitting in water',15,'#0d47a1',800,'middle');
    } else if(m==='land'){
      s+='<rect width="360" height="200" rx="12" fill="#f3e5c4"/>';
      s+='<ellipse cx="180" cy="112" rx="52" ry="64" fill="#fff" stroke="#8d6e63" stroke-width="9"/><circle cx="180" cy="112" r="24" fill="#f4c430"/>';
      s+=txt(180,34,'Land egg: a shell or tough skin, in dry air',15,'#5d4037',800,'middle');
    } else {
      s+='<rect width="360" height="200" rx="12" fill="#fafafa"/>';
      s+='<rect x="0" y="86" width="360" height="30" fill="#8d6e63"/>';
      for(var p=0;5>p;p++){ s+='<rect x="'+(34+p*70)+'" y="84" width="14" height="34" fill="#fafafa"/>'; }
      for(p=0;5>p;p++){ s+=air(41+p*70,36,52); }
      for(p=0;5>p;p++){ s+='<circle cx="'+(70+p*70)+'" cy="160" r="9" fill="#bbdefb" stroke="#64b5f6" stroke-width="1.5"/>'; }
      s+=txt(180,18,'outside: air',13,'#0d47a1',800,'middle')+txt(180,184,'inside: water stays in',13,'#1565c0',800,'middle')+txt(146,106,'shell',13,'#fff',800,'middle');
    }
    $('#wlsvg').innerHTML=svgWrap(s,'0 0 360 200');
    $$('#wl .wlb').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-m')===m)});
    $('#wlcap').textContent= m==='water' ? T('wl-water') : (m==='land' ? T('wl-land') : T('wl-zoom'));
    did[m]=1; $('#wlcnt').textContent=Object.keys(did).length+' of 3 pictures seen';
    if(did.water && did.land && did.zoom) pass(wl);
  }
  $$('#wl .wlb').forEach(function(b){b.onclick=function(){wlDraw(b.getAttribute('data-m'))}});
  wlDraw('water'); did={}; did.water=1; $('#wlcnt').textContent='1 of 3 pictures seen';
}

/* ---------- care sort: tap a card, then tap a bin ---------- */
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

/* ---------- Explain-it builder ---------- */
var xw=$('#xw');
if(xw){
  var lines=$$('#xw .xl'), shown=0, wb=$('#xwbtn');
  wb.onclick=function(){
    if(lines.length>shown){ lines[shown].classList.remove('hid'); shown++; }
    if(shown===lines.length){ wb.style.display='none'; $('#xt').classList.remove('hid'); }
    else wb.textContent='Show line '+(shown+1)+' ▶';
  };
  var xsteps=$$('#xt .xs');
  xsteps.forEach(function(st,i){
    var tries=0, fb=$('.gfb',st);
    $$('.xo',st).forEach(function(o){o.onclick=function(){
      if(o.hasAttribute('data-ok')){
        st.classList.add('ok'); fb.className='gfb ok'; fb.textContent='✔ Yes.';
        $$('.xo',st).forEach(function(x){x.disabled=true});
        if(xsteps[i+1]) xsteps[i+1].classList.remove('hid'); else $('#xown').classList.remove('hid');
      } else { tries++; fb.className='gfb no'; fb.textContent='✘ Not yet. '+st.getAttribute('data-hint'); }
    };});
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

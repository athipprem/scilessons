/* Ch3Mock_Sim.js: Unit 60. Warm-up egg sorter; Lesson 1 sorter, hen-farm breeding, piglet gene mixer;
   Lesson 2 life-cycle builder, toolbox cards, mackerel walkthrough (gcInit). Teaching text lives in each page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
var INK='#263238', NAVY='#14305c', CORAL='#e8573d';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext [data-k="'+k+'"]');return e?e.textContent:''}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
function svgWrap(inner,vb){return '<svg viewBox="'+vb+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'middle')+'">'+s+'</text>'}

/* ---------- generic tap-a-card-then-a-bin sorter ---------- */
function initSorter(box){
  var fb=$(box.getAttribute('data-fb')), end=$(box.getAttribute('data-end'));
  var cards=$$('.sc',box), selc=null, placed=0;
  cards.forEach(function(c){ c.onclick=function(){ if(c.disabled) return; cards.forEach(function(x){x.classList.remove('sel')}); c.classList.add('sel'); selc=c; }; });
  $$('.sbin',box).forEach(function(b){ b.onclick=function(){
    if(!selc){ fb.textContent=T('sort-pick'); fb.className='pfb show no'; return; }
    if(selc.getAttribute('data-bin')===b.getAttribute('data-bin')){
      var li=document.createElement('div'); li.className='placed'; li.textContent=selc.textContent; $('.bl',b.parentNode).appendChild(li);
      selc.disabled=true; selc.classList.remove('sel'); selc.classList.add('used'); selc=null; placed++;
      fb.textContent='Yes. '+placed+' of '+cards.length+' sorted.'; fb.className='pfb show ok';
      if(placed===cards.length){ end.classList.remove('hid'); pass(box); }
    } else {
      fb.textContent=selc.getAttribute('data-hint')||T(box.id==='sort2'?'sort2-no':'sort-no'); fb.className='pfb show no';
    }
  }; });
}
$$('#sort,#sort2').forEach(initSorter);

/* ---------- Lesson 1: the hen farm (selective breeding) ---------- */
function henSvg(v,sel){
  return svgWrap('<ellipse cx="40" cy="44" rx="26" ry="20" fill="'+(sel?'#ffd9cf':'#f6ddb5')+'" stroke="'+(sel?CORAL:'#8a5a00')+'" stroke-width="3"/><circle cx="62" cy="26" r="11" fill="'+(sel?'#ffd9cf':'#f6ddb5')+'" stroke="'+(sel?CORAL:'#8a5a00')+'" stroke-width="3"/><path d="M72 26 l9 4 l-9 4 Z" fill="#e8903c"/><circle cx="65" cy="23" r="2" fill="'+INK+'"/><path d="M58 15 q3 -9 8 -2" fill="none" stroke="#c62828" stroke-width="3"/><path d="M34 64 v10 M46 64 v10" stroke="#8a5a00" stroke-width="3" stroke-linecap="round"/>'+txt(40,50,v,15,NAVY,800),'0 0 90 80');
}
var henBox=$('#henFarm');
if(henBox){
  var OFF=[-1,0,0,1,1,1,2,2], GEN=1, picks=[], bars=[], ROUNDS=5;
  var board=$('#henBoard',henBox), chart=$('#henChart',henBox), fb=$('#henFb',henBox), go=$('#henGo',henBox), lab=$('#henGen',henBox);
  function base(){return GEN}
  function vals(){return OFF.map(function(o){return base()+o})}
  function draw(){
    lab.textContent='Generation '+GEN+' of '+ROUNDS;
    var v=vals(); board.innerHTML='';
    v.forEach(function(x,i){ var b=document.createElement('button'); b.className='hen'+(picks.indexOf(i)>=0?' sel':''); b.innerHTML=henSvg(x,picks.indexOf(i)>=0)+'<div class="hn">'+x+(x===1?' egg':' eggs')+' a week</div>';
      b.onclick=function(){ var k=picks.indexOf(i); if(k>=0) picks.splice(k,1); else if(picks.length<2) picks.push(i); else { fb.textContent=T('hen-two'); fb.className='pfb show no'; return; } fb.className='pfb'; fb.textContent=''; draw(); };
      board.appendChild(b); });
    go.disabled=picks.length!==2;
    var h=''; for(var g=1; g<=bars.length; g++){ var a=bars[g-1]; h+='<div class="hbar"><span class="hl">Gen '+g+'</span><span class="hb" style="width:'+Math.round(a/7*100)+'%"></span><span class="hv">'+a+'</span></div>'; }
    chart.innerHTML=h;
  }
  go.onclick=function(){
    var v=vals(), best=Math.max.apply(null,v);
    var ok=picks.every(function(i){return v[i]===best});
    if(!ok){ fb.textContent=T('hen-no'); fb.className='pfb show no'; return; }
    bars.push(Math.round(v.reduce(function(a,b){return a+b},0)/v.length*10)/10);
    if(GEN>=ROUNDS){ picks=[]; draw(); go.style.display='none'; board.innerHTML=''; fb.textContent=T('hen-end'); fb.className='pfb show ok'; $('#henEnd').classList.remove('hid'); pass(henBox); return; }
    GEN++; picks=[]; fb.textContent=T('hen-ok'); fb.className='pfb show ok'; draw();
  };
  draw();
}

/* ---------- Lesson 1: piglet gene mixer ---------- */
function pig(coat,spots,sc){
  var f=coat==='brown'?'#c9905e':'#f7b9b9', s=coat==='brown'?'#7a4a22':'#b5535a';
  var dots=spots?'<circle cx="38" cy="38" r="5" fill="#fff" opacity=".9"/><circle cx="58" cy="30" r="4" fill="#fff" opacity=".9"/><circle cx="50" cy="52" r="5" fill="#fff" opacity=".9"/><circle cx="72" cy="46" r="4" fill="#fff" opacity=".9"/>':'';
  return svgWrap('<ellipse cx="52" cy="46" rx="34" ry="22" fill="'+f+'" stroke="'+s+'" stroke-width="3"/><circle cx="84" cy="40" r="14" fill="'+f+'" stroke="'+s+'" stroke-width="3"/><ellipse cx="94" cy="44" rx="6" ry="5" fill="#f2a0a0" stroke="'+s+'" stroke-width="2"/><circle cx="86" cy="34" r="2" fill="'+INK+'"/><path d="M76 29 l-4 -9 l10 4 Z" fill="'+f+'" stroke="'+s+'" stroke-width="2"/><path d="M30 64 v12 M46 66 v12 M62 66 v12 M74 62 v12" stroke="'+s+'" stroke-width="4" stroke-linecap="round"/><path d="M20 42 q-10 -4 -6 -14" fill="none" stroke="'+s+'" stroke-width="3" stroke-linecap="round"/>'+dots,'0 0 110 84');
}
var pg=$('#pigMix');
if(pg){
  var combos=[[0,0],[1,1],[0,1],[1,0]], made=0, coats=['brown','pink'], pats=[true,false];
  var out=$('#pigOut',pg), pgo=$('#pigGo',pg), pfb=$('#pigFb',pg);
  pgo.onclick=function(){
    if(made>=4) return; var c=combos[made]; made++;
    var d=document.createElement('div'); d.className='pigc'; d.innerHTML=pig(coats[c[0]],pats[c[1]])+'<div class="pn">Piglet '+made+'<br>'+(c[0]?'pink':'brown')+', '+(c[1]?'plain':'spotted')+'</div>';
    out.appendChild(d);
    pfb.textContent=made<4?T('pig-more'):T('pig-end'); pfb.className='pfb show ok';
    if(made>=4){ pgo.disabled=true; $('#pigEnd').classList.remove('hid'); pass(pg); }
  };
}

/* ---------- Lesson 2: life-cycle builder ---------- */
var lcb=$('#lcb');
if(lcb){
  var rows=$$('.lcrow',lcb), doneRows=0, lfb=$('#lcFb');
  rows.forEach(function(r){
    var order=r.getAttribute('data-order').split('|'), at=0, slots=$('.lcslots',r);
    $$('.lct',r).forEach(function(t){ t.onclick=function(){
      if(t.disabled) return;
      if(t.getAttribute('data-s')===order[at]){
        var s=document.createElement('span'); s.className='lcs'; s.textContent=t.getAttribute('data-s'); slots.appendChild(s); t.disabled=true; t.classList.add('used'); at++;
        lfb.textContent=at<order.length?T('lc-ok'):T('lc-done-'+r.getAttribute('data-name')); lfb.className='pfb show ok';
        if(at===order.length){ r.classList.add('done'); doneRows++; if(doneRows===rows.length){ $('#lcEnd').classList.remove('hid'); pass(lcb); } }
      } else { lfb.textContent=T('lc-no'); lfb.className='pfb show no'; }
    }; });
  });
}

/* ---------- toolbox flip cards ---------- */
$$('.tcard>button').forEach(function(b){ b.onclick=function(){ $('.tback',b.parentNode).classList.toggle('hid'); }; });

/* ---------- guided calc walkthrough ---------- */
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

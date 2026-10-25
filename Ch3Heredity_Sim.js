/* Ch3Heredity_Sim.js: Zibbit card deal, twins, inherited/acquired sort, pea cards, 2x2 card grid, family tree,
   answer-the-question starter builder and the guided calc walkthrough (gcInit, as in Ch3Two_Sim.js).
   Captions that teach a fact live in the page's #simtext block. */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function T(k){var e=$('#simtext [data-k="'+k+'"]');return e?e.textContent:''}
function SP(){return window.SIM_SPEED||1}
function pass(el){var sc=el.closest('.screen'); if(sc){sc.setAttribute('data-game-pass','1'); if(window.sciRefresh) window.sciRefresh();}}
function svgWrap(inner,vb){return '<svg viewBox="'+vb+'" xmlns="'+NS+'">'+inner+'</svg>'}
function txt(x,y,s,sz,fill,wt,anchor){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+fill+'" font-weight="'+(wt||700)+'" text-anchor="'+(anchor||'start')+'">'+s+'</text>'}
var PLUM='#8a3f9e', INK='#263238';

/* ---------- warm-up: "Who else has it?" ---------- */
$$('.whobox').forEach(function(wb){
  var cs=$$('.wc',wb), seen=0, after=wb.nextElementSibling;
  cs.forEach(function(c){ c.onclick=function(){
    if(c.getAttribute('data-seen')) return;
    c.setAttribute('data-seen','1'); c.classList.add('on'); seen++;
    var e=$('.welse',c); if(e) e.classList.remove('hid');
    if(seen===cs.length && after){ after.classList.remove('hid'); if(window.sciRefresh) window.sciRefresh(); }
  }; });
});

/* ---------- Zibbit drawing ---------- */
var FUR={o:'#f08a4b',t:'#2a9d8f'};
var MUM={fur:['o','t'],ear:['r','p'],tail:['l','s']}, DAD={fur:['t','o'],ear:['p','r'],tail:['s','l']};
var BABY=[
  {fur:['o','t'],ear:['r','r'],tail:['s','s']},
  {fur:['t','o'],ear:['p','r'],tail:['l','s']},
  {fur:['o','o'],ear:['r','p'],tail:['l','l']},
  {fur:['t','t'],ear:['p','p'],tail:['s','l']}
];
function tile(kind,c,x,y,sc,ring){
  var w=34*sc, h=28*sc, s='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(5*sc)+'" fill="#fff" stroke="'+(ring?'#e8a000':'#90a4ae')+'" stroke-width="'+(ring?3.4:1.6)+'"/>';
  var cx=x+w/2, cy=y+h/2;
  if(kind==='fur') s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(8*sc)+'" fill="'+FUR[c]+'" stroke="#455a64" stroke-width="1.2"/>';
  else if(kind==='ear'){ if(c==='r') s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(7*sc)+'" fill="#f3d7c0" stroke="#455a64" stroke-width="1.2"/>'; else s+='<path d="M'+(cx-7*sc)+','+(cy+7*sc)+' L'+cx+','+(cy-8*sc)+' L'+(cx+7*sc)+','+(cy+7*sc)+' Z" fill="#f3d7c0" stroke="#455a64" stroke-width="1.2"/>'; }
  else s+='<rect x="'+(cx-(c==='l'?12:6)*sc)+'" y="'+(cy-3*sc)+'" width="'+((c==='l'?24:12)*sc)+'" height="'+(6*sc)+'" rx="'+(3*sc)+'" fill="#8d6e63"/>';
  return s;
}
function baby(b,size){
  var s='';
  s+='<path d="M45,36 A30,32 0 0 0 45,100 Z" fill="'+FUR[b.fur[0]]+'" stroke="#37474f" stroke-width="2"/><path d="M45,36 A30,32 0 0 1 45,100 Z" fill="'+FUR[b.fur[1]]+'" stroke="#37474f" stroke-width="2"/>';
  function ear(c,cx){ return c==='r' ? '<circle cx="'+cx+'" cy="34" r="9" fill="#f3d7c0" stroke="#37474f" stroke-width="2"/>' : '<path d="M'+(cx-9)+',44 L'+cx+',16 L'+(cx+9)+',44 Z" fill="#f3d7c0" stroke="#37474f" stroke-width="2"/>'; }
  s+=ear(b.ear[0],28)+ear(b.ear[1],62);
  s+='<circle cx="35" cy="64" r="3.4" fill="#263238"/><circle cx="55" cy="64" r="3.4" fill="#263238"/><path d="M40,78 q5,5 10,0" fill="none" stroke="#263238" stroke-width="2"/>';
  var l1=b.tail[0]==='l'?18:8, l2=b.tail[1]==='l'?18:8;
  s+='<rect x="75" y="80" width="'+l1+'" height="7" rx="3" fill="#a1887f" stroke="#37474f" stroke-width="1.2"/><rect x="'+(75+l1)+'" y="80" width="'+l2+'" height="7" rx="3" fill="#6d4c41" stroke="#37474f" stroke-width="1.2"/>';
  return '<svg class="zib" viewBox="0 0 120 110" xmlns="'+NS+'" role="img" aria-label="A Zibbit baby" style="width:'+size+'px;height:auto">'+s+'</svg>';
}

/* ---------- Card Deal ---------- */
var dl=$('#deal');
if(dl){
  var nb=0, busy=false, row=$('#babies');
  var TR=['fur','ear','tail'], LB={fur:'fur',ear:'ears',tail:'tail'};
  function panel(who,P,pick){
    var x0= who==='Mum'?6:186, s='<rect x="'+x0+'" y="6" width="168" height="120" rx="12" fill="#faf5fc" stroke="'+PLUM+'" stroke-width="2.4"/>'+txt(x0+84,24,who,14,'#4a1f5c',800,'middle');
    TR.forEach(function(t,i){
      var y=36+i*30; s+=txt(x0+8,y+19,LB[t],11,'#546e7a',700);
      P[t].forEach(function(c,k){ s+=tile(t,c,x0+50+k*50,y,1,pick && pick[t]===c); });
    });
    return s;
  }
  function drawDeal(pick, stage){
    var s=panel('Mum',MUM,pick&&{fur:pick.fur[0],ear:pick.ear[0],tail:pick.tail[0]})+panel('Dad',DAD,pick&&{fur:pick.fur[1],ear:pick.ear[1],tail:pick.tail[1]});
    if(pick && stage>=1){
      s+='<ellipse cx="90" cy="190" rx="70" ry="34" fill="#fff3e0" stroke="#f0a030" stroke-width="2.6"/>'+txt(90,150,'egg',13,'#8a5a00',800,'middle');
      TR.forEach(function(t,i){ s+=tile(t,pick[t][0],45+i*32,176,0.8,false); });
      s+='<ellipse cx="270" cy="190" rx="70" ry="34" fill="#e3f2fd" stroke="#1565c0" stroke-width="2.6"/>'+txt(270,150,'sperm',13,'#0d47a1',800,'middle');
      TR.forEach(function(t,i){ s+=tile(t,pick[t][1],225+i*32,176,0.8,false); });
    }
    if(pick && stage>=2) s+=txt(180,195,'+',24,INK,800,'middle')+txt(180,240,'they meet: a baby grows',13,'#4a1f5c',800,'middle');
    $('#dealsvg').innerHTML=svgWrap(s,pick?'0 0 360 250':'0 0 360 134');
  }
  function addBaby(){
    var d=document.createElement('div'); d.className='bb'; d.innerHTML=baby(BABY[nb-1],96)+'<span>Baby '+nb+'</span>'; row.appendChild(d);
  }
  function setCap(){
    $('#dealcap').textContent= nb===0 ? T('deal0') : (nb<4 ? T('deal1') : T('deal4'));
    $('#dealn').textContent=nb+' of 4 babies dealt';
    $('#dealbtn').textContent= nb===0 ? 'Deal a baby' : 'Deal another baby';
    $('#dealbtn').disabled=(nb>=4||busy);
  }
  $('#dealbtn').onclick=function(){
    if(busy||nb>=4) return; busy=true; var pick=BABY[nb]; nb++;
    $('#dealbtn').disabled=true; drawDeal(pick,0);
    setTimeout(function(){ drawDeal(pick,1); },500/SP());
    setTimeout(function(){ drawDeal(pick,2); addBaby(); busy=false; setCap(); if(nb===4){ $('#dealend').classList.remove('hid'); pass(dl); } },1200/SP());
  };
  $('#dealrst').onclick=function(){ if(busy) return; nb=0; row.innerHTML=''; drawDeal(null,0); setCap(); };
  drawDeal(null,0); setCap();
}

/* ---------- Twins ---------- */
var tw=$('#twin');
if(tw){
  var twSeen={};
  function egg(txtl){ return '<svg viewBox="0 0 90 70" xmlns="'+NS+'" style="width:76px;height:auto" aria-hidden="true"><ellipse cx="45" cy="34" rx="34" ry="26" fill="#fff3e0" stroke="#f0a030" stroke-width="3"/>'+txt(45,38,txtl,12,'#8a5a00',800,'middle')+'</svg>'; }
  function who(label,html){ return '<div class="bb">'+html+'<span>'+label+'</span></div>'; }
  function grp(a,b){ return '<div class="grp">'+a+'<div class="arrow">&rarr;</div>'+b+'</div>'; }
  function twDone(){ if(twSeen.one&&twSeen.two){ $('#twend').classList.remove('hid'); pass(tw); } }
  $('#twsplit').onclick=function(){
    $('#twsvg').innerHTML=who('one egg',egg('1 egg'))+'<div class="arrow">&rarr;</div>'+who('Twin 1',baby(BABY[1],90))+who('Twin 2',baby(BABY[1],90));
    $('#twcap').textContent=T('tw-one'); twSeen.one=1; twDone();
  };
  $('#twtwo').onclick=function(){
    $('#twsvg').innerHTML=grp(who('egg A',egg('egg A')),who('Twin 1',baby(BABY[0],84)))+grp(who('egg B',egg('egg B')),who('Twin 2',baby(BABY[2],84)));
    $('#twcap').textContent=T('tw-two'); twSeen.two=1; twDone();
  };
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


/* ---------- Activity Book 3.4 self-survey (ungraded, nothing saved) ---------- */
var sv=$('#survey');
if(sv){
  var TR3=[['Eye colour',['Brown','Blue','Other']],['Hair colour',['Black','Brown','Other']],['Hair type',['Straight','Wavy','Coily']],['Earlobe',['Free','Joined']]];
  var h='<table class="survey"><tr><th>Trait</th><th>Me</th><th>Mum</th><th>Dad</th></tr>';
  TR3.forEach(function(t,i){
    h+='<tr><td><b>'+t[0]+'</b></td>';
    ['me','mum','dad'].forEach(function(w){ h+='<td><select data-t="'+i+'" data-w="'+w+'" aria-label="'+t[0]+' '+w+'"><option value="">pick</option>'+t[1].map(function(o){return '<option>'+o+'</option>'}).join('')+'</select></td>'; });
    h+='</tr>';
  });
  sv.innerHTML=h+'</table><div class="btnrow"><button class="actbtn" id="svbtn" disabled>Show matches</button></div>';
  var sels=$$('#survey select');
  sels.forEach(function(s){ s.onchange=function(){ $('#svbtn').disabled=!sels.every(function(x){return x.value}); }; });
  $('#svbtn').onclick=function(){
    TR3.forEach(function(t,i){
      var v={}; sels.filter(function(x){return +x.getAttribute('data-t')===i}).forEach(function(x){v[x.getAttribute('data-w')]=x.value});
      var m= v.me===v.mum&&v.me===v.dad ? 'Both' : (v.me===v.mum ? 'Mum' : (v.me===v.dad ? 'Dad' : 'Neither'));
      var li=document.createElement('li'); li.innerHTML='<b>'+t[0]+':</b> '+(m==='Neither'?'matches neither':(m==='Both'?'matches both':'matches '+m)); $('#svres').appendChild(li);
    });
    $('#svbtn').style.display='none'; var cap=$('#svcap'); cap.textContent=T('sv-end'); cap.classList.add('show'); pass(sv);
  };
}

/* ---------- flowers ---------- */
function flower(c,w){
  var f=c==='P'?'#8e44ad':'#ffffff', st=c==='P'?'#4a1f5c':'#90a4ae', s='';
  for(var k=0;5>k;k++){ var a=k*72*Math.PI/180; s+='<circle cx="'+(30+Math.sin(a)*11).toFixed(1)+'" cy="'+(30-Math.cos(a)*11).toFixed(1)+'" r="8.5" fill="'+f+'" stroke="'+st+'" stroke-width="1.6"/>'; }
  s+='<circle cx="30" cy="30" r="5" fill="#f4c430" stroke="#c99a0a" stroke-width="1"/>';
  return '<svg viewBox="0 0 60 60" xmlns="'+NS+'" style="width:'+w+'px;height:'+w+'px" role="img" aria-label="'+(c==='P'?'a purple flower':'a white flower')+'">'+s+'</svg>';
}

/* ---------- Pea cards: pick a card from each parent plant ---------- */
var pea=$('#pea');
if(pea){
  var pm=null, pd=null, peaSeen={};
  function cardTile(c){ return '<svg viewBox="0 0 34 28" xmlns="'+NS+'" style="width:34px;height:28px;vertical-align:middle"><rect x="1.5" y="1.5" width="31" height="25" rx="5" fill="'+(c==='P'?'#8e44ad':'#fff')+'" stroke="#546e7a" stroke-width="2"/></svg>'; }
  function peaDraw(){
    if(!pm||!pd){ $('#peaout').innerHTML='<div class="cap show">'+T('pea-pick')+'</div>'; return; }
    var key=[pm,pd].sort().join(''), res= key==='WW'?'W':'P', k2= key==='PP'?'PP':(key==='WW'?'WW':'PW');
    $('#peaout').innerHTML='<div class="peaeq">'+cardTile(pm)+' + '+cardTile(pd)+' &rarr; '+flower(res,90)+'</div><div class="cap show">'+T('pea-'+k2)+'</div>';
    peaSeen[k2]=1; var r=$('#peat tr[data-k="'+k2+'"] td.tk'); if(r) r.textContent='✔';
    if(peaSeen.PP&&peaSeen.PW&&peaSeen.WW){ $('#peaend').classList.remove('hid'); pass(pea); }
  }
  $$('#pea .pc').forEach(function(b){ b.onclick=function(){
    var w=b.getAttribute('data-who'), c=b.getAttribute('data-c');
    $$('#pea .pc[data-who="'+w+'"]').forEach(function(x){x.classList.toggle('on',x===b)});
    if(w==='m') pm=c; else pd=c; peaDraw();
  }; });
  peaDraw();
}

/* ---------- 2x2 card grid ---------- */
var gr=$('#grid');
if(gr){
  var gseen=0;
  $$('#grid .gbox').forEach(function(b){ b.onclick=function(){
    if(b.getAttribute('data-seen')) return; b.setAttribute('data-seen','1'); gseen++;
    var white=b.getAttribute('data-r')==='W';
    $('.gres',b).innerHTML=flower(white?'W':'P',44)+'<b>'+(white?'white':'purple')+'</b>';
    b.classList.add(white?'wh':'pu');
    if(gseen===4){ $('#gridend').classList.remove('hid'); $('#gcGrid .gwatch').classList.remove('hid'); }
  }; });
}

/* ---------- Zibbit family tree: tap each plain parent ---------- */
var ft=$('#ftree');
if(ft){
  var tapped={};
  $$('#ftree .carrier').forEach(function(g){ g.onclick=function(){
    var id=g.getAttribute('data-p'); if(tapped[id]) return; tapped[id]=1; g.classList.add('on');
    $('#ct-'+id).setAttribute('opacity','1');
    if(tapped.a&&tapped.b){ $('#treeend').classList.remove('hid'); pass(ft); }
  }; g.onkeydown=function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); g.onclick(); } }; });
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

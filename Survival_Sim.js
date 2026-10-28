/* Survival_Sim.js: warm-up join game, numbers overlay and plant-skin slide; Lesson 1 sorters, five-group table and care slider;
   Lesson 2 one-parent animations, tree, beetle islands, aphid walkthrough (gcInit) and toolbox cards. Teaching text lives in each page's #simtext block. */
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


var GREEN='#2e7d32', DK='#1b4d2c', AMB='#e8903c';

/* ---------- generic tap-a-card-then-a-bin sorter (any number per page) ---------- */
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

/* ---------- warm-up 1: what joins? ---------- */
var jn=$('#join');
if(jn){
  var jtray=$('#jtray'), jbox=$('#jbox'), jfb=$('#jfb'), jdone=false;
  function jsay(t,c){ jfb.textContent=t; jfb.className='pfb show '+(c||'no'); }
  $$('.pcd',jn).forEach(function(b){ b.onclick=function(){ if(jdone) return; (b.parentNode===jbox?jtray:jbox).appendChild(b); jfb.className='pfb'; jfb.textContent=''; }; });
  $('#jgo').onclick=function(){
    if(jdone) return;
    var cells=$$('.pcd',jbox);
    if(cells.length!==2){ jsay(T('jn-few')); return; }
    var kind=cells.map(function(b){return b.getAttribute('data-t')}).sort().join('+');
    if(kind==='egg+sperm'){ jdone=true; jsay(T('jn-ok'),'ok'); $('#jchain').classList.remove('hid'); $('#jend').classList.remove('hid'); pass(jn); }
    else if(kind==='egg+egg'){ jsay(T('jn-eggs')); }
    else jsay(T('jn-few'));
  };
}

/* ---------- match your answer to the numbers: show the guess beside the numbers ---------- */
$$('.mcq[data-cmp]').forEach(function(m){
  var chk=$('.chk',m), fb=$('.fb',m);
  chk.addEventListener('click',function(){
    if(m.getAttribute('data-done')==='1' || !fb.classList.contains('no')) return;
    var tb=m.previousElementSibling, nums=[];
    if(tb && tb.tagName==='TABLE'){ $$('tr',tb).forEach(function(r,i){ if(i===0) return; $$('td',r).forEach(function(c,k){ if(k>0) nums.push(c.textContent); }); }); }
    fb.textContent='✘ '+T('cmp').replace('%p',m.getAttribute('data-pred')||'').replace('%n',nums.join(', '));
  });
});

/* ---------- warm-up 4: plant skin before / after iodine ---------- */
var iod=$('#iod');
if(iod){
  var seenI={};
  function skin(after){
    var s='';
    for(var r=0;r<3;r++) for(var c=0;c<6;c++){
      var x=14+c*58+(r%2)*14, y=10+r*50;
      s+='<rect x="'+x+'" y="'+y+'" width="54" height="46" rx="3" fill="'+(after?'#f3cf7a':'#f4f1e6')+'" stroke="'+(after?'#7a4a12':'#cfd8dc')+'" stroke-width="'+(after?3:1.5)+'"/>';
      if(after) s+='<circle cx="'+(x+27)+'" cy="'+(y+23)+'" r="7" fill="#5b3510"/>';
    }
    return svgWrap(s,'0 0 380 160');
  }
  function iodShow(a){ $('#iodsvg').innerHTML=skin(a); var c=$('#iodcap'); c.textContent=T(a?'iod1':'iod0'); c.classList.add('show'); seenI[a?'a':'b']=1;
    if(seenI.a&&seenI.b){ $('#iodend').classList.remove('hid'); pass(iod); } }
  $('#iodb').onclick=function(){ iodShow(false); };
  $('#ioda').onclick=function(){ iodShow(true); };
  iodShow(false); seenI={};
}

/* ---------- L1 s2: fill the five-group table ---------- */
var gt=$('#gt');
if(gt){
  var gcur=null, gfilled=0, gcells=$$('.gcell',gt), gchips=$$('.bk',gt), gfb=$('#gtfb');
  gchips.forEach(function(b){ b.onclick=function(){ gchips.forEach(function(x){x.classList.remove('sel')}); b.classList.add('sel'); gcur=b; gfb.className='pfb'; gfb.textContent=''; }; });
  gcells.forEach(function(k){ k.onclick=function(){
    if(k.classList.contains('full')) return;
    if(!gcur){ gfb.textContent=T('gt-pick'); gfb.className='pfb show no'; return; }
    if(gcur.getAttribute('data-v')===k.getAttribute('data-a')){
      k.textContent=gcur.textContent; k.classList.add('full'); gfilled++;
      gfb.textContent=T('gt-ok')+' '+gfilled+' of '+gcells.length+'.'; gfb.className='pfb show ok';
      if(gfilled===gcells.length){ $('#gtend').classList.remove('hid'); pass(gt); }
    } else { gfb.textContent=T('gt-no'); gfb.className='pfb show no'; }
  }; });
}

/* ---------- L1 s6: young against care ---------- */
var cr=$('#care');
if(cr){
  var crow=$$('#careD li'), cseen={}, cR=$('#careR');
  $('#careY').style.transition='width .35s'; $('#careC').style.transition='width .35s';
  function showCare(){
    var i=+cR.value, li=crow[i]; cseen[i]=1;
    $('#careN').textContent=li.getAttribute('data-n');
    $('#careY').style.width=li.getAttribute('data-y')+'%';
    $('#careC').style.width=Math.max(3,+li.getAttribute('data-c'))+'%';
    $('#careYT').textContent=li.getAttribute('data-ty'); $('#careCT').textContent=li.getAttribute('data-tc');
    if(Object.keys(cseen).length===crow.length){ $('#careEnd').classList.remove('hid'); pass(cr); }
  }
  cR.oninput=showCare; cR.onchange=showCare; showCare();
}

/* ---------- L2 s1: one-parent animations (three animals, three steps each) ---------- */
function hydra(x,y,sc,len){
  var t='';
  [[-8,-26],[-3,-30],[3,-30],[8,-26]].forEach(function(p,i){ t+='<path d="M'+(p[0])+','+(-len)+' q'+(p[0]*1.6)+','+(-6)+' '+(p[0]*2)+','+(p[1])+'" fill="none" stroke="#33691e" stroke-width="3" stroke-linecap="round"/>'; });
  return '<g transform="translate('+x+' '+y+') scale('+sc+')"><ellipse cx="0" cy="2" rx="22" ry="7" fill="#9ccc65" stroke="#33691e" stroke-width="3"/><rect x="-9" y="'+(-len)+'" width="18" height="'+len+'" rx="9" fill="#7cb342" stroke="#33691e" stroke-width="3"/>'+t+'<circle cx="0" cy="'+(-len+10)+'" r="2" fill="#263238"/></g>';
}
function arm(rot,R,w){ return '<ellipse cx="0" cy="'+(-R/2)+'" rx="'+w+'" ry="'+(R/2)+'" fill="#f08a5d" stroke="#8a3a1a" stroke-width="3" transform="rotate('+rot+')"/>'; }
function starfish(x,y,sc,skip,R){
  var s='<g transform="translate('+x+' '+y+') scale('+sc+')">';
  for(var k=0;k<5;k++){ if(k!==skip) s+=arm(k*72,R||40,11); }
  return s+'<circle cx="0" cy="0" r="12" fill="#f08a5d" stroke="#8a3a1a" stroke-width="3"/></g>';
}
function aphid(x,y,sc){ return '<g transform="translate('+x+' '+y+') scale('+sc+')"><ellipse cx="0" cy="0" rx="12" ry="9" fill="#8bc34a" stroke="#33691e" stroke-width="2.4"/><circle cx="-12" cy="-2" r="5" fill="#8bc34a" stroke="#33691e" stroke-width="2.4"/><path d="M-4,8 v7 M3,8 v7 M9,6 v8" stroke="#33691e" stroke-width="2" stroke-linecap="round"/></g>'; }
var asxDraw={
  hy:function(f){
    var s='<path d="M20,160 H360" stroke="#8d6e63" stroke-width="3"/>';
    if(f===0) s+=hydra(150,150,1,70)+'<circle cx="172" cy="112" r="7" fill="#7cb342" stroke="#33691e" stroke-width="3"/>';
    if(f===1) s+=hydra(150,150,1,70)+'<g transform="translate(159 118) rotate(60)"><rect x="-6" y="-34" width="12" height="34" rx="6" fill="#7cb342" stroke="#33691e" stroke-width="3"/><path d="M-4,-34 q-4,-8 -8,-10 M4,-34 q4,-8 8,-10" stroke="#33691e" stroke-width="2.4" fill="none"/></g>';
    if(f===2) s+=hydra(110,150,1,70)+hydra(250,150,.62,70);
    return svgWrap(s,'0 0 380 170');
  },
  st:function(f){
    var s='';
    if(f===0) s+=starfish(120,86,1,2,42)+'<g transform="translate(290 92) rotate(90)">'+arm(0,42,11)+'<circle cx="0" cy="-2" r="8" fill="#f08a5d" stroke="#8a3a1a" stroke-width="3"/></g>';
    if(f===1) s+=starfish(120,86,1,2,42)+'<g transform="translate(290 90)">'+arm(0,26,9)+arm(72,18,7)+arm(288,18,7)+'<circle cx="0" cy="0" r="9" fill="#f08a5d" stroke="#8a3a1a" stroke-width="3"/></g>';
    if(f===2) s+=starfish(110,86,1,-1,40)+starfish(270,92,.72,-1,40);
    return svgWrap(s,'0 0 380 170');
  },
  ap:function(f){
    var s='<path d="M40,150 Q190,120 340,150" fill="none" stroke="#4caf50" stroke-width="10" stroke-linecap="round"/>';
    if(f===0) s+=aphid(190,120,1.5);
    if(f===1) s+=aphid(190,120,1.5)+aphid(130,126,.8)+aphid(250,126,.8)+aphid(190,140,.8);
    if(f===2){ s+=aphid(190,100,1.3); [90,190,290].forEach(function(cx,k){ s+=aphid(cx,138,.8); for(var j=-1;j<=1;j++) s+=aphid(cx+j*24,160-(j===0?0:4),.45); }); }
    return svgWrap(s,'0 0 380 175');
  }
};
var ax=$('#asx');
if(ax){
  var acur='hy', afr={hy:0,st:0,ap:0}, afin={}, atabs=$$('.asxtabs button',ax), abtn=$('#asxb');
  function aShow(){
    $('#asxsvg').innerHTML=asxDraw[acur](afr[acur]);
    var c=$('#asxcap'); c.textContent=T(acur+afr[acur]); c.classList.add('show');
    abtn.disabled=(afr[acur]>=2);
    atabs.forEach(function(b){ b.classList.toggle('on',b.getAttribute('data-a')===acur); });
    if(afr[acur]>=2) afin[acur]=1;
    if(afin.hy&&afin.st&&afin.ap){ $('#asxend').classList.remove('hid'); pass(ax); }
  }
  atabs.forEach(function(b){ b.onclick=function(){ acur=b.getAttribute('data-a'); aShow(); }; });
  abtn.onclick=function(){ if(afr[acur]<2){ afr[acur]++; aShow(); } };
  aShow();
}

/* ---------- L2 s2: the tree and the beetle islands (both needed to unlock the screen) ---------- */
var s2need={};
function s2tick(k){ s2need[k]=1; if(s2need.tree&&s2need.bs) pass($('#tree')); }
var tr=$('#tree');
if(tr){
  var tseen={};
  $$('button[data-t]',tr).forEach(function(b){ b.onclick=function(){ var c=$('#treecap'); c.textContent=T('tr'+b.getAttribute('data-t')); c.classList.add('show'); tseen[b.getAttribute('data-t')]=1; if(tseen['1']&&tseen['2']) s2tick('tree'); }; });
}
function beetle(x,y,sc,col,dead,stripe){
  var g='<g transform="translate('+x+' '+y+') scale('+sc+')" opacity="'+(dead?0.28:1)+'"><ellipse cx="0" cy="0" rx="11" ry="14" fill="'+(dead?'#9e9e9e':col)+'" stroke="#263238" stroke-width="2"/><path d="M0,-14 V14" stroke="#263238" stroke-width="1.6"/>';
  if(stripe&&!dead) g+='<path d="M-9,-4 H9 M-10,5 H10" stroke="#fff3c4" stroke-width="3"/>';
  g+='<circle cx="0" cy="-16" r="5" fill="#263238"/><path d="M-11,-4 l-7,-3 M-11,3 l-7,0 M-11,9 l-7,4 M11,-4 l7,-3 M11,3 l7,0 M11,9 l7,4" stroke="#263238" stroke-width="1.8"/>';
  if(dead) g+='<path d="M-9,-9 l18,18 M9,-9 l-18,18" stroke="#b71c1c" stroke-width="3.4"/>';
  return g+'</g>';
}
var bsm=$('#bsim');
if(bsm){
  var bst=0;
  var pos=[[34,40],[84,36],[134,44],[48,92],[98,86],[148,92],[30,134],[84,138]];
  function island(cx,list,state,lone){
    var s='<ellipse cx="'+(cx+90)+'" cy="95" rx="92" ry="78" fill="#d9ecc8" stroke="#6d9a4a" stroke-width="3"/>';
    list.forEach(function(b,i){ if(b===null) return; s+=beetle(cx+pos[i][0]+6,pos[i][1]+6,.82,b.c,b.dead,b.s); });
    return s;
  }
  function bdraw(){
    var G1='#2e7d32', A1='#e8903c', P1='#7b4aa8';
    var one=[], two=[], mix=[G1,A1,P1,G1,A1,P1,A1,G1];
    for(var i=0;i<8;i++) one.push({c:G1});
    for(var j=0;j<8;j++) two.push({c:mix[j],s:(j===1||j===4)});
    if(bst===1){ one=one.map(function(b){return {c:b.c,dead:true}}); two=two.map(function(b,j){ return (j===1||j===4)?b:{c:b.c,dead:true}; }); }
    if(bst===2){ one=one.map(function(){return null}); two=two.map(function(b,j){ return {c:A1,s:true}; }); }
    var s=island(0,one,bst,false)+island(190,two,bst,false)+txt(95,14,'island 1',14,DK,800,'middle')+txt(285,14,'island 2',14,DK,800,'middle');
    $('#bsvg').innerHTML=svgWrap(s,'0 0 380 190');
    var c=$('#bscap'); c.textContent=T('bs'+bst); c.classList.add('show');
  }
  $('#bsb').onclick=function(){
    if(bst===0){ bst=1; bdraw(); $('#bsb').textContent=T('bsb1'); }
    else if(bst===1){ bst=2; bdraw(); $('#bsb').style.display='none'; $('#bsend').classList.remove('hid'); s2tick('bs'); }
  };
  bdraw();
}

/* ---------- L2 s6: toolbox flip cards ---------- */
$$('.tcard>button').forEach(function(b){ b.onclick=function(){ $('.tback',b.parentNode).classList.toggle('hid'); }; });
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

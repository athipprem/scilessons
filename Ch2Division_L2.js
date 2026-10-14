/* Lesson 2 visuals: yeast budding animation, doubling grid, zoom-in ladder. No lesson wording here (captions are read from the page). */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s){return document.querySelector(s)}
function txt(box,k){var e=document.querySelector(box+' span[data-k="'+k+'"]');return e?e.textContent:''}
var COL=['#2f5bb5','#c2527a','#2e9c3f','#e08a1e'];
function strand(cx,cy,ang,len,col,w){
  var a=ang*Math.PI/180, dx=Math.cos(a)*len/2, dy=Math.sin(a)*len/2;
  return '<line x1="'+(cx-dx).toFixed(1)+'" y1="'+(cy-dy).toFixed(1)+'" x2="'+(cx+dx).toFixed(1)+'" y2="'+(cy+dy).toFixed(1)+'" stroke="'+col+'" stroke-width="'+w+'" stroke-linecap="round"/>';
}
function yc(cx,cy,rx,ry,nuc){return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="#f6efd3" stroke="#8a6a1a" stroke-width="3.5"/>'+(nuc?'<circle cx="'+cx+'" cy="'+cy+'" r="'+nuc+'" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2.5"/>':'');}

/* ---- yeast budding: states 0..3 ---- */
function budDraw(k){
  var s='';
  if(k===0){ s+=yc(300,125,70,62,34)+strand(292,118,30,34,COL[0],6)+strand(308,134,-30,34,COL[1],6); }
  else if(k===1){
    s+='<ellipse cx="392" cy="96" rx="22" ry="20" fill="#f6efd3" stroke="#8a6a1a" stroke-width="3.5"/>'+yc(290,128,70,62,36);
    s+=strand(278,120,-34,34,COL[0],6)+strand(278,120,34,34,COL[0],6)+strand(304,138,-34,34,COL[1],6)+strand(304,138,34,34,COL[1],6);
  } else if(k===2){
    s+=yc(250,132,68,60,30)+yc(372,98,40,36,0);
    s+=strand(240,126,10,30,COL[0],6)+strand(262,142,-20,30,COL[1],6);
    s+='<circle cx="372" cy="98" r="22" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2.5"/>'+strand(366,94,10,26,COL[0],6)+strand(380,106,-20,26,COL[1],6);
  } else {
    s+=yc(190,135,66,58,30)+strand(180,130,10,30,COL[0],6)+strand(202,146,-20,30,COL[1],6);
    s+=yc(420,110,50,44,24)+strand(412,106,10,26,COL[0],6)+strand(430,118,-20,26,COL[1],6);
    s+='<text x="300" y="125" font-size="30" text-anchor="middle" fill="#b0426b" font-weight="800">+</text>';
  }
  $('#budStage').innerHTML='<svg viewBox="0 0 600 245" xmlns="'+NS+'">'+s+'</svg>';
  $('#budCap').textContent=txt('#budtext',k);
  $('#bBud').style.display=(k<3)?'':'none';
  $('#bBudAgain').style.display=(k===3)?'':'none';
  document.querySelectorAll('#budBar span').forEach(function(e){e.classList.toggle('on',+e.getAttribute('data-n')<=k)});
  if(k===3){ $('#sBud').setAttribute('data-game-pass','1'); window.sciRefresh(); }
}
if($('#budStage')){
  var bk=0; budDraw(0);
  $('#bBud').onclick=function(){bk++; budDraw(bk)};
  $('#bBudAgain').onclick=function(){bk=0; budDraw(0)};
}

/* ---- doubling grid ---- */
function dblDraw(r){
  var n=Math.pow(2,r), s='', cols=8;
  for(var i=0;i<n;i++){
    var cx=40+(i%cols)*66, cy=(n>8?(i<8?60:140):100);
    if(n<=8) cx=40+i*66+(8-n)*33;
    s+='<g class="dcell"><ellipse cx="'+cx+'" cy="'+cy+'" rx="25" ry="22" fill="#f6efd3" stroke="#8a6a1a" stroke-width="3"/><circle cx="'+cx+'" cy="'+cy+'" r="9" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2"/></g>';
  }
  $('#dblStage').innerHTML='<svg viewBox="0 0 560 200" xmlns="'+NS+'">'+s+'</svg>';
  $('#dblRound').textContent=r; $('#dblCells').textContent=n;
  $('#bDbl').style.display=(r<4)?'':'none';
  $('#bDblAgain').style.display=(r===4)?'':'none';
}
if($('#dblStage')){
  var dr=0; dblDraw(0);
  $('#bDbl').onclick=function(){dr++; dblDraw(dr)};
  $('#bDblAgain').onclick=function(){dr=0; dblDraw(0)};
}

/* ---- zoom-in ladder: stops 0..4, highlight box marks where the next zoom comes from ---- */
function hl(x,y,w,h){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="none" stroke="#b0426b" stroke-width="4" stroke-dasharray="9 6"/>';}
function zoomDraw(k){
  var s='';
  if(k===0){
    s+='<circle cx="300" cy="46" r="26" fill="#f6d9c4" stroke="#8a5a3a" stroke-width="3"/><rect x="270" y="76" width="60" height="96" rx="14" fill="#7aa0dc" stroke="#1f4e9c" stroke-width="3"/>'+
       '<line x1="270" y1="90" x2="228" y2="150" stroke="#8a5a3a" stroke-width="12" stroke-linecap="round"/><line x1="330" y1="90" x2="372" y2="150" stroke="#8a5a3a" stroke-width="12" stroke-linecap="round"/>'+
       '<line x1="288" y1="172" x2="280" y2="232" stroke="#1f4e9c" stroke-width="12" stroke-linecap="round"/><line x1="312" y1="172" x2="320" y2="232" stroke="#1f4e9c" stroke-width="12" stroke-linecap="round"/>'+hl(206,122,48,56);
  } else if(k===1){
    for(var r=0;r<4;r++)for(var c=0;c<6;c++) s+='<rect x="'+(130+c*56)+'" y="'+(22+r*52)+'" width="52" height="48" rx="12" fill="#fdeef3" stroke="#b0426b" stroke-width="2.5"/><circle cx="'+(156+c*56)+'" cy="'+(46+r*52)+'" r="9" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2"/>';
    s+=hl(236,70,60,56);
  } else if(k===2){
    s+='<circle cx="300" cy="125" r="112" fill="#fdeef3" stroke="#b0426b" stroke-width="4"/><circle cx="300" cy="125" r="50" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="3"/>'+hl(236,61,128,128);
  } else if(k===3){
    s+='<circle cx="300" cy="125" r="112" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="4"/>';
    var P=[[-46,-34,-25],[44,-40,15],[-42,40,40],[46,36,-10]];
    for(var i=0;i<4;i++) s+=strand(300+P[i][0],125+P[i][1],P[i][2],70,COL[i],10);
    s+=hl(218,57,72,68);
  } else {
    s+='<line x1="230" y1="30" x2="370" y2="220" stroke="#2f5bb5" stroke-width="44" stroke-linecap="round"/><line x1="370" y1="30" x2="230" y2="220" stroke="#2f5bb5" stroke-width="44" stroke-linecap="round"/>'+
       '<line x1="262" y1="80" x2="298" y2="100" stroke="#fff" stroke-width="9"/><line x1="308" y1="140" x2="336" y2="164" stroke="#e08a1e" stroke-width="9"/><line x1="258" y1="168" x2="286" y2="148" stroke="#fff" stroke-width="9"/>'+
       '<line x1="362" y1="62" x2="338" y2="86" stroke="#2e9c3f" stroke-width="9"/>'+hl(244,58,72,52);
  }
  $('#zoomStage').innerHTML='<svg viewBox="0 0 600 250" xmlns="'+NS+'">'+s+'</svg>';
  $('#zoomCap').textContent=txt('#ztext',k);
  document.querySelectorAll('#zlabels span').forEach(function(e){e.classList.toggle('on',+e.getAttribute('data-n')===k)});
  $('#bZoom').style.display=(k<4)?'':'none';
  $('#bZoomAgain').style.display=(k===4)?'':'none';
  if(k===4){ $('#sZoom').setAttribute('data-game-pass','1'); window.sciRefresh(); }
}
if($('#zoomStage')){
  var zk=0; zoomDraw(0);
  $('#bZoom').onclick=function(){zk++; zoomDraw(zk)};
  $('#bZoomAgain').onclick=function(){zk=0; zoomDraw(0)};
}
})();

/* Lesson 1 visuals: chromosome copy-and-split animation + cell-cycle loop. No lesson wording here (captions are read from the page). */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s){return document.querySelector(s)}
function txt(box,k){var e=document.querySelector(box+' span[data-k="'+k+'"]');return e?e.textContent:''}
var COL=['#2f5bb5','#c2527a','#2e9c3f','#e08a1e'];
var OFF=[[-30,-20,-25],[26,-24,15],[-26,26,40],[30,24,-10]];
function strand(cx,cy,ang,len,col,w){
  var a=ang*Math.PI/180, dx=Math.cos(a)*len/2, dy=Math.sin(a)*len/2;
  return '<line x1="'+(cx-dx).toFixed(1)+'" y1="'+(cy-dy).toFixed(1)+'" x2="'+(cx+dx).toFixed(1)+'" y2="'+(cy+dy).toFixed(1)+'" stroke="'+col+'" stroke-width="'+w+'" stroke-linecap="round"/>';
}
function cellDraw(state){
  var s='';
  if(state<2){
    s+='<circle cx="300" cy="125" r="112" fill="#fdeef3" stroke="#b0426b" stroke-width="4"/>'+
       '<circle cx="300" cy="125" r="66" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="3"/>';
    for(var i=0;i<4;i++){
      var o=OFF[i], cx=300+o[0], cy=125+o[1];
      if(state===0) s+=strand(cx,cy,o[2],42,COL[i],7);
      else s+=strand(cx,cy,o[2]-24,46,COL[i],7)+strand(cx,cy,o[2]+24,46,COL[i],7);
    }
    s+='<text x="300" y="30" font-size="14" text-anchor="middle" font-weight="800" fill="#0f2a5e">parent cell</text>'+
       '<text x="300" y="224" font-size="13" text-anchor="middle" fill="#1f4e9c" font-weight="700">nucleus, holding the chromosomes</text>';
  } else {
    [150,450].forEach(function(cx){
      s+='<circle cx="'+cx+'" cy="125" r="88" fill="#fdeef3" stroke="#b0426b" stroke-width="4"/>'+
         '<circle cx="'+cx+'" cy="125" r="52" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="3"/>';
      for(var i=0;i<4;i++){var o=OFF[i]; s+=strand(cx+o[0]*0.62,125+o[1]*0.62,o[2],30,COL[i],6);}
      s+='<text x="'+cx+'" y="232" font-size="13" text-anchor="middle" font-weight="800" fill="#0f2a5e">new cell</text>';
    });
    s+='<text x="300" y="130" font-size="34" text-anchor="middle" fill="#b0426b" font-weight="800">+</text>';
  }
  $('#chromoStage').innerHTML='<svg viewBox="0 0 600 245" xmlns="'+NS+'">'+s+'</svg>';
  $('#chromoCap').textContent=txt('#ctext',state);
  $('#bCopy').style.display=(state===0)?'':'none';
  $('#bSplit').style.display=(state===1)?'':'none';
  $('#bAgain').style.display=(state===2)?'':'none';
}
if($('#chromoStage')){
  var st=0; cellDraw(0);
  $('#bCopy').onclick=function(){cellDraw(1)};
  $('#bSplit').onclick=function(){cellDraw(2)};
  $('#bAgain').onclick=function(){cellDraw(0)};
}

/* ---- cell cycle loop ---- */
var busy=false;
function cycleCell(r,two){
  var s='';
  if(!two) s='<circle cx="430" cy="120" r="'+r+'" fill="#fdeef3" stroke="#b0426b" stroke-width="3.5"/><circle cx="430" cy="120" r="'+(r*0.42).toFixed(1)+'" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2.5"/>';
  else [380,480].forEach(function(cx){ s+='<circle cx="'+cx+'" cy="120" r="'+r+'" fill="#fdeef3" stroke="#b0426b" stroke-width="3.5"/><circle cx="'+cx+'" cy="120" r="'+(r*0.42).toFixed(1)+'" fill="#eaf0fc" stroke="#1f4e9c" stroke-width="2.5"/>'; });
  $('#cycCell').innerHTML=s;
}
function runCycle(){
  if(busy) return; busy=true;
  var h=$('#cycHand'); h.style.transition='none'; h.style.transform='rotate(0deg)';
  void h.getBoundingClientRect();
  cycleCell(34,false); $('#cycCap').textContent=txt('#cyctext',1);
  var t0=Date.now(), dur=3200;
  h.style.transition='transform 3.2s linear'; h.style.transform='rotate(324deg)';
  var iv=setInterval(function(){var f=Math.min(1,(Date.now()-t0)/dur); cycleCell(34+36*f,false); if(f>=1) clearInterval(iv);},60);
  setTimeout(function(){ $('#cycCap').textContent=txt('#cyctext',2); h.style.transition='transform .8s linear'; h.style.transform='rotate(360deg)'; },3300);
  setTimeout(function(){ cycleCell(34,true); $('#cycCap').textContent=txt('#cyctext',3); busy=false; },4300);
}
if($('#cycBtn')){ cycleCell(34,false); $('#cycCap').textContent=txt('#cyctext',0); $('#cycBtn').onclick=runCycle; }
})();

/* Lesson 1 visuals: water slider + regulation gauge. No lesson wording here (captions are read from the page). */
(function(){
var NS='http://www.w3.org/2000/svg';
function $(s){return document.querySelector(s)}
function drawWater(v){
  v=+v;
  var s = v<=40 ? 1 : 1-0.3*(v-40)/60;
  var w=224*s, h=154*s, x=150-w/2, y=115-h/2;
  var vw=w*0.62, vh=h*0.6;
  var left = '<rect x="30" y="30" width="240" height="170" rx="14" fill="#fff" stroke="#7a4b2a" stroke-width="9"/>'+
    '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="10" fill="#f7fbf2" stroke="#8a6a00" stroke-width="2.5"/>'+
    '<rect x="'+(150-vw/2+20)+'" y="'+(115-vh/2)+'" width="'+vw+'" height="'+vh+'" rx="22" fill="#cfe9fb" stroke="#5b9fd0"/>'+
    '<circle cx="'+(x+22)+'" cy="'+(y+h/2)+'" r="11" fill="#8e24aa"/>'+
    '<text x="150" y="226" font-size="13" text-anchor="middle" font-weight="800" fill="#4a1744">LEAF CELL</text>';
  var right='', cx=440, cy=115, r;
  if(v<8){
    right='<g fill="#fde9ef" stroke="#8a6a00" stroke-width="2">'+
      [[-50,-30,16],[40,-45,14],[55,10,18],[-30,45,15],[10,52,12],[-60,15,13],[25,-10,10]].map(function(p){return '<circle cx="'+(cx+p[0])+'" cy="'+(cy+p[1])+'" r="'+p[2]+'"/>'}).join('')+'</g>'+
      '<circle cx="'+cx+'" cy="'+cy+'" r="14" fill="#8e24aa"/>';
  } else {
    r = v<=40 ? 64-(v-8)*(18/32) : (v<=60 ? 46 : 46-(v-60)*(20/40));
    var path;
    if(v>75){
      var pts=[], n=16;
      for(var i=0;i<n;i++){var a=i*2*Math.PI/n, rr=(i%2? r*0.78 : r*1.05); pts.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1));}
      path='<polygon points="'+pts.join(' ')+'" fill="#fde9ef" stroke="#8a6a00" stroke-width="3"/>';
    } else path='<circle cx="'+cx+'" cy="'+cy+'" r="'+r.toFixed(1)+'" fill="#fde9ef" stroke="#8a6a00" stroke-width="3"/>';
    right=path+'<circle cx="'+cx+'" cy="'+cy+'" r="'+Math.max(9,r*0.3).toFixed(1)+'" fill="#8e24aa"/>';
  }
  right+='<text x="440" y="226" font-size="13" text-anchor="middle" font-weight="800" fill="#4a1744">CHEEK CELL</text>';
  $('#waterStage').innerHTML='<svg viewBox="0 0 600 235" xmlns="'+NS+'">'+left+right+'</svg>';
  var k = v<8?0 : v<35?1 : v<=65?2 : v<=85?3 : 4;
  var el=document.querySelector('#wtext span[data-r="'+k+'"]');
  $('#waterState').textContent = el? el.textContent : '';
}
var sl=$('#waterSlider'); if(sl){ sl.oninput=function(){drawWater(sl.value)}; drawWater(sl.value); }

/* regulation gauge */
function line(k){var e=document.querySelector('#gtext span[data-k="'+k+'"]'); $('#gline').textContent=e?e.textContent:''}
var busy=false;
function run(dir,pre){
  if(busy) return; busy=true;
  var n=$('#needle');
  n.style.transform='rotate('+(dir*70)+'deg)'; line(pre+'1');
  setTimeout(function(){line(pre+'2')},1900);
  setTimeout(function(){n.style.transform='rotate(0deg)'},3000);
  setTimeout(function(){line(pre+'3'); busy=false},4200);
}
if($('#gDrink')){ $('#gDrink').onclick=function(){run(-1,'d')}; $('#gSalt').onclick=function(){run(1,'s')}; }
})();

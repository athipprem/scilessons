(function(){
var $=function(s){return document.querySelector(s)};
var mag=$('#mag'), day=$('#day');
function upd(){
  var m=+mag.value, r=40/m;
  $('#magv').textContent=m;
  $('#realbar').style.width=(r/40*100)+'%';
  $('#realbar').textContent='Real '+(Math.round(r*10)/10)+' mm';
  $('#cap-mag').innerHTML='The photo is &times;'+m+' bigger, so the real size is smaller. Divide: 40 &divide; '+m+' = '+(Math.round(r*10)/10)+' mm.';
  var d=+day.value;
  $('#dayv').textContent=d;
  $('#donebar').style.width=(d/4*100)+'%';
  $('#donebar').textContent=d+(d===1?' day':' days');
  $('#cap-day').innerHTML= d===1 ? 'In 1 day it does only a quarter of its 4-day job. Divide by 4.' : 'In '+d+' days it has done '+d+' quarters of its job.';
}
mag.oninput=upd; day.oninput=upd; upd();
})();

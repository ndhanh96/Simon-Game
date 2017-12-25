
window.onload = function what(){
   var c = document.getElementById("canvas");
   var ctx = c.getContext("2d");
   ctx.moveTo(0,100);
   ctx.lineTo(200,0);
   ctx.lineTo(400,100);
   ctx.lineTo(0,100);
   ctx.lineTo(0,300);
   ctx.lineTo(400,300);
   ctx.lineTo(400,100);
   ctx.stroke();
};

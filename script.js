const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.globalCompositeOperation = "destination-over";

let number= 0;
let scale= 10;

function drawGlobe(){
let angle = number*1;
let radius= scale * Math.sqrt(number);
let positionX = radius*Math.sin(angle) + canvas.width/2;
let positionY = radius*Math.cos(angle) + canvas.height/2;

ctx.beginPath();
ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
ctx.fillStyle='red';
ctx.strokeStyle='white';
ctx.lineWidth='2';
ctx.fill();
ctx.closePath();
ctx.stroke();

number ++;

}


function animate (){
   //draw each frame

  if (number>400) return;
   drawGlobe();
requestAnimationFrame(animate);
}

animate();


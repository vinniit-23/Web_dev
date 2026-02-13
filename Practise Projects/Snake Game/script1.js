document.addEventListener("DOMContentLoaded", () => {
  const Canvas = document.getElementById("SnakeCanvas");
  const ctx = Canvas.getContext("2d");

  Canvas.width = 400;
  Canvas.height = 600;

  //   ctx.fillRect(10, 10, 150, 100);

  //   ctx.beginPath();
  //   ctx.moveTo(100, 150);
  //   ctx.lineTo(145, 175);
  //   ctx.lineTo(145, 125);
  // //   ctx.lineTo(175, 150);
  //   ctx.closePath();
  //   ctx.stroke();
  //   ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle='blue';
  ctx.arc(200, 300, 100, 0, Math.PI * 2, true);
  ctx.moveTo(170, 250);
  ctx.arc(160, 250, 10, 0, Math.PI * 2, true);
  ctx.moveTo(250,250)
  ctx.arc(240, 250, 10, 0, Math.PI * 2, true);
  ctx.moveTo(250, 300)
  ctx.arc(200, 300, 50, 0, Math.PI , false);
  // ctx.fill();
  ctx.stroke();

 


    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    // ctx.stroke();
});

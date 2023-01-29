// defining canvas
let canvas = document.getElementById("canvas");

// width & height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("width: ", canvas.width, "height: ", canvas.height);
// defining context
let ctx = canvas.getContext("2d"); // (magic c)

// // creating rectangle (rectangle with I.)
// ctx.fillStyle = "seagreen";
// ctx.fillRect(100, 200, 100, 20);
// ctx.fillRect(140, 200, 20, 200);
// ctx.fillRect(100, 400, 100, 20);
// ctx.fillRect(250, 400, 20, 20);

// // line
// ctx.beginPath();
// ctx.moveTo(100, 600);
// ctx.lineTo(250, 450);
// ctx.lineTo(350, 550);
// ctx.lineTo(450, 350);
// ctx.strokeStyle = "purple";
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(100, 600);
// ctx.lineTo(500, 600);
// ctx.lineTo(450, 350);
// ctx.stroke();

// // Circle / Arc
// for (var i = 1; i <= 5; i++) {
//   let hex = ["#cc5128", "#00425A", "#567189", "#0081B4", "#FD8A8A"];
//   let x = Math.random() * window.innerWidth,
//     y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = hex[Math.floor(Math.random() * 4)];
//   ctx.stroke();
// }

// Animation
let x = Math.random() * innerWidth,
  y = Math.random() * innerHeight,
  dx = Math.random() - 0.5 * 3,
  dy = Math.random() - 0.5 * 3,
  radius = 30;
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = "seagreen";
  ctx.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate();

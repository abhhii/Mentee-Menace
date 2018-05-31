var canvas = document.getElementById('gamearea');
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
  canvas.height = 0.75*(screen.height);
	canvas.width = 0.8*(screen.width);    
	ctx.fillStyle = '#0091EA';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}
var raf;
var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'red',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
	ctx.fillStyle = '#0091EA';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
});
canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();

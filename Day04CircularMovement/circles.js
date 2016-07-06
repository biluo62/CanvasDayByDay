(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 50;
  var angle = 0;
  var speed = 0.05;

  var ball = new Ball();

  ball.x = centerX;
  ball.y = centerY;

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.x = centerX + Math.sin(angle) * radius;
    ball.y = centerY + Math.cos(angle) * radius * 2;

    angle += speed;

    ball.draw(context);
  }());
}());
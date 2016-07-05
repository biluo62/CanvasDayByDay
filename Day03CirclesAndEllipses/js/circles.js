(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var centerX = width / 2;
  var centerY = height / 2;

  var radius = 100;
  var angle = 0;
  var speed = 0.05;

  var ball = new Ball();

  (function drawFrame(){
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, width, height);

    ball.x = centerX + Math.sin(angle) * radius;
    ball.y = centerY + Math.cos(angle) * radius;

    angle += speed;
    if (angle > Math.PI * 2) {
      angle = 0;
    }
    ball.draw(context);

  }());
}());
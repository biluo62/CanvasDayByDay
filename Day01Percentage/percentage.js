(function(){
  function init() {
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    var conterX = canvas.width / 2;
    var conterY = canvas.height / 2;
    var rad = Math.PI * 2 / 100;
    var spreed = 0;

    function drawText(n) {
      context.save();
      context.strokeStyle = '#49f';
      context.font = "40px Arial";
      context.strokeText(n.toFixed(0) + '%', conterX - 30, conterY + 10);
      context.stroke();
      context.restore();
    }

    function drawBlueCircle(n) {
      context.save();
      context.beginPath();
      context.strokeStyle = '#49f';
      context.lineWidth = 5;
      context.arc(conterX, conterY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
      context.stroke();
      context.closePath();
      context.restore();
    }

    function drawWhiteCircle() {
      context.save();
      context.beginPath();
      context.strokeStyle = 'white';
      context.arc(conterX, conterY, 100, 0, Math.PI * 2, false);
      context.stroke();
      context.closePath();
      context.restore();
    }


    (function drawFrame() {
      window.requestAnimationFrame(drawFrame);

      context.clearRect(0, 0, canvas.width, canvas.height);

      drawWhiteCircle();
      drawText(spreed);
      drawBlueCircle(spreed);

      spreed = spreed > 100 ? 0 : spreed + 0.1;
    }());
  }

  window.onload = init;
})();
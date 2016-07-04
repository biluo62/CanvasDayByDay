(function(){
  var canvas = document.getElementById('martrix');
  var context = canvas.getContext('2d');

  var windowWidth = canvas.width = window.innerWidth;
  var windowHeight = canvas.height = window.innerHeight;

  // 初始化数据
  var clearColor = 'rgba(0, 0, 0, .1)'; // 用于绘制阴影
  var wordColor = '#33ff33'; // 用于绘制颜色
  var words = '0123456789qwertyuiopasdfghjklzxcvbnm,./;\'\\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?';
  var wordsArr = words.split('');
  var fontSize = 16;
  var clumns = windowWidth / fontSize;
  var drops = [];

  for (var i = 0; i < clumns; i++) {
    drops[i] = 1;
  }

  function draw() {
    context.save();
    context.fillStyle = wordColor;
    context.font = fontSize + 'px arial'

    // 核心部分
    for(var i = 0; i < drops.length; i++) {
      var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      context.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > windowHeight && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    context.restore();
  }

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.fillStyle = clearColor;
    context.fillRect(0, 0, windowWidth, windowHeight);

    draw();
  }())

  function onResize() {
    windowWidth = canvas.width = window.innerWidth;
    windowHeight = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', onResize);
}());
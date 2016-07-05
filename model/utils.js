(function(w) {
  var utils = {};

  w.requestAnimationFrame = (w.requestAnimationFrame || w.webkitRequestAnimationFrame ||
      w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame ||
      function(callback) { w.setTimeout(callback, 1000 / 60) });

  w.cancelAnimationFrame = (w.cancelRequestAnimationFrame ||
      w.webkitCancelAnimationFrame || w.webkitCancelRequestAnimationFrame ||
      w.mozCancelAnimationFrame || w.mozCancelRequestAnimationFrame ||
      w.msCancelAnimationFrame || w.msCancelRequestAnimationFrame ||
      w.oCancelAnimationFrame || w.oCancelRequestAnimationFrame ||
      w.clearTimeout);

  utils.parseColor = function(color, toNumber) {
    if (toNumber) {
      if (typeof color === 'number') {
        return (color || 0);
      } else if (typeof color === 'string' && color.charAt(0) === '#') {
        color = color.slice(1)
      }
      return parseInt(color.slice(1), 16);
    } else {
      if (typeof color === 'number') {
        return '#' + ('00000' + (color || 0).toString(16)).slice(-6);
      }
      return color;
    }
  }

  window.utils = utils;

})(window)
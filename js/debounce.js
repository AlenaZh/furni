/* Debounce ограничивает скорость, с которой функция может срабатывать.
   Функция debounce необходима для гарантии того, что определённая задача не запускается слишком часто,
   и тем самым не снижает производительность браузера.
   
   Источник: frontend-stuff.com/blog/debounce-in-javascript/
*/

(function ($) {
  $.extend({
    debounce: function (f, ms) {
      var timer = null;
      return function () {
        var args = arguments;

        var onComplete = function () {
          f.apply(null, args);
          timer = null;
        };

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
      };
    },
  });
})(jQuery);

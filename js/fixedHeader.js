/* Появление "фиксированного" хедера при прокрутке страницы*/

$(function () {
  let header = $(".page-header"),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= 1) {
      header.addClass("page-header--fixed");
    } else {
      header.removeClass("page-header--fixed");
    }
  }
});

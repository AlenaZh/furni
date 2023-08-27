/*Плавный скролл страницы, отображение "текущего" пункта меню*/

$(function () {
  const INDENT = 30;
  $(window).on("scroll resize", navActiveChange);

  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    let blockId = "#" + $(this).data("scroll"),
        blockOffset = $(blockId).offset().top - INDENT;

    $(".site-navigation__item--active").removeClass("site-navigation__item--active");
    $(this).parent().addClass("site-navigation__item--active");

    $("html, body").animate(
      {
        scrollTop: blockOffset + 1,
      },
      500
    );
  });

  function navActiveChange() {
    $(".site-navigation__link").each(function () {
      let scrollPos = $(document).scrollTop();
      let section = $("#" + $(this).attr("data-scroll"));
      let sectionPos = section.position().top - INDENT;
      let sectionHeight = section.height();
      if (sectionPos <= scrollPos && sectionPos + sectionHeight > scrollPos) {
        $(".site-navigation__link").parent().removeClass("site-navigation__item--active");
        $(this).parent().addClass("site-navigation__item--active");
      }
    });
  }
});

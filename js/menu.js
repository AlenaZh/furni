/* Отображение "Гамбургер-меню", при ширине экрана устройства <= 860.
   Раскрытие/сворачивание пунктов меню, при клике на иконку "Гамбургер".
*/
$(function () {
  const TABLET_WIDTH = 860;

  let burgerButton = $(".main-navigation__burger");
  let burgerRow = $(".burger__row");
  let menuBlock = $(".page-header__wrapper");
  let links = $(".site-navigation__link");
  let isMenuOpen = false;

  let handleMenuClick = function () {

    if (burgerRow) {
      burgerRow.toggleClass("burger__row--open");
    }

    if (menuBlock) {
      menuBlock.toggleClass("page-header__wrapper--open");
      console.log("!!");
    }
  };

  let handleWindowResize = function () {   
    if ($(window).innerWidth() <= TABLET_WIDTH) {
      console.log($(window).innerWidth());
      if (burgerButton && !isMenuOpen) {
        burgerButton.on("click", handleMenuClick);
        isMenuOpen = true;
      }
    } else if (isMenuOpen) {
      burgerButton.on("click", handleMenuClick);
      isMenuOpen = false;
    }
  };

  links.on("click", handleMenuClick);

  handleWindowResize();

  $(window).resize($.debounce(handleWindowResize, 1000));
});

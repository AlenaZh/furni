/* Слайдер*/

$(function () {
  const sliderItems = $(".slider__item");
  const sliderList = $(".slider__list");
  const buttonPrev = $(".slider__button--prev");
  const buttonNext = $(".slider__button--next");
  let slideIndex = 0;
  let translateValue = 0;

  $(document).ready(function () {
    sliderList.css("transform", `translateX(${translateValue}%)`);
  });

  buttonPrev.click(function () {
    showSlide(--slideIndex, -1);
  });

  buttonNext.click(function () {
    showSlide(++slideIndex, 1);
  });

  function showSlide(index, direction) {
    if (index === sliderItems.length - 1) {
      buttonNext.addClass("slider__button--disabled");
      buttonNext.attr("disabled", true);

      if (buttonPrev.hasClass("slider__button--disabled")) {
        buttonPrev.attr("disabled", false);
        buttonPrev.removeClass("slider__button--disabled");
      }
    } else if (index === 0) {
      buttonPrev.addClass("slider__button--disabled");
      buttonPrev.attr("disabled", true);

      if (buttonNext.hasClass("slider__button--disabled")) {
        buttonNext.attr("disabled", false);
        buttonNext.removeClass("slider__button--disabled");
      }
    } else if (buttonNext.hasClass("slider__button--disabled") || buttonPrev.hasClass("slider__button--disabled")) {
      buttonNext.removeClass("slider__button--disabled");
      buttonPrev.removeClass("slider__button--disabled");
      buttonNext.attr("disabled", false);
      buttonPrev.attr("disabled", false);
    }

    translateValue = -100 * direction + translateValue;

    sliderList.css("transform", `translateX(${translateValue}%)`);
  }
});

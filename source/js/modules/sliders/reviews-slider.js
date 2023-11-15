const reviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-slider-wrapper]');
  const buttonPrev = document.querySelector('[data-reviews-slider-button-prev]');
  const buttonNext = document.querySelector('[data-reviews-slider-button-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 1,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
    autoHeight: true,
  });
};

export {reviewsSlider};

const reviewsSlider = () => {
  const swiperWrapper = document.querySelector('.reviews__slider-wrapper');
  const buttonPrev = document.querySelector('.reviews__slider-button--prev');
  const buttonNext = document.querySelector('.reviews__slider-button--next');

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
    },
    autoHeight: true,
  });
};

export {reviewsSlider};

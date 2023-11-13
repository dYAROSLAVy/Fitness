const jurySlider = () => {
  const swiperWrapper = document.querySelector('.competitions__jury-slider');
  const buttonPrev = document.querySelector('.competitions__jury-btn--prev');
  const buttonNext = document.querySelector('.competitions__jury-btn--next');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
};

export {jurySlider};

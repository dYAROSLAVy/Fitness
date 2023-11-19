const jurySlider = () => {
  const swiperWrapper = document.querySelector('[data-competitions-jury-slider]');
  const buttonPrev = document.querySelector('[data-competitions-jury-btn-prev]');
  const buttonNext = document.querySelector('[data-competitions-jury-btn-next]');

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
        initialSlide: 2,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        initialSlide: 2,
      },
    },
  });
};

export {jurySlider};

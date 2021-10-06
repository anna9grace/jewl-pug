const initSliders = () => {
  const sliderContainer = document.querySelector('.js-slider');
  if (!sliderContainer) {
    return;
  }

  const sliderPagination = document.querySelector('.js-slider__pagination');
  const sliderBtnNext = document.querySelector('.js-slider__next-btn');
  const sliderBtnPrev = document.querySelector('.js-slider__prev-btn');

  const paginationBullets = document.querySelectorAll('.js-slider__bullet');
  let activeBullet = null;

  const swiperProducts = new Swiper(sliderContainer, {
    loop: false,
    autoHeight: false,
    navigation: {
      nextEl: sliderBtnNext,
      prevEl: sliderBtnPrev,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        pagination: {
          el: sliderPagination,
          bulletClass: 'js-slider__bullet',
          type: 'fraction',
        },
      },
      768: {
        pagination: {
          el: sliderPagination,
          clickable: true,
          bulletClass: 'js-slider__bullet',
          type: 'custom',
        },
      },
      1024: {
        slidesPerView: 4,
        pagination: {
          el: sliderPagination,
          clickable: true,
          bulletClass: 'js-slider__bullet',
          type: 'custom',
        },
      },
    },
  });


  swiperProducts.on('slideChange', function () {
    const prev = document.querySelector('.js-slider__bullet.current');

    paginationBullets.forEach((bullet, index) => {
      if (index === swiperProducts.activeIndex) {
        activeBullet = bullet;
      }
    });

    if (activeBullet === prev) {
      return;
    }
    prev.classList.remove('current');
    activeBullet.classList.add('current');
  });
};

export {initSliders};

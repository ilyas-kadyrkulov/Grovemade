const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      370: {
        slidesPerView: 1,
        slidesOffsetBefore: 10,
      },
      1920: {
        slidesPerView: 4,
        slidesOffsetBefore: 15,
      }
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
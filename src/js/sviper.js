const swiper = new Swiper('.swiper', {
   /*  // Optional parameters
    direction: 'vertical',
    loop: true, */
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay : 5000,
      stopOnLastSlide:true,
    disableOnInteraction: false,
},
spead: 800,
loop: true,
  });
  
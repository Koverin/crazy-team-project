const swiper = new Swiper('.swiper', {
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    grabCursor: true,
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  
    
    slidesPerGroup: 1,
    centeredSlides: true,
    loop:true,
  
    autoplay: {
      delay: 3000,
  
    }
  });
  
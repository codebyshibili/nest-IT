
       var swiper = new Swiper('.swiper-container', {
           slidesPerView: 5,  // Adjust number of visible logos
           spaceBetween: 10,
           loop: true,
           autoplay: {
               delay: 2000,
               disableOnInteraction: false,
           },
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
           breakpoints: {
               1024: { slidesPerView: 5 },
               768: { slidesPerView: 3 },
               480: { slidesPerView: 2 },
           }
       });
import '../css/main.scss';

$(document).ready(() => {
  $('.nav-toggle').on('click', () => {
    $('.navigation').toggleClass('active');
  });
  $('.carousel-container').owlCarousel({
    responsive: {
      0: {
        items: 1,
        singleItem: true,
        autoplay: true,

        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
      }
    }
  });


  $('.room-image__container').owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: false,
        URLhashListener: true,
        startPosition: 'URLHash',
      }
    }
  });
});



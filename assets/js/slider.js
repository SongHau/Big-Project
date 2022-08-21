$(document).ready(function () {
   /* SLICK SLIDER */
   $(".image-slider").slick({
      autoplaySpeed: 2000,
      autoplay: true,
      speed: 1000,
      dots: true,
      prevArrow:
         "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
         "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
         {
            breakpoint: 993,
            settings: {
               arrows: false,
               autoplay: false,
               speed: 500,
            },
         },
      ],
   });
   $(".carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      infinite: false,
      draggable: false,
      prevArrow:
         "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
         "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               draggable: true,
               dots: true,
            },
         },
         {
            breakpoint: 993,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false,
               draggable: true,
               dots: true,
            },
         },
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               arrows: true,
               draggable: true,
               dots: true,
            },
         },
      ],
   });
});

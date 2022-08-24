$(document).ready(function () {
   /* IMAGES SLIDER */
   const lastSlide = $(".slider-item")[$(".slider-item").length - 1].outerHTML;
   const firstSlide = $(".slider-item")[0].outerHTML;
   $(".slider-main").prepend(lastSlide);
   $(".slider-main").append(firstSlide);
   $(".slider-main").css(
      "transform",
      `translateX(-${$(".slider-main").width()}px)`
   );
   let currentSlider = 1;
   function sliderMainTranslate(v, w, i) {
      $(".slider-main").css({
         transition: v,
         transform: `translateX(-${w * i + 0.25}px)`,
      });
   }
   function activeDot(obj) {
      $(".dot-item").removeClass("active");
      $(obj).addClass("active");
   }
   function handleChangeSlide(direction) {
      let widthOfSlide = $(".slider-main").width();
      if (direction === "next") {
         currentSlider++;
         if (currentSlider == $(".slider-item").length - 1) {
            setTimeout(function () {
               currentSlider = 1;
               sliderMainTranslate("none", widthOfSlide, currentSlider);
            }, 1000);
         }
      } else if (direction === "previous") {
         currentSlider--;
         if (currentSlider == 0) {
            setTimeout(function () {
               currentSlider = $(".slider-item").length - 2;
               sliderMainTranslate("none", widthOfSlide, currentSlider);
            }, 1000);
         }
      } else {
         currentSlider = direction;
      }
      if (currentSlider == $(".slider-item").length - 1)
         activeDot($(".dot-item")[0]);
      else if (currentSlider == 0)
         activeDot($(".dot-item")[$(".slider-item").length - 3]);
      else activeDot($(".dot-item")[currentSlider - 1]);
      sliderMainTranslate("transform 1s linear", widthOfSlide, currentSlider);
   }
   $(".slider-prev").click(function () {
      handleChangeSlide("previous");
   });
   $(".slider-next").click(function () {
      handleChangeSlide("next");
   });
   $(".dot-item").click(function () {
      const index = $(this).attr("data-index");
      handleChangeSlide(index);
   });
   let playSlider;
   let loopChange = function () {
      playSlider = setInterval(function () {
         handleChangeSlide("next");
      }, 3000);
   };
   loopChange();
   $(".image-slider").mouseover(function () {
      clearInterval(playSlider);
   });
   $(".image-slider").mouseout(function () {
      loopChange();
   });

   /* ARTICLES CAROUSEL */
   let currentCarousel = [0, 0];
   function handleChangeCarousel(obj, direction, index) {
      let widthOfCarouse = $(".carousel").width();
      let widthOfCarouselItem = $(".carousel-item").width() + 8;
      let numberOfCarousel = $(".carousel-item", obj).length;
      let CarouselItemsDisplayed = Math.round(
         widthOfCarouse / widthOfCarouselItem
      );
      if (direction === "next") {
         currentCarousel[index]++;
         if (
            currentCarousel[index] >
            numberOfCarousel - CarouselItemsDisplayed
         ) {
            currentCarousel[index] = numberOfCarousel - CarouselItemsDisplayed;
            return;
         }
      } else if (direction === "previous") {
         currentCarousel[index]--;
         if (currentCarousel[index] < 0) {
            currentCarousel[index] = 0;
            return;
         }
      } else {
         currentCarousel[index] = direction;
      }
      $(obj).css(
         "transform",
         `translateX(-${widthOfCarouselItem * currentCarousel[index]}px)`
      );
   }
   $(".carousel-prev").click(function () {
      let carousel = $(this).siblings(".carousel");
      let rel = carousel.attr("rel");
      handleChangeCarousel(carousel, "previous", rel - 1);
   });
   $(".carousel-next").click(function () {
      let carousel = $(this).siblings(".carousel");
      let rel = carousel.attr("rel");
      handleChangeCarousel(carousel, "next", rel - 1);
   });
   $(window).resize(function () {
      $(".carousel").css("transform", `translateX(0px)`);
   });
});
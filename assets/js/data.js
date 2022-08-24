window.addEventListener("load", function () {
   /* DISABLED DEV TOOL */
   // document.addEventListener(
   //    "contextmenu",
   //    function (e) {
   //       e.preventDefault();
   //    },
   //    false
   // );
   // document.addEventListener(
   //    "keydown",
   //    function (e) {
   //       // "I" key
   //       if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
   //          disabledEvent(e);
   //       }
   //       // "J" key
   //       if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
   //          disabledEvent(e);
   //       }
   //       // "S" key + macOS
   //       if (
   //          e.keyCode == 83 &&
   //          (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
   //       ) {
   //          disabledEvent(e);
   //       }
   //       // "U" key
   //       if (e.ctrlKey && e.keyCode == 85) {
   //          disabledEvent(e);
   //       }
   //       // "F12" key
   //       if (event.keyCode == 123) {
   //          disabledEvent(e);
   //       }
   //    },
   //    false
   // );
   // function disabledEvent(e) {
   //    if (e.stopPropagation) {
   //       e.stopPropagation();
   //    } else if (window.event) {
   //       window.event.cancelBubble = true;
   //    }
   //    e.preventDefault();
   //    return false;
   // }

   /* Loading */ const loader = document.querySelector(".loader");
   if (loader != null) loader.classList.add("hidden");

   /* HEADING SCROLL */
   window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 10);
   });

   /* RESPONSIVE SIDE BAR MENU */
   var menu = document.querySelector(".menu");
   var menuBtn = document.querySelector(".menu-btn");
   var closeBtn = document.querySelector("header .menu .btn-mobile .close-btn");
   if (menuBtn != null) {
      menuBtn.addEventListener("click", () => {
         menu.classList.add("active");
      });
      closeBtn.addEventListener("click", () => {
         menu.classList.remove("active");
      });
   }

   /* OPEN MODAL LOGIN */
   const modalContainer = document.querySelector(".wrapper");
   const lgBtn = document.querySelector(".js-login");
   const modal = document.querySelector(".js-modal");
   lgBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("open");
   });

   /* CLOSE MODAL LOGIN */
   modal.addEventListener("click", function () {
      modal.classList.remove("open");
   });
   modalContainer.addEventListener("click", function (event) {
      event.stopPropagation();
   });

   /* LOGIN AND REGISTER */
   const loginText = document.querySelector(".title-text .login");
   const loginForm = document.querySelector("form.login");
   const loginBtn = document.querySelector("label.login");
   const signupBtn = document.querySelector("label.signup");
   const signupLink = document.querySelector("form .signup-link a");
   signupBtn.onclick = function (e) {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
   };
   loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
   };
   signupLink.onclick = () => {
      signupBtn.click();
      return false;
   };

   /* SCROLL PROGRESS */
   const progressBar = document.getElementById("progressBar");
   window.addEventListener("scroll", function () {
      let progress = Math.ceil(
         (window.pageYOffset /
            (document.body.scrollHeight - window.innerHeight)) *
            100
      );
      progressBar.style = `width: ${progress}%`;
   });

   /* BACK TO TOP BUTTON */
   const backToTopButton = document.querySelector("#back-to-top");
   if (backToTopButton != null) {
      window.addEventListener("scroll", function scrollFunction() {
         if (window.pageYOffset > 300) {
            if (!backToTopButton.classList.contains("fadeInRight")) {
               backToTopButton.classList.remove("fadeOutRight");
               backToTopButton.classList.add("fadeInRight");
               backToTopButton.style.display = "flex";
            }
         } else {
            if (backToTopButton.classList.contains("fadeInRight")) {
               backToTopButton.classList.remove("fadeInRight");
               backToTopButton.classList.add("fadeOutRight");
               setTimeout(function () {
                  backToTopButton.style.display = "none";
               }, 250);
            }
         }
      });
      backToTopButton.addEventListener("click", function backToTop() {
         window.scrollTo(0, 0);
      });
   }

   /* MORE BUTTON */
   const moreBtn = document.getElementById("js-btn-more");
   const moreBlog = document.querySelectorAll(".blog-more");
   const moreNews = document.querySelectorAll(".news-more");
   var countMore = 0;
   if (moreBtn != null) {
      moreBtn.addEventListener("click", function showMore() {
         for (let i = 0; i < 3; i++) {
            if (moreBlog.length != 0)
               moreBlog[countMore++].style.display = "block";
            if (moreNews.length != 0)
               moreNews[countMore++].style.display = "block";
         }
         if (countMore == moreBlog.length || countMore == moreNews.length)
            moreBtn.style.display = "none";
      });
   }
});

/* JQUERY */
$(document).ready(function () {
   /* RANDOM NAMES & IMGS */
   var names = [
      "Thanh Hiệp",
      "Trung Thắng",
      "Nguyên Chương",
      "Ngọc Như",
      "Song Hậu",
      "Trọng Phúc",
      "Ngọc Sơn",
      "Trí Cường",
   ];
   var imgs = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png"];
   var random = [];
   function in_array(array, el) {
      for (var i = 0; i < array.length; i++) if (array[i] == el) return true;
      return false;
   }
   function get_rand(array) {
      var rand = array[Math.floor(Math.random() * array.length)];
      if (!in_array(random, rand)) {
         random.push(rand);
         return rand;
      }
      return get_rand(array);
   }
   function init() {
      const header = document.querySelectorAll(".comment-header a");
      const ava = document.querySelectorAll(".avatar img");
      for (const a of ava) {
         let idx = parseInt(Math.random() * imgs.length);
         a.setAttribute("src", `./assets/img/${imgs[idx]}`);
      }
      for (const h of header) {
         h.innerHTML = get_rand(names);
      }
   }

   /* DROPDOWN MENU */
   $(".sidebar-title").click(function () {
      // $(".list-items").toggleClass("active");
      // if ($(".list-items").hasClass("active")) {
      //    $(".list-items").css("height", "500px");
      //    $(".sidebar .arrow").css("transform", "rotate(0)");
      // } else {
      //    $(".list-items").css("height", "0");
      //    $(".sidebar .arrow").css("transform", "rotate(180deg)");
      // }
      $(".arrow").toggleClass("active");
      $(".list-items").slideToggle("slow");
   });

   /* BUTTON SEE ALL NEWS */
   $(".news-btn-show").click(function () {
      $(".news-row").fadeOut(300);
      setTimeout(function () {
         $(".content-row.hidden").fadeIn(600);
      }, 300);
   });
   $(".news-btn-hide").click(function () {
      $(".content-row.hidden").fadeOut(300);
      setTimeout(function () {
         $(".news-row").fadeIn(600);
      }, 300);
   });

   /* ADD NEW FEEDBACK */
   $("#btnUpload").click(function () {
      let text = $("#text-box").val();
      if (text !== "") {
         let h = `<div class="timeline-feedback m-row">
                  <div class="avatar">
                     <a href="javascript:;"><img src="./assets/img/${
                        imgs[parseInt(Math.random() * imgs.length)]
                     }"></a>
                  </div>
                  <div class="comment">
                     <div class="comment-header">
                        <a href="javasciprt:;">${get_rand(names)}</a>
                        <button class="option"><i class="fa-solid fa-ellipsis"></i></button>
                        <ul>
                           <li class="edit">Chỉnh sửa</li>
                           <li class="delete">Xóa</li>
                        </ul>
                     </div>
                     <div class="comment-body">
                        <p>${text}</p>
                     </div>
                     <div class="comment-bottom-bar">
                        <input class="btnConfirm" type="button" value="Xác nhận">
                     </div>
                  </div>
               </div>`;
         $(".m-feedback").prepend(h);
      }
      $("#text-box").val("");
   });

   /* OPEN OPTION MENU */
   $(".m-feedback").on("click", ".option", function () {
      if ($("+ ul", this).hasClass("active")) {
         $("+ ul", this).removeClass("active");
      } else {
         $(".m-feedback ul").removeClass("active");
         $("+ ul", this).addClass("active");
      }
   });
   $("body").click(function () {
      $(".m-feedback ul").removeClass("active");
   });
   $(".m-feedback").on("click", ".option, .option + ul", function (event) {
      event.stopPropagation();
   });

   /* FEEDBACK OPTIONS */
   // Edit feedback
   $(".m-feedback").on("click", ".edit", function () {
      $(".comment-body p").attr("contentEditable", "false");
      $(".comment-bottom-bar").css("height", "48px");
      $(".btnConfirm").css("display", "none");
      $(this)
         .parents(".comment-header")
         .next(".comment-body")
         .find("p")
         .attr("contentEditable", "true")
         .focus();
      $(this)
         .parents(".comment-header")
         .siblings(".comment-bottom-bar")
         .css("height", "auto")
         .find(".btnConfirm")
         .css("display", "block");
      $(".m-feedback ul").removeClass("active");
   });
   $(".m-feedback").on("click", ".btnConfirm", function () {
      $(this)
         .parent()
         .siblings(".comment-body")
         .find("p")
         .attr("contentEditable", "false");
      $(this).css("display", "none").parent().css("height", "48px");
   });

   // Delete feedback
   $(".m-feedback").on("click", ".delete", function () {
      // if (confirm("Bạn chắc chắn xóa không?") == true) {
      //    $(this).parents(".timeline-feedback").remove();
      // }
      // Customs alert box
      let str = this;
      $(".m-feedback ul").removeClass("active");
      $(".alert-container").fadeIn().css("display", "flex");
      $(".btnAccept").click(function () {
         $(str).parents(".timeline-feedback").remove();
      });
      $(".btnAccept, .btnCancel").click(function () {
         $(".alert-container").fadeOut();
      });
   });

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

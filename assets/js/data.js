window.addEventListener("load", function () {
   /* Loading */
   const loader = document.querySelector(".loader");
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
   window.addEventListener("scroll", function scrollFunction() {
      if (window.pageYOffset > 300) {
         if (!backToTopButton.classList.contains("fadeInRight")) {
            backToTopButton.classList.remove("fadeOutRight");
            backToTopButton.classList.add("fadeInRight");
            backToTopButton.style.display = "block";
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

   /* IMAGE ZOOM */
   const imgs = document.querySelectorAll(".intro-img img");
   const modalZoom = document.querySelector(".modal-zoom");
   const imageZoom = document.querySelector(".image-zoom img");
   for (const img of imgs) {
      img.addEventListener("click", function () {
         imageZoom.src = img.src;
         modalZoom.style.display = "flex";
      });
   }
   if (modalZoom != null) {
      modalZoom.addEventListener("click", function () {
         modalZoom.style.display = "none";
      });
      imageZoom.addEventListener("click", function (event) {
         event.stopPropagation();
      });
   }

   /* MORE BUTTON */
   const moreBtn = document.getElementById("js-btn-more");
   const moreBlog = document.querySelectorAll(".blog-more");
   const moreNews = document.querySelectorAll(".news-more");
   var countMore = 0;
   if (moreBtn != null) {
      moreBtn.addEventListener("click", function showMore() {
         for (let i = 0; i < 4; i++) {
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
   /* SLICK SLIDER */
   $(".image-slider").slick({
      autoplaySpeed: 2000,
      autoplay: true,
      speed: 300,
      dots: true,
      draggable: false,
      prevArrow:
         "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
         "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
         {
            breakpoint: 993,
            settings: {
               arrows: false,
               infinite: false,
               autoplay: false,
               draggable: true,
               dots: true,
            },
         },
      ],
   });
   $(".carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
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

   /* DROPDOWN MENU */
   $(".sidebar-title").click(function () {
      $(".list-items").toggleClass("active");
      if ($(".list-items").hasClass("active")) {
         $(".list-items").css("height", "500px");
         $(".sidebar .arrow").css("transform", "rotate(0)");
      } else {
         $(".list-items").css("height", "0");
         $(".sidebar .arrow").css("transform", "rotate(180deg)");
      }
   });

   /* BUTTON SEE ALL NEWS */
   $(".news-btn-show").click(function (event) {
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
});

/* TURN OFF INSPECT */
// window.onload = function () {
//    document.addEventListener(
//       "contextmenu",
//       function (e) {
//          e.preventDefault();
//       },
//       false
//    );
//    document.addEventListener(
//       "keydown",
//       function (e) {
//          // "I" key
//          if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//             disabledEvent(e);
//          }
//          // "J" key
//          if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//             disabledEvent(e);
//          }
//          // "S" key + macOS
//          if (
//             e.keyCode == 83 &&
//             (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//          ) {
//             disabledEvent(e);
//          }
//          // "U" key
//          if (e.ctrlKey && e.keyCode == 85) {
//             disabledEvent(e);
//          }
//          // "F12" key
//          if (event.keyCode == 123) {
//             disabledEvent(e);
//          }
//       },
//       false
//    );
//    function disabledEvent(e) {
//       if (e.stopPropagation) {
//          e.stopPropagation();
//       } else if (window.event) {
//          window.event.cancelBubble = true;
//       }
//       e.preventDefault();
//       return false;
//    }
// };

/* HEADING SCROLL */
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 10);
});

/* Loading */
window.addEventListener("load", function () {
   const loader = document.querySelector(".loader");
   loader.classList.add("hidden");
});

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

/* RESPONSIVE SLIDE BAR MENU */
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

/* DROPDOWN MENU */
const btnMenus = document.querySelector(".sidebar-title");
const lists = document.querySelector(".list-items");
const arrows = document.querySelector(".sidebar .arrow");
var deg = 0;
if (lists != null) {
   btnMenus.addEventListener("click", function dropDown() {
      lists.classList.toggle("active");
      deg += 180;
      arrows.style = `transform: rotate(${deg}deg)`;
      if (!lists.classList.contains("active")) {
         lists.style.height = 0 + "px";
      } else {
         lists.style.height = 500 + "px";
      }
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

$(document).ready(function () {
   /* SLICK SLIDER */
   $(".image-slider").slick({
      autoplaySpeed: 2000,
      autoplay: true,
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
            },
         },
         {
            breakpoint: 993,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false,
               draggable: true,
            },
         },
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               arrows: true,
               draggable: true,
            },
         },
      ],
   });

   /* BUTTON SEE ALL NEWS */
   $(".news-btn-show").click(function () {
      $(".news-row").fadeOut(300);
      $(".content-row.hidden").fadeIn(1200);
   });
   $(".news-btn-hide").click(function () {
      $(".content-row.hidden").fadeOut(1000);
      $(".news-row").fadeIn(1400);
   });
});

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

/* SWITCH BUTTON */
const checkbox = document.getElementById("checkbox");
const switchBtns = document.querySelectorAll(
   ".crossbar, .modal-body, input, .search, .menu-sidebar, .cart-bottom, .cart, .food-list, .container-food, .topbar, .main-body, .copyright, .box.dark, .item-col3, .blog-container, .footer, .intro-col12, .intro-col8, .introduce-des, .food-text, #back-to-top"
);
if (checkbox != null) {
   checkbox.addEventListener("change", function () {
      for (const btn of switchBtns) {
         if (!btn.classList.contains("dark")) btn.classList.add("dark");
         else btn.classList.remove("dark");
      }
      document.body.classList.toggle("dark");
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
const articles = document.getElementsByClassName("item-article");
var heightOfSideBar = 0;
var deg = 0;
for (const article of articles) heightOfSideBar += article.offsetHeight;
if (lists != null) {
   lists.style.height = heightOfSideBar + "px";
   btnMenus.addEventListener("click", function dropDown() {
      lists.classList.toggle("active");
      deg += 180;
      arrows.style = `transform: rotate(${deg}deg)`;
      if (!lists.classList.contains("active")) {
         lists.style.height = 0 + "px";
      } else {
         lists.style.height = heightOfSideBar + "px";
      }
   });
}

/* MORE BUTTON */
const moreBtn = document.getElementById("js-btn-more");
const moreBlog = document.querySelectorAll(".blog-more");
var countMore = 0;
if (moreBtn != null) {
   moreBtn.addEventListener("click", function showMore() {
      for (let i = 0; i < 3; i++) moreBlog[countMore++].style.display = "block";
      if (countMore == moreBlog.length) moreBtn.style.display = "none";
   });
}

/* SLIDE SHOW */
window.addEventListener("load", function () {
   const slider = document.querySelector(".slider");
   const sliderMain = document.querySelector(".slider-main");
   const sliderItems = document.querySelectorAll(".slider-item");
   const dotItems = document.querySelectorAll(".dot-item");
   const prvBtn = document.querySelector(".slider .slider-prv");
   const nxtBtn = document.querySelector(".slider .slider-nxt");
   const numberOfSliders = sliderItems.length;
   let sliderWidth = sliderItems[0].offsetWidth;
   let slideNumber = 1;
   let repeat = 0;
   const firstSlide = sliderItems[0].outerHTML;
   const lastSlide = sliderItems[numberOfSliders - 1].outerHTML;
   sliderMain.insertAdjacentHTML("afterbegin", lastSlide);
   sliderMain.insertAdjacentHTML("beforeend", firstSlide);
   sliderMain.style.transform = `translateX(${-sliderWidth}px)`;
   function changeSlide(dir) {
      sliderWidth = sliderItems[0].offsetWidth;
      if (dir === "next") {
         slideNumber++;
         if (slideNumber >= numberOfSliders + 1) {
            setTimeout(function () {
               slideNumber = 1;
               sliderMain.style.transition = "none";
               sliderMain.style.transform = `translateX(${-sliderWidth}px)`;
            }, 500);
         }
      } else if (dir === "previous") {
         slideNumber--;
         if (slideNumber <= 0) {
            setTimeout(function () {
               slideNumber = numberOfSliders;
               sliderMain.style.transition = "none";
               sliderMain.style.transform = `translateX(${
                  -sliderWidth * slideNumber
               }px)`;
            }, 500);
         }
      } else slideNumber = dir;
      sliderMain.style = `transform: translateX(${
         -sliderWidth * slideNumber
      }px)`;
      sliderMain.style.transition = "all 0.5s linear";
      if (slideNumber > numberOfSliders) activeDot(0);
      else if (slideNumber <= 0) activeDot(numberOfSliders - 1);
      else activeDot(slideNumber - 1);
   }
   function repeater() {
      repeat = setInterval(function () {
         changeSlide("next");
      }, 3000);
   }
   repeater();
   slider.addEventListener("mouseover", function () {
      clearInterval(repeat);
   });
   slider.addEventListener("mouseout", function () {
      repeater();
   });
   nxtBtn.addEventListener("click", function () {
      changeSlide("next");
   });
   prvBtn.addEventListener("click", function () {
      changeSlide("previous");
   });
   for (let i = 1; i <= dotItems.length; i++) {
      dotItems[i - 1].addEventListener("click", function () {
         changeSlide(i);
         activeDot(i - 1);
      });
   }
   function activeDot(index) {
      for (const dot of dotItems) dot.classList.remove("active");
      dotItems[index].classList.add("active");
   }
});

/* CAROUSEL */
const prvBtn = document.querySelectorAll(".mb-content .slider-prv");
const nxtBtn = document.querySelectorAll(".mb-content .slider-nxt");
const carouselPromotion = document.querySelector(".carousel-promotion");
const carouselNews = document.querySelector(".carousel-news");
const carouselSlidePromotions = document.querySelectorAll(
   ".carousel-promotion .carousel-slide"
);
const carouselSlideNews = document.querySelectorAll(
   ".carousel-news .carousel-slide"
);
var numberOfCarouselPromotion = carouselSlidePromotions.length;
var numberOfCarouselNews = carouselSlideNews.length;
var promotionNumber = { number: 0 };
var newsNumber = { number: 0 };
function changeCarousel(
   carousel,
   carouselSlides,
   carouselNumber,
   numberOfCarousel,
   dir
) {
   let carouselWidth = carouselSlides[0].offsetWidth;
   if (dir == 1) {
      carouselNumber.number++;
      let d = parseInt(numberOfCarousel / 2);
      if (numberOfCarousel % 2 != 0) d++;
      if (carouselNumber.number > d) {
         carouselNumber.number = d;
         return;
      }
   } else if (dir == -1) {
      carouselNumber.number--;
      if (carouselNumber.number < 0) {
         carouselNumber.number = 0;
         return;
      }
   }
   carousel.style = `transform: translateX(${
      -carouselWidth * carouselNumber.number
   }px)`;
}
for (let i = 0; i < nxtBtn.length; i++) {
   nxtBtn[i].addEventListener("click", function () {
      switch (i + 1) {
         case 1:
            changeCarousel(
               carouselPromotion,
               carouselSlidePromotions,
               promotionNumber,
               numberOfCarouselPromotion,
               1
            );
            break;
         case 2:
            changeCarousel(
               carouselNews,
               carouselSlideNews,
               newsNumber,
               numberOfCarouselNews,
               1
            );
            break;
      }
   });
   prvBtn[i].addEventListener("click", function () {
      switch (i + 1) {
         case 1:
            changeCarousel(
               carouselPromotion,
               carouselSlidePromotions,
               promotionNumber,
               numberOfCarouselPromotion,
               -1
            );
            break;
         case 2:
            changeCarousel(
               carouselNews,
               carouselSlideNews,
               newsNumber,
               numberOfCarouselNews,
               -1
            );
            break;
      }
   });
}

/* NEWS SEE ALL BUTTON */
const newsSellAllBtn = document.querySelector(".news-see-all");
const newsRow = document.querySelector(".news-row");
const newsContainer = document.querySelector(".content-row.hidden");
newsSellAllBtn.addEventListener("click", function () {
   newsContainer.classList.remove("hidden");
});
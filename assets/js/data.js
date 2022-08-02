/* HEADING SCROLL */
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 10);
});
/* Loading */
window.addEventListener("load",function(){
   const loader = document.querySelector(".loader");
   loader.classList.add("hidden");
})
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
const btnMenus = document.querySelectorAll("h2");
const lists = document.querySelectorAll(".list-items");
const arrows = document.querySelectorAll(".sidebar-title .arrow");
const articles = document.getElementsByClassName("item-article");
var heightOfNewsList = 0;
var deg = 0;
for (const article of articles) heightOfNewsList += article.offsetHeight;
for (let i = 0; i < btnMenus.length; i++)
   btnMenus[i].addEventListener("click", function dropDown() {
      lists[i].classList.toggle("active");
      deg += 180;
      arrows[i].style = `transform: rotate(${deg}deg)`;
      if (!lists[i].classList.contains("active")) {
         lists[i].style.height = 0 + "px";
      } else {
         lists[i].style.height = heightOfNewsList + "px";
      }
   });

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

/* SLIDE_SHOW */
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
      if (slideNumber > 7) activeDot(0);
      else if (slideNumber < 0) activeDot(numberOfSliders - 1);
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

/* Carousel */
const carouselSlides = document.querySelectorAll(
   ".carousel-promotion .carousel-slide"
);
const mbContainer = document.querySelector(".mb-container");
const carouselPromotion = document.querySelector(".carousel-promotion");
const prvBtn = document.querySelectorAll(".slider-prv");
const nxtBtn = document.querySelectorAll(".slider-nxt");
let numberOfCarousel = carouselSlides.length;
let carouselNumber = 0;
let d = 0;
function changeCarousel(dir) {
   let carouselWidth = carouselSlides[0].offsetWidth;
   if (dir === "1") {
      carouselNumber++;
      d = parseInt(numberOfCarousel / 2);
      if (numberOfCarousel % 2 != 0) d++;
      if (carouselNumber > d) {
         carouselNumber = d;
         return;
      }
   } else if (dir === "-1") {
      carouselNumber--;
      if (carouselNumber < 0) {
         carouselNumber = 0;
         return;
      }
   }
   carouselPromotion.style = `transform: translateX(${
      -carouselWidth * carouselNumber
   }px)`;
}
for (const nxt of nxtBtn)
   nxt.addEventListener("click", function () {
      changeCarousel("1");
   });
for (const prv of prvBtn)
   prv.addEventListener("click", function () {
      changeCarousel("-1");
   });

/* HEADING SCROLL */
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 10);
});

/* OPEN MODAL LOGIN */
const lgBtns = document.querySelectorAll(".js-login");
const modal = document.querySelector(".js-modal");
function showLogin(e) {
   e.preventDefault();
   modal.classList.add("open");
}
for (const lgBtn of lgBtns) {
   lgBtn.addEventListener("click", showLogin);
}

/* CLOSE MODAL LOGIN */
const modalContainer = document.querySelector(".wrapper");
modal.addEventListener("click", function () {
   modal.classList.remove("open");
});
modalContainer.addEventListener("click", function (event) {
   event.stopPropagation();
});

/* LOGIN AND REGISTEr */
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

/* SWITCH BUTTON */
const checkbox = document.getElementById("checkbox");
const switchBtns = document.querySelectorAll(
   ".crossbar, .modal-body, input, .search, .menu-sidebar, .cart-bottom, .cart, .food-list, .container-food, .topbar, .main-body, .copyright, .box.dark, .item-col3, .blog-container, .modal-container, .footer, .intro-col12, .intro-col8, .introduce-des, .food-text, #back-to-top"
);
checkbox.addEventListener("change", function () {
   for (const btn of switchBtns) {
      if (!btn.classList.contains("dark")) btn.classList.add("dark");
      else btn.classList.remove("dark");
   }
   document.body.classList.toggle("dark");
});

/* RESPONSIVE SLIDE BAR MENU */
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector("header .menu .btn-mobile .close-btn");
menuBtn.addEventListener("click", () => {
   menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
   menu.classList.remove("active");
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
      deg += 180;
      lists[i].classList.toggle("active");
      arrows[i].style.transform = "rotate(" + deg + "deg)";
      if (lists[i].classList.contains("active")) {
         lists[i].style.height = heightOfNewsList + "px";
      } else {
         lists[i].style.height = 0 + "px";
      }
   });

/* MORE BUTTON */
const moreBtn = document.getElementById("js-btn-more");
const moreBlog = document.querySelectorAll(".blog-more");
var countMore = 0;
moreBtn.addEventListener("click", function showMore() {
   for (let i = 0; i < 3; i++) moreBlog[countMore++].style.display = "block";
   if (countMore == moreBlog.length) moreBtn.style.display = "none";
});

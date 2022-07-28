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
      if (!backToTopButton.classList.contains("inButton")) {
         backToTopButton.classList.remove("outButton");
         backToTopButton.classList.add("inButton");
         backToTopButton.style.display = "block";
      }
   } else {
      if (backToTopButton.classList.contains("inButton")) {
         backToTopButton.classList.remove("inButton");
         backToTopButton.classList.add("outButton");
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
// const btn_scrollDown = document.querySelector("h2");
// const newsList = document.querySelector(".list-news-latest");
// const articles = document.getElementsByClassName("item-article");
// const arrow = document.querySelector(".row-of-c3-title .arrow");
// var heightOfNewsList = 0;
// var deg = 0;
// for (const article of articles) heightOfNewsList += article.offsetHeight;
// btn_scrollDown.addEventListener("click", function dropDown() {
//    newsList.classList.toggle("openMenu");
//    deg += 180;
//    arrow.style.transform = "rotate(" + deg + "deg)";
//    if (newsList.classList.contains("openMenu")) {
//       newsList.style.height = heightOfNewsList + "px";
//    } else {
//       newsList.style.height = 0 + "px";
//    }
// });

/* MORE BUTTON */
const moreBtn = document.getElementById("js-btn-more");
const moreBlog = document.querySelectorAll(".blog-more");
var countMore = 0;
moreBtn.addEventListener("click", function showMore() {
   for (let i = 0; i < 4; i++) moreBlog[countMore++].style.display = "block";
   if (countMore == moreBlog.length) moreBtn.style.display = "none";
});

/* OPEN MODAL BLOG */
const blogs = document.querySelectorAll(".blog-post");
const itemArticles = document.querySelectorAll(".item-article");
const modalBlog = document.querySelector(".modal-blog");
const modalContainerBlog = document.querySelector(".modal-container");
for (const blog of blogs)
   blog.addEventListener("click", function () {
      modalBlog.style.display = "block";
   });
for (const article of itemArticles)
   article.addEventListener("click", function () {
      modalBlog.style.display = "block";
   });
/* CLOSE MODAL BLOG */
modalBlog.addEventListener("click", function () {
   modalBlog.style.display = "none";
});
modalContainerBlog.addEventListener("click", function (event) {
   event.stopPropagation();
});

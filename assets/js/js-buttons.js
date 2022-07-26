/* BUTTON BACK TO TOP */
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

/* DROPDOWN NEWS-LATEST */
const articles = document.getElementsByClassName("item-article");
const btn_scrollDown = document.querySelector(".news-latest-title");
const newsList = document.querySelector(".list-news-latest");

var heightOfNewsList = 0;
var deg = 0;
for (const article of articles) heightOfNewsList += article.offsetHeight;

btn_scrollDown.addEventListener("click", function dropDown() {
  btn_scrollDown.classList.toggle("openMenu");
  newsList.classList.toggle("openMenu");
  deg += 180;
  const arrow = document.querySelector(".news-latest-title .arrow");
  arrow.style.transform = "rotate(" + deg + "deg)";
  if (newsList.classList.contains("openMenu")) {
    newsList.style.height = heightOfNewsList + "px";
  } else {
    newsList.style.height = 0 + "px";
  }
});

/* MORE BUTTON */
const moreBtn = document.getElementById("js-btn-more");
const moreBlog = document.querySelectorAll(".row-mb.more-blog");
var countMore = 0;

moreBtn.addEventListener("click", function showMore() {
  moreBlog[countMore++].style.display = "flex"
  if (countMore == moreBlog.length) moreBtn.style.display = "none";
});

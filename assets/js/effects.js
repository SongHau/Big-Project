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

/* SCROLL DOWN */
const newsTitle = document.querySelector("#scroll-down");
const newsLatest = document.querySelector(".list-news-latest");
newsTitle.addEventListener("click", function clickScrollDown() {
  if (newsLatest.style.display != "none") {
    newsLatest.style.display = "none";
  } else {
    newsLatest.style.display = "block";
  }
});

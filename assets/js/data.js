/* Heading Scroll */
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 10);
});
/* Open Modal */
const lgBtns = document.querySelectorAll(".js-login");
const modal = document.querySelector(".js-modal");
function showLogin(e) {
  e.preventDefault();
  modal.classList.add("open");
}
for (const lgBtn of lgBtns) {
  lgBtn.addEventListener("click", showLogin);
}
/* Close modal */
const modalContainer = document.querySelector(".wrapper");
modal.addEventListener("click", function () {
  modal.classList.remove("open");
});
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
/* Login and Register */
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

/* Responsive slide bar menu */
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector("header .menu .btn-mobile .close-btn");
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

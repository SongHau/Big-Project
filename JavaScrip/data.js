/* Heading Scroll */
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 10);
});
/* Open Modal */
const lgBtns = document.querySelectorAll(".js-login");
const modal = document.querySelector(".modal");
function showLogin(e) {
  e.preventDefault();
  modal.classList.add("open");
}
for (const lgBtn of lgBtns) {
  lgBtn.addEventListener("click", showLogin);
}
/* Close modal */
window.addEventListener("click", function (e) {
  if (document.getElementById("wrapper").contains(e.target)) {
    // Clicked in box
  } else {
    if (e.target.className !== "js-login") {
      modal.classList.remove("open");
    }
  }
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

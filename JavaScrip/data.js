/* Heading Scroll */
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});
/* Open Modal */
const lgBtns = document.querySelectorAll(".js-login");
const modal = document.querySelector(".modal");

/* Open Modal add food*/
const btnAdds = document.querySelectorAll(".food-add");
const modalFood = document.querySelector(".modal-food");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const closeModal = document.getElementById("btn-close");
function showAddfood(e) {
  e.preventDefault();
  let parentElement = e.currentTarget.parentNode;
  let imgFood = parentElement.querySelector('.food-img').innerHTML;
  let titleFood = parentElement.querySelector('.food-text .food-name').innerHTML ;
  let priceFood = parentElement.querySelector('.food-text .food-price').innerHTML ;
  modalFood.querySelector('.modal-food-img').innerHTML = imgFood;
  modalFood.querySelector('.modal-food-name').innerHTML = titleFood;
  modalFood.querySelector('.modal-food-price').innerHTML = priceFood;
  modalFood.classList.add("open");
}
if (modalFood && btnAdds ){
	for (const lgBtn of btnAdds) {
 lgBtn.addEventListener("click", showAddfood);
}
}
function removeFood(e) {
	e.preventDefault();
	let parentElement = e.currentTarget.parentNode;
	if (parentElement.querySelector('.number-var').innerHTML > 1){
		parentElement.querySelector('.number-var').innerHTML = parseInt(parentElement.querySelector('.number-var').innerHTML) - 1;
	}else {
		alert('Sống lượng tối thiểu là 1');
	}
}
function addFood(e) {
	e.preventDefault();
	let parentElement = e.currentTarget.parentNode;
	if (parentElement.querySelector('.number-var').innerHTML > 0){
		parentElement.querySelector('.number-var').innerHTML = parseInt(parentElement.querySelector('.number-var').innerHTML) + 1;
	}
}
function closeModalfood(e) {
	e.preventDefault();
	 modalFood.classList.remove("open");
}
btnMinus.addEventListener("click", removeFood);
btnPlus.addEventListener("click", addFood);
closeModal.addEventListener("click", closeModalfood);



function showLogin(e) {
  e.preventDefault();
  modal.classList.add("open");
}
for (const lgBtn of lgBtns) {
  lgBtn.addEventListener("click", showLogin);
}
/* Close modal */
window.addEventListener("click", function (e) {
	const wrapper = document.getElementById("wrapper");
  if (wrapper && wrapper.contains(e.target)) {
    // Clicked in box
  } else {
    if (modal && e.target.className !== "js-login") {
      modal.classList.remove("open");
    }
	if (modalFood && e.target.className !== "food-add") {
      modalFood.classList.remove("open");
    }
  }
});
/* Login and Register */
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
if (signupBtn){
signupBtn.onclick = function (e) {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};	
}
if (loginBtn){
	loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
}
if (signupLink){
	signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
}

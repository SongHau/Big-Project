/* Method */
const method = document.getElementById("pay-online");
const choose = document.getElementById("js-choose");
const payMethod = document.getElementById("pay");
method.addEventListener("click",function(){
   choose.style.opacity="1";
})
payMethod.addEventListener("click",function(){
   choose.style.opacity="0";
})
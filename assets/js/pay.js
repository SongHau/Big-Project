window.addEventListener("scroll",reveal);
function reveal(){
   var reveals = document.querySelectorAll(".reveal");
   for(var i = 0; i<reveals.length;i++)
   {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if(revealTop < windowHeight - revealPoint)
      {
         reveals[i].classList.add("active");
      }
      else
      {
         reveals[i].classList.remove("active");
      }
   }
}
/* Method */
const method = document.getElementById("pay-online");
const choose = document.getElementById("js-choose");
const payMethod = document.getElementById("payship");
method.addEventListener("click",function(){
   choose.style.opacity="1";
})
payMethod.addEventListener("click",function(){
   choose.style.opacity="0";
})

/* Scroll Element */
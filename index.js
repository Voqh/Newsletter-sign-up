const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const mainSec = document.getElementById("main");
const successMsgSec = document.getElementById("success-msg");
const anchor = document.getElementById("email-filler");

function validateEmail(){
 if(!emailInput.checkValidity()){
  errorMsg.innerHTML = "Valid email required";
  emailInput.style.color = "hsl(4, 100%, 67%)";
  emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
  emailInput.style.backgroundColor  = "hsla(4, 83%, 73%, 0.555)";
 }else{
  mainSec.classList.add("display");
  successMsgSec.classList.add("success-msg");
  mainSec.classList.remove("main");
  successMsgSec.classList.remove("display");

 }
}
function update(){
  mainSec.classList.add("main");
  successMsgSec.classList.add("display");
  mainSec.classList.remove("display");
  successMsgSec.classList.remove("success-msg");
}
document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  anchor.innerHTML = email;
});

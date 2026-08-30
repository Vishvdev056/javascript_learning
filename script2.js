let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("#form");

form.addEventListener("submit",function(dets){
  dets.preventDefault();

document.querySelector("#emailMessage").textContent=""
document.querySelector("#passwordMessage").textContent=""

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

  let emailans=emailRegex.test(email.value)
  let passwordans=passwordRegex.test(password.value)

  let isvalid=true;

  if(!emailans){
    document.querySelector("#emailMessage").textContent="Email is incorrect"
    document.querySelector("#emailMessage").style.display="initial"
    isvalid=false;
  }

   if(!passwordans){
    document.querySelector("#passwordMessage").textContent="password is incorrect"
    document.querySelector("#passwordMessage").style.display="initial"
    isvalid=false
  }

  if(isvalid){
    document.querySelector("#result").textContent="All Correct"
    // document.querySelector("#result").style.display="initial"
    
  }


})

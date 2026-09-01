
// let form=document.querySelector("form")
// let inputs=document.querySelectorAll("input")
// let main=document.querySelector("#main")

// form.addEventListener("submit",function(dets){
//   dets.preventDefault()

//   let card=document.createElement("div")
//   card.classList.add("card")

//   let profile=document.createElement("div")
//   profile.classList.add("profile")

//   card.append(profile)
//   console.log(card)

//   let image=document.createElement("img")
//   image.setAttribute("src",inputs[0].value)
//   let name=document.createElement("name")
//   name.textContent=inputs[1].value
//   let occupation=document.createElement("occupation")
//   occupation.textContent=inputs[2].value
//   let about=document.createElement("about")
//   about.textContent=inputs[3].value


//   profile.append(image)
//   card.append(profile)

//   card.append(name)
//   card.append(occupation)
//   card.append(about)

//   main.append(card)


//   inputs.forEach(function(inp){
//     if(inp.type!=="submit"){
//       inp.value=""
//     }
//   })

// })



// let form=document.querySelector("form")
// let inputs=document.querySelectorAll("input")
// let main=document.querySelector("#main")


// form.addEventListener("submit",function(dets){
//   dets.preventDefault()

// let card=document.createElement("div")
// card.classList.add("card")

// let profile=document.createElement("div")
// profile.classList.add("profile")

// card.appendChild(profile)
// console.log(card)

// let img=document.createElement("img")
// img.setAttribute("src",inputs[0].value)

// let name=document.createElement("name")
// name.textContent=inputs[1].value
// let occupation=document.createElement("occupation")
// occupation.textContent=inputs[2].value
// let about=document.createElement("about")
// about.textContent=inputs[3].value

// profile.append(img)
// card.append(profile)

// card.append(name)
// card.append(occupation)
// card.append(about)

// main.appendChild(card)

// inputs.forEach(function(inp){
//   if(inp.type!=="submit"){
//     inp.value=""
//   }
// })



// })

// let abc=document.querySelector("#Ram")

// abc.addEventListener("mouseover",function(){
//   abc.style.backgroundColor="yellow"
// })
// abc.addEventListener("mouseout",function(){
//   abc.style.backgroundColor="Red"
// })

// window.addEventListener("mousemove",function(dets){
//   console.log(dets)
// })

// window.addEventListener("mousemove",function(dets){
//   console.log(dets.clientX,dets.clientY)
// })

// let abcd=document.querySelector("#Ram")

// window.addEventListener("mousemove",function(dets){
//   abcd.style.top=dets.clientY + "px"
//   abcd.style.left=dets.clientX + "px"
  
// })

// let input=document.querySelector("#name")

// input.addEventListener("keyup",function(){
//   console.log("key released")
//   console.log(input.value)
// })


// let nav=document.querySelector("#nav")

// nav.addEventListener("click",function(){
//   alert("clicked")
// })

// let fruits=document.querySelector("#dam")
// let nam=document.querySelectorAll("li")
// fruits.addEventListener("click",function(dets){
// // console.log(dets.target.style.textDecoration="line-through")
// dets.target.classList.add("lt")
// });


// let a=document.querySelector("#a")
// let b=document.querySelector("#b")
// let c=document.querySelector("#c")
// let btn=document.querySelector("button")


// btn.addEventListener("click",function(){
//   console.log("Button Clicked")
// })

// a.addEventListener("click",function(){
//   console.log("a Clicked")
// },
// true
// )

// b.addEventListener("click",function(){
//   console.log("b Clicked")
// },
// true
// )

// c.addEventListener("click",function(){
//   console.log("c Clicked")
// },
// true
// )
// let count=document.querySelector("span")
//   let input=document.querySelector("input")

//   input.addEventListener("input",function(){

//     let left=20-input.value.length
//      count.textContent=left
//     if(left<0){
//       count.style.color="red"
//     }
//     else{
//       count.style.color="black"
//     }
//   })



// let email=document.querySelector("#email")
// let form=document.querySelector("#form")

// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;


// form.addEventListener("submit", function(dets){
//   dets.preventDefault()

//   if()




// })

// let email=document.querySelector("#email");
// let password=document.querySelector("#password");
// let form=document.querySelector("#form");

// form.addEventListener("submit",function(dets){
//   dets.preventDefault();

// document.querySelector("#emailMessage").textContent=""
// document.querySelector("#passwordMessage").textContent=""

//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

//   let emailans=emailRegex.test(email.value)
//   let passwordans=passwordRegex.test(password.value)

//   let isvalid=true;

//   if(!emailans){
//     document.querySelector("#emailMessage").textContent="Email is incorrect"
//     document.querySelector("#emailMessage").style.display="initial"
//     isvalid=false;
//   }

//    if(!passwordans){
//     document.querySelector("#passwordMessage").textContent="password is incorrect"
//     document.querySelector("#passwordMessage").style.display="initial"
//     isvalid=false
//   }

//   if(isvalid){
//     document.querySelector("#result").textContent="All Correct"
//     // document.querySelector("#result").style.display="initial"
    
//   }


// })



// setTimeout(function(){
//   console.log("hello")
// },3000)

// setInterval(function(){
//   console.log("hello")
// },3000)

let count=10;

let time=setInterval(function(){
    if(count>=0){
      console.log(count);
      count--;
    }else{
clearInterval(time);
    }

},1000);
// // global scope 

// console.dir(this)

// // function ke andr 

// function abcd(){
//   console.log(this)
// }

// abcd()

// // Method=> if hum object ke ander function ko call karte hain to ussee hum methodd kehte hain !!

// let obj={
//   name:"yogeh Singh",
//   address:function(){
//     console.log(this.name)
//   } 
// }

// // metho ke andr this ek object  hota hai


// obj.address()

// // event listener => event lisstener par this humessha wahi banda hoga jispar event listener laga hai jaise niche wale example mein this h1 hoga !!

// let h1=document.querySelector("h1").addEventListener("click",function(){
//  console.log(this.style.color="red")
// })


// // this in Class

// class Abcd{
//   constructor(){
//     console.log("hey Hey")
//     this.a=22;
//   }
// }

//  let val=new Abcd()
//  console.log(val)

//  let object={
//   name:"vishvdev Singh",
//   course:"BCA",
//   address:function(){
//       ()=>{
//         console.log(this)
//       }
//   }
//  }
// object.address()

// let obj={
//   name:"vishvdev singh"
// }

// function abcd(){
//   console.log(this)
// }

// abcd.call(obj)


// let obj={
//   name:"vishvdev singh"
// }

// function abcd(a,b,c){
//   console.log(this,a,b,c)
// }

// abcd.call(obj,1,2,3)

// let obj={
//   name:"vishvdev singh"
// }

// function abcd(a,b,c){
//   console.log(this,a,b,c)
// }

// abcd.apply(obj,[1,2,3])


// let obj={
//   name:"vishvdev singh"
// }

// function abcd(a,b,c){
//   console.log(this,a,b,c)
// }

// let val=abcd.bind(obj,1,2,3)

// val()


let form=document.querySelector("form")
let username=document.querySelector("#username")
let age=document.querySelector("#age")
let bio=document.querySelector("#bio")
let img=document.querySelector("#img")


let userManager={
 
  user:[],
  init: function(){
    form.addEventListener("submit",this.submitForm.bind(userManager))
    
  },
  submitForm(e){
    e.preventDefault()
   this.addUser()
  }, 
  addUser: function(){
    this.user.push({
    username:username.value,
    age:age.value,
    bio:bio.value,
    img:img.value,
   })
   console.log(this)
   form.reset();
  },
  removeUser: function(){}
  

} 
userManager.init()



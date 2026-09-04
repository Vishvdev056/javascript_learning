// console.log("hey1")
// console.log("hey2")
// setTimeout(()=>{
//   console.log("hey3")
// },3000)
// console.log("hey5")
// setTimeout(()=>{
//   console.log("hey4")
// },1000)

// function kuchDerBadChalunga(fnc){
// setTimeout(fnc,Math.floor(Math.random()*10)*1000)
// }

// kuchDerBadChalunga(function(){
//   console.log("hey")
// });

// function profilelekraao(username,cb){
//   console.log("fetching profile data......")
//   setTimeout(()=>{
//  cb({_id:2311, username,age:23,email:"yupyup@gmail.com"})
//   },3000)
// }

// function saariPostLekrAao(_id,cb){
//    console.log("fetching all posts......")
//   setTimeout(()=>{
//   cb({_id: _id , post:["hey","hello","good morning"]})
//   },3000)
// }

// function savedPost(id,cb){
//   console.log("fetching all savedPosts......")
// setTimeout(()=>{
// cb({savedPosst:[1.23,111,21.3,21.4]})
// },3000)
// }

// profilelekraao("Yogesh",function(data){
//   console.log(data)
//   saariPostLekrAao(data._id,function(post){
//     console.log(post)
//     savedPost(data._id,function(savedPost){
//       console.log(savedPost)
//     })
//   })
// })


// PROMISES => Aap ek promise banate ho jismein ki do state hote hain (resolve and reject) in dono state mein se koi ek state chalegi lekin hum code dono ke liye likhenge 
// .then resolved hone par chalega and .catch reject hone par chalga

//   let pr=new Promise (function(res , rej){
//     setTimeout(() => {
//       let rn=Math.floor(Math.random()*10)
//       if(rn>5){
//         res("resolved with " + rn)
//       }else{
//         rej("reject with " + rn)
//       }
//     }, (3000));
//   }
// )

//   pr
//   // ressolve hone par then chalega
//   .then(function(val){
//     console.log(val)
//   })
//   // reject hone par catch chalega
//   .catch(function(val){
//     console.log(val)
//   })

// Async / Await

// let pr=new Promise(function(res,rej){
//   setTimeout(() => {
//       let rn=Math.floor(Math.random()*10)
//       if(rn>5) res("resolved with " + rn)
//       else rej("reject with " + rn)
//   }, 3000);
// });

// // pr
// // .then(function(val){
// //   console.log(val)
// // })

// // .catch(function(val){
// //   console.log(val)
// // })

// async function abcd(){
//   try{
//     let val=await pr;
//     console.log(val)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// abcd()

// fetch 

// fetch("https://randomuser.me/api/")
// .then((rawData)=>{
// console.log(rawData)
// })
// .catch((err)=>{
//   console.log(err)
// })

// fetch("https://randomuser.me/api/?results=5")

// // .then((rawData)=>{
// //   console.log(rawData)
// //   return rawData.json()
// // })
// // .then((data)=>{
// //   console.log(data.results[0].name.first)
// // })
// // .catch((err)=>{
// //   console.log(err)
// // })

// .then(function(rawData){
//   console.log(rawData);
//   return rawData.json();
// })
// .then(function(data){
//   console.log(data.results)
// })
// .catch(function(err){
//   console.log(err)
// })


function getUsers(){
  
fetch("https://randomuser.me/api/?results=5")
.then((raw)=>raw.json())
.then((data)=>{

  // document.querySelector(".users").innerHTML="";
  data.results.forEach(function(user) {
    
    console.log(data)
  
let article = document.createElement("article");
article.className = "max-w-xs overflow-hidden rounded-xl bg-white text-center shadow-lg diplay-flex justify-content-center align-item-center";


let div = document.createElement("div");
div.className = "h-20 bg-violet-600 ";


let content = document.createElement("div");
content.className = "px-4 pb-4";


let img = document.createElement("img");
img.className =
  "mx-auto -mt-10 h-20 w-20 rounded-full border-4 border-white object-cover";

img.src = user.picture.large;
img.alt = "user img";


let h1 = document.createElement("h1");
h1.className = "mt-3 text-lg font-bold";
h1.textContent = `${user.name.first} ${user.name.last}`;


let p = document.createElement("p");
p.className = "text-violet-600";
p.textContent = "Frontend Developer";


content.append(img);
content.append(h1);
content.append(p);

article.append(div);
article.append(content);


document.body.append(article);
  });
})


}

getUsers()


document.querySelector("#button")
.addEventListener("click",function(){
  getUsers();
})
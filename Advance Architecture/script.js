// const btn=document.querySelector("button")
// const ul=document.querySelector("ul")


// btn.addEventListener("click",function(){
//   const num1=Math.floor(Math.random()*10)
//   const num2=Math.floor(Math.random()*10)

//   // const add=num1+num2v    this is not the correct approach of doing this bcuz the code is mixed 

//   const li=document.createElement("li")
//   li.textContent=add;
//   ul.append(li)
// })


// const btn=document.querySelector("button")
// const ul=document.querySelector("ul")

// function add(n1,n2){
//   return n1+n2
// }

// btn.addEventListener("click",function(){
//   const num1=Math.floor(Math.random()*10)
//   const num2=Math.floor(Math.random()*10)

//   let sum=add(num1,num2)  

//   const li=document.createElement("li")
//   li.textContent=sum;
//   ul.append(li)
// })


// custom utilities(eg. own implementation of map , deep clone)

// let arr=[10,20,30,40,50]

// // arr.forEach(function(val){
// //     console.log(val+5) 
// //   })
  
//   let newarr= arr.map(function(val){
//        if (val>=20)return val;
//        console.log(val)
//     })
    
const arr=[1,2,3,4,5,6,7]


// function myMap(arr,callback){
//   let newarr;
//   for (let i=0;i<arr.length;i++){
//     newarr.push(callback(arr[i],i,arr))
//   }
//   return newarr;

// }

// function myMap(arr,callback){
//   let newarr=[];
//   for (let i=0;i<arr.length;i++){
//     newarr.push(callback(arr[i],i,arr))
//   }
//   return newarr;
// }

// let ans=myMap(arr,function(val){
//   return val+2
// })

// console.log(ans)

// function myMap(arr,callback){
//   let newarr=[];
//   for(let i=0;i<arr.length;i++){
//     newarr.push(callback(arr[i],i,arr))
//   }
//   return newarr;
// }

// let ans=myMap(arr,function(val){
//   return val+2
// })

// console.log(ans)


// how js works in browser (event loop , web apis , call stack)

// function a(){
// console.log("a")
// }
// function b(){
//   a()
//   console.log("b")
// }
// function c(){
//   b()
//   console.log("c")
// }

// c()

// web API => jitne bhi API humein browser providde karta hai that is called web APIs


// Event loop 


// setTimeout(function(){
//   console.log("hey")
// },1000)
// setTimeout(function(){
//   console.log("hey2")
// },100)
// setTimeout(function(){
//   console.log("hey3")
// },800)
// setTimeout(function(){
//   console.log("hey4")
// },700)
// setTimeout(function(){
//   console.log("hey5")
// },1200)


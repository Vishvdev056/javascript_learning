// module pattern 
// IIFE 

// let Bank=(function(){

//   let bankBalance=12000;

//    function checkBalance(){
//    console.log(bankBalance)
//   }

//   function setBalance(val){
//     bankBalance=val
//   }

//   function withdrawBalanck(val){
//     if(val<=bankBalance){
//       bankBalance-=val
//       console.log(bankBalance)
//     }
//   }

//   return {
//     checkBalance,
//     setBalance,
//     withdrawBalanck,
//   }

    
// })();


// Revealing Module Pattern 



// let Bank=(function(){

//   let bankBalance=12000;

//    function checkBalance(){
//    console.log(bankBalance)
//   }

//   function setBalance(val){
//     bankBalance=val
//   }

//   function withdrawBalanck(val){
//     if(val<=bankBalance){
//       bankBalance-=val
//       console.log(bankBalance)
//     }
//   }

//   return {
//     check:checkBalance,
//     set:setBalance,
//     draw:withdrawBalanck,
//   }

    
// })();


// factory function pattern 


// function createProduct(name,price){

//  let stock=10;
//   return{

//     name,
//     price,
//     checkStock(){
//       console.log(`${stock} Remaining Stock`)
//     },
//     buy(qty){
//       if(qty<stock){
//         stock-=qty
//         console.log(`${qty} Pices Booked  ${stock} Remaining Stock `)
//       }else{
//         console.log(`we only have ${stock} stock`)
//       }
//     },
//     refill (qty){
//        stock+=qty;
//       console.log(`refilled the stock - ${stock} pieces now`)
//     }

//   }
// };


// let iphone=createProduct("Iphone",60000)
// let kitkat=createProduct("kitkat",20)

// class YoutubeChannel{
//   constructor(){
//     this.subscribers=[];
//   }
//   subscribe(User){
// this.subscribers.push(User)
// User.update(`you have subscribed the channel`)
//   }
//   unsubscribe(User){
//     this.subscribers=this.subscribers.filter((subs)=>subs!==User,
//      User.update("You have unsubscribed the channel"))
//   }
//   notify(message){
// this.subscribers.forEach((subs)=>subs.update(message))
//   }
// }
// class User{
// constructor(name){
// this.name=name
//   }
//   update(data){
// console.log(`${this.name}.${data}`)
//   }
// }


// let apple=new YoutubeChannel()

// let User1=new User("susmita")
// let User2=new User("harsh")

// apple.unsubscribe(User1)
// apple.subscribe(User2)

// apple.notify("new video is live on the channel")


// function debounce(fnc,delay){
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer=setTimeout(function(){
//       fnc(...args);
//     }, delay);
//   };
// }

// document.querySelector("input").addEventListener("input",debounce(function(){
//   console.log("Hey")
// },1000))


// function debounce(fnc,delay){
//   let timer;
//   return function(...args){
// clearTimeout(timer);
// timer=setTimeout(function(){
//   fnc(...args)
// },delay);
// };
// }

// document.querySelector("input").addEventListener("input",
//   debounce(function(){
//     console.log("hey")
//   },1000)
// )

// function throttle(fnc,delay){
//   let timer=0;
// return function(...args){
//   let now=Date.now();
//   if(now-timer>=delay){
//     timer=now;
//     fnc(...args)
//   }
// }
// }

// document.querySelector("input").addEventListener("input",throttle(function(){
// console.log("hey")
// },1000)
// )

// LAZY LOADING 

// lazy loading image with intersection observer


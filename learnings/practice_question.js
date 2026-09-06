// loop practice question 
// 1 
// for(let i=1;i<=10;i++){
//   console.log(i)
// }


// 2 

// let i=10;
// while(i>=1){
//   console.log(i)
//  i--;
// }

// 3

// for(let i=1;i<=20;i++){
//   if(i/2){
//     i++;
//   }
//   console.log(i)
// }

// 4 

// let i=1;

// while(i<30){
//   if(i%2!==0){
//     console.log(i)
//   }
//   i++;
  
// }

// 5


// let n=Number(prompt("Enter the Number : "))

// for(let i=1;i<=10;i++){
//   console.log( `${n} x ${i} = ${i*n}`)
// }


// 6


// let sum=0;
// for(let i=1;i<=20;i++){
//   if(i%2===0){

//     sum=sum+i
//   }
// }
// console.log(sum)

// 7 

// for(let i=3;i<=50;i++){
//   if(i%3===0){
//     console.log(i)
//   }
// }

// 8

// let n=Number(prompt("Enter the nunmber : "))

// for(let i=1;i<=n;i++){
//   if(i%2===0){
//     console.log(i,"Even")
//   }else{
//     if(i%2!==0){
//       console.log(i,"Odd")
//     }
//   }
// }

// 9 

// for(let i=1;i<=100;i++){
//   if(i%3===0 && i%5===0){

//     console.log(i)
//   }
// }

// Break and Continue 

// 10


// 1 se 100 tk no print karna hai and break karna hai when it finds the first no, which is divissible by 7

// for(let i=1 ; i<=100;i++){

//    console.log(i)
//   if(i%7===0){
//     break;
//   }
 
// }


// 11

// skip multiples of 3 between 1 to 30

// for(let i=1;i<=30;i++){
//   if(i%3===0){
//     continue;
//   }
//   console.log(i)
// }


// 12

// print first five od numbers 


// let count=0;
// for(let i=1 ; i<=100;i++){
//   if(i%2===1){
//     console.log(i)
//     count++;
//   }

//   if(count===5){
//     break;
//   }
// }


// Functions

// function newyear(){
//   console.log("Happy New Year")
// }

// newyear();


// function decleration 
// function Happy(){
//   console.log("Function deceleration")
// }

// function expression 

// let Aru=function(){
//   console.log("hello bunty")
// }

// Arrow function 

// fat arrow function 

// ()=>{
//   console.log("fat arrow function")
// }

// function auto(D1){
//   console.log(`${D1} Chala raha hai `);
// }

// auto("Ramesh")
// auto("Suresh")
// auto("Mahesh")

// Rest and spread parameter 

// function ram(a,b,c,...ram){
//     console.log(a,b,c,ram)
// }

// ram(1,2,3,4,5,6,7)

// Return and early return 

// function add(v1){
//   return 10*v1
// }

// let val=add(23)
// console.log(val)

// function add(val){
// val();
// }

// add(function(val2){
//   console.log("Hello World")
 
// })


// pure and impure function 

// pure function-> aise function jo parameter ki value ko naa badlein

// let a=12;

// function abcd(){
//   console.log("happy")
// }

// impure function -> aise function jo parameter ki value ko badal dein 

// function cdef(){
//   a++;
//   console.log(a)
// }


// closure and lexial scopping 

// closure Ek function jo return kare ek aur function ko and return hone wala jo function hai vo use kare parent function ke kisi variable ko 

// function abcd(){
//    let a =12;
//    function inner(){
//     a++;
//     console.log(a)
//   }
//   return inner;
// }

// let result = abcd()
// let result2 = abcd()


// result()
// result()
// result()
// result2()
// result2()
// result()

// IIFE (Immediately invoked function expression) 

// (function(){
//   console.log("Hello")
// })();

// hoisting defferences b/w deceleration and expression 

// decleration 

// abcd();








// function abcd(){
//   console.log("Happy")
// }


// this can run without showing error 

// expression 

// abcd();








// let abcd=function(){
//   console.log("Happy")
// }

// this can show error 



// functions practice session 

// convert thi in arrow function 

// function multiply(a,b){
//  return(a*b)
// }

// // fat arrow function 

// let multiply=(a,b)=>{return (a*b)};

// function sayHi(name="guest"){
//   console.log("Hii",name)
// }

// sayHi();

// function getScore(...scores){
//   let Total=0;
//   scores.forEach(function(val){
//     Total=Total+val;
//   })
//   return Total;
// }

// console.log(getScore(1,2,3,4,5,6,7,8,9,10)) 


// function check(age){
//   if(age>18){
//     console.log("Allowed")
//   }
//   else{
//     console.log("Minor")
//   }
// }

// check(17)


// function check(age){
//   if(age>18)return"Allowed";
//   return"Minor" ;
// }

// console.log(check(16))

// pass the function into another function and excute it inside 

// function abcd(cat){
// cat();
// }

// abcd(function(cat){
//   console.log("hey there!")
// })

// BMI Calculator 

// function BMI(weight,height){
//   return weight/(height * height)
// }

// console.log(Math.round(BMI (54,1.7))) 


// function BMI(weight,height){
//   return weight/(height * height)
// }

// console.log((BMI (54,1.7).toFixed(3))) 

// discount calculator 

// function discountCalculator(discount){
//         return function(price){
//             return price-price* (discount/100)
//         }

// }

// let discounter=discountCalculator(10)


// console.log(discounter(2333))

// counter 

// function counter(){
//   let count=0;
//   return function(){
//     count++;
//     console.log(count)
//   }
// }

// let c=counter()

// c();
// c();
// c();
// c();
// c();

// let d=counter()
// d()

// creating a pure function to transform a value 

// function abcd(a){
//  return a*3
// }

// console.log(abcd(4))

// use IIFE to isolate variable 

// (function(){
//   const password="secret password"
//     console.log(password)
// })();

// console.log(password)  show error when call from outside the function

// Arrays 

// let arr=[1,2,4,43,52]

// console.log(arr[2])

// arr[2]=67;

// console.log(arr[2])

// arr.push(10)
// console.log(arr)

// sort in ascending order 
// let arr=[2,10,1,5,7,6,30,25]

// arr.sort(function(a,b){
// return a-b;
// })

// console.log(arr)


// sort in descending order 

// let arr=[2,10,1,5,7,6,30,25]

// arr.sort(function(a,b){
// return b-a;
// })

// console.log(arr)


// foreach 

let arr=[10,20,30,40,50]

arr.forEach(function(val){
    console.log(val+5) 
  })
  
  let newarr= arr.map(function(val){
       if (val>20)return val;
    })
    
//     filter 
// let arr=[10,20,30,40,50]

//  let newarr= arr.filter(function(val){
//    if (val>30)return true;
// })


// reduce 

// let arr=[1,2,3,4,5,5,7];

// let newarr=arr.reduce(funnction(accumulator,val){
//   return  accumulator+val
// },0)


// let arr=[1,2,3,4,5,5,7];

// let newarr=arr.reduce(function(accumulator,val){
//   return  accumulator+val
// },0)

// find 

// let arr=[1,2,3,4,5,5,7];

// let newarr=arr.find(function(val){
  //   return val===7
  // })
  
  // some 


  // let arr=[11,22,32,44,76,65,81,97,92,84];
  
  // let newarr=arr.some(function(val){
    //     return val>99 
    // })
    
    
  // Destructuring 

    // let arr=[11,22,32,44,76,65,81,97,92,84];

    // let [a,b, ,d]=arr;\


    // OBJECT 

    // let obj={
    //   name: "Vishvdev",
    //   subject: "Hindi",
    //   roll_no: 25011960,
    //   address:{
    //   city:"Varanasi",
    //   pincode:221107
    //   }

    // }

    // for(shyam in obj){
    //   console.log(shyam,obj[shyam])
    // }

    // console.log(Object.keys(obj))
    // console.log(Object.entries(obj))
// let obj2=JSON.parse(JSON.stringify(obj))


  // let obj2=JSON.parse(JSON.stringify(obj))

  // console.log(obj2)

  // obj2.address.city="lucknow"

  //  console.log(obj2)



  // ques 1 

  // let student={
  //   name:"rohan",
  //   age:20,
  //   isEnrolled:true
  // }
  

  // ques 2 

  // const user={
  //   "First-name":"Yogesh"
  // }

  // console.log(user["First-name"])

  // Question 3 

  // let user="age"

  // let student={
  //     name:"yogesh",
  //     roll_no:25011960,
  //     [user]:25

  // }

  // console.log(student.age)

  // for(let key in student  ){
  //   console.log(key,student[key])
  // }

  // Object.entries(student).forEach(function(val){
  //   console.log(val[0] + ":" + val[1])
  // })
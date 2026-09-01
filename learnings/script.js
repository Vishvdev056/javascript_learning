// Temporal dead zone

// console.log(a);

// // tdz-utana area jitne mein js ko pata to hai ki variable exist karta hai but vo value nahi de sakta

// let a=12;

// console.log(b)

// var b=30;

// practice question

// console.log(hm)

// var hm="Harsssh mishra"

// var age=25;
// {
//   var age=35;
// }

// console.log(age);

// let a=20;

// {
//   let a=25;
//   console.log("Inside",a);
// }
// console.log("Outside",a);


// DATATYPES

// Premitive and Refrence 

// let a=12;
// let b=a;

// a=a+2;

//  let a=[1,2,3,4]
//  let b=a

//  console.log(a)
//  console.log(b)

// let u1= Symbol("uid")
// let u2= Symbol("uid")

// Dynamic Typing

// practice questions on operators

// let a=10
// let b=20

// if(a>5 && b<25){
//   console.log("A")
// }else{
//   console.log("B")
// }

// let isAdmin=true
// let isLoggedIn=false

// if(isAdmin || isLoggedIn){
//   console.log("Acces Granted")
// }else{
//   console.log("Access Denied")
// }


// let temperature=35

// if( !(temperature<30)){
//   console.log("Hot")
// }else{
//   console.log("Pleasent")
// }

// let a=0

// if(a){
//   console.log("Truthy")
// }else{
//   console.log("Falsy")
// }

// let Score=78

// let grade = Score>=90 ? "A" : Score>=75 ? "B" : Score>=60? "C" : "Fail"

// console.log(grade)

// let loggedIn = true
// let hasToken = false

// let access = loggedIn && hasToken ? "Allow" : "Deny" ;

// console.log(access)


// if Else , Else if 
// Switch-Case 
// Early Return Pattern 

// if Else , Else if

// function getVal(val){
//   if (val>100) return "A"
//   else if(val>70) return "B"
//   else if(val>40) return "C"
//   else return "FAIL"

// }

//  console.log(getVal(45))

// function rps(user,computer){
//   if(user === computer) return "DRAW"

//   if(user==="rock" && computer=== "Seissor") return "computer won"
//   if(user==="seissor" && computer=== "paper") return "user won"
//   if(user==="paper" && computer=== "rock") return "user won"
  
//   return "User lose"
// }

// console.log(rps("paper","seissor"))

// Loops

// Revere  counting 

// for(let i=10;i>=1;i--){

//   console.log(i)

// }

// counting 


// for(let i=0;i<=10;i++){

//   console.log(i)

// }

// Even Number 

// for(let i=1; i<=20;i++){
//   if(i%2==0){
//     console.log(i)
//   }
// }


// ODD Number 

// for(let i=0 ;i<=30;i++){
//   if(i%2!=0){
//     console.log(i)
//   }
// }


// Table print (Taking user input)

// let n= Number(prompt("Enter The Number : "));

// for(let i=1;i<=10;i++){
//   console.log(`${n}  x  ${i} =  ${n*i}` );
// }


// let i=1;
// while(i<=32){
//   console.log(i)
//   i++;
// }

// for(let i=1;i<=20;i++){
//   if(i%2!=0){
//     continue;
//   }
//   console.log(i)
// }

// Functions 
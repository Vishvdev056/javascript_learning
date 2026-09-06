// const ul=document.querySelector("#ul")
// const space=document.createDocumentFragment();

// for(i=0;i<=10000;i++){
//   const li=document.createElement("li")
//   li.textContent=i;
//   space.appendChild(li)
// }

// ul.append(space)


// Memory leaks : timer, Event listeners

// let count=1;
// const int= setInterval(() => {
//   if(count<=10){
//     console.log(count)
//     count++;
//   }else{
//     clearInterval(int)
//     console.log("finised")
//   }
// }, 500);
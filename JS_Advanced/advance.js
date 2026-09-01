// function abcd() {
//     var a=25;
//     console.log(a)
// }

// abcd()

//  var a=12;

//  function abcd(){
//   console.log(a)
//  }

//  function defg(){
//   var a=25;
//   abcd();
//  }

//  defg()

//  function countForMe(){
//   var c=0;
//   return function(){
//     c++;
//     console.log(c)
//   }
//  }

//  let fnc= countForMe();

//  fnc()
//  fnc()
 

//  let fnc2=countForMe()

//  fnc2()
//  fnc2()
//  fnc2()

// function clickLimiter(){
//    var click=0;
//    return function(){
//     if(click<5){
//       click++;
//       console.log(`"Clicked" ${click} "times"`)
//     }
//     else{
//       console.error("LIMIT EXCEEDED")
//     }
//    }
// }

// let clicked=clickLimiter();

// clicked();
// clicked();
// clicked();
// clicked();
// clicked();
// clicked();

//  function createToaster(config){
//  return function(notification){
//    let div=document.createElement("div");
//    div.className=`fixed ${config.theme==="dark" ? "bg-gray-800 text-white": "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none 
//    ${config.positionX==="right"? "right-10" : "left-10"} 
//    ${config.positionY==="top"? "top-10" : "bottom-10"}`;

//    div.textContent=notification;
//    document.body.appendChild(div);

//    setTimeout(()=>{
//     document.body.removeChild(div)},
//     config.duration*1000);
//    }
   
//  }
//    let toaster=createToaster({
//    positionX:"left",
//    positionY:"bottom",
//    theme: "light",
//    duration:3,
//    });

//    toaster("thiss i dummy notification!")
//    toaster("Hello visshvdev ssingh his side !")



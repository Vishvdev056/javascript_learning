// let sta=document.querySelector("#status");
// let btn=document.querySelector("#downloadBtn")
// let select=document.querySelector(".container")
// let time=document.querySelector("#time")
// let progress=document.querySelector("#percentage")

// btn.addEventListener("click",function(){
//   sta.textContent="Downloading"
// })
// let count=0;
// setInterval(function(){
// progress.style.width= `${count}%`
// count++;
// },100)

// let downloadBtn = document.querySelector("#downloadBtn");
// let progress = document.querySelector("#progress");
// let percentage = document.querySelector("#percentage");
// let time = document.querySelector("#time");
// let status = document.querySelector("#status");

// downloadBtn.addEventListener("click", function () {

//     let progressValue = 0;
//     let totalTime = 10;
//     downloadBtn.disabled = true;
//     downloadBtn.innerText = "Downloading...";
//     status.innerText = "Downloading...";

//     let interval = setInterval(function () {

//         progressValue++;

//         // Progress bar
//         progress.style.width = progressValue + "%";

//         // Percentage
//         percentage.innerText = progressValue + "%";

//         // Remaining time
//         let remainingTime = totalTime - (progressValue / 100 * totalTime);

//         time.innerText = Math.ceil(remainingTime) + " sec";

//         // Download complete
//         if (progressValue >= 100) {

//             clearInterval(interval);

//             status.innerText = "Download Complete!";
//             time.innerText = "Completed";

//             downloadBtn.innerText = "Downloaded ✓";
//             downloadBtn.disabled = true;
//         }

//     }, 100); // runs every 100ms
// });


// let btn=document.querySelector("#downloadBtn")
// let stats=document.querySelector("#status")
// let percentage=document.querySelector("#percentage")
// let progress=document.querySelector("#progress")
// let time=document.querySelector("#time")

// btn.addEventListener("click",function(){

//   let start_time=0;
//   let totalTime=20;
//   downloadBtn.disabled=true;
//   downloadBtn.innerHTML="Downloading..."
//   stats.textContent="Downloading"


//   let interval=setInterval(function(){

//     start_time++;

//     percentage.innerHTML=start_time + "%"
//     progress.style.width=start_time + "%"

//     remaining_time= totalTime-(start_time/100*totalTime)

//     time.innerText=Math.ceil(remaining_time)+ "sec"

//     if (start_time>=100){

//         clearInterval(interval)


//       percentage.textContent="completed"
//       downloadBtn.innerHTML="Downloaded"
//       downloadBtn.disabled=true;
//       stats.textContent="Downloading Completed"
//     }
//   },30)

// })

let downloaddbtn=document.querySelector("#downloadBtn")
let percentage=document.querySelector("#percentage")
let progress=document.querySelector("#progress")
let stats=document.querySelector("#status")
let time=document.querySelector("#time")

downloaddbtn.addEventListener("click",function(){

  let start=0;
  let total=20;

  stats.innerText="Downloading"
  downloaddbtn.innerHTML="Downloadding..."
  downloaddbtn.disabled=true;

  let interval=setInterval(function(){

    start++;
    progress.style.width=start + "%"
    percentage.textContent=start + "%"

    remaining=total-(start/100*total);

    time.innerText=Math.ceil(remaining) + "sec"


    if(start>=100){
      clearInterval(interval)

      stats.textContent="Downloading Complete"
     percentage.textContent="complete"

       downloaddbtn.innerHTML="Downloaded"
      downloaddbtn.disabled=true;

    }
  },30)
})
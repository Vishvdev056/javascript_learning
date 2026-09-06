const button=document.querySelector("#btn")

button.addEventListener("click", async function(){
   let heavy=await import("./heavy.js")
   heavy.veryHeavy()
})
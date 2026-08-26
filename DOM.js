
let form=document.querySelector("form")
let inputs=document.querySelectorAll("input")
let main=document.querySelector("#main")

form.addEventListener("submit",function(dets){
  dets.preventDefault()

  let card=document.createElement("div")
  card.classList.add("card")

  let profile=document.createElement("div")
  profile.classList.add("profile")

  card.append(profile)
  console.log(card)

  let image=document.createElement("img")
  image.setAttribute("src",inputs[0].value)
  let name=document.createElement("name")
  name.textContent=inputs[1].value
  let occupation=document.createElement("occupation")
  occupation.textContent=inputs[2].value
  let about=document.createElement("about")
  about.textContent=inputs[3].value


  profile.append(image)
  card.append(profile)

  card.append(name)
  card.append(occupation)
  card.append(about)

  main.append(card)


  inputs.forEach(function(inp){
    if(inp.type!=="submit"){
      inp.value=""
    }
  })

})


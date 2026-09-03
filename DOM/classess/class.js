// class CreatePencil{
//   constructor(name,company,price,color){
//     this.name=name
//     this.company=company
//     this.price=price
//     this.color=color
//   }

//   erase(){
//     document.body.querySelectorAll("h1").forEach((elem)=>{
//       if(elem.style.color===this.color){
//         elem.remove()
//       }
//     })

//   }
//   write(text){
//     let h1=document.createElement("h1")
//     h1.textContent=text
//     h1.style.color=this.color

//     document.body.appendChild(h1)

//   }
// }

// let p1=new CreatePencil("Natraj","natraj",10,"black")
// let p2=new CreatePencil("Apasara","apsara",25,"blue")


// class User{
//   constructor(name,address,username,email){
//     this.name=name
//     this.address=address
//     this.username=username
//     this.email=email
//     this.role="user"
//   }

//   check(){
//     console.log(`you are a ${this.role}`)
//   }
//   write(text){
//     let h1=document.createElement("h1")
//     h1.textContent= `${this.name} : ${text}`
//     document.body.appendChild(h1)
//   }
// }

// class Admin extends User{
     
//   constructor(name,address,username,email){
//     super(name,address,username,email)
//     this.role="Admin"
//   }
//   remove(){
//     document.querySelectorAll("h1").forEach(function
//     (elem){
//       elem.remove();
//     })
//   }
// }

// let u1=new User("harsh","xyz colony","harsh123","heyhey123@gmail.com")
// let u2=new User("harsshita","abc colony","harshita12","heyhey456@gmail.com")
// let a1=new Admin("Admin","ccc colony","admin123","admin12@gmail.com")


let abcd={
  color: "dark",
  drink:function(){
    console.log("gut gut gut")
  }

}

let cdef=Object.create(abcd)
console.log(cdef)

const users = [
  {
    name: "Yogesh Singh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am a Software Engineering Student"
  },
  {
    name: "Rahul Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am a Web Development Student"
  },
  {
    name: "Aman Verma",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am learning JavaScript and React"
  },
  {
    name: "Rohan Patel",
    pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am a Computer Science Student"
  },
  {
    name: "Arjun Mehta",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am passionate about coding"
  },
  {
    name: "Karan Singh",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am exploring Full Stack Development"
  },
  {
    name: "Vivek Kumar",
    pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60",
    bio: "Hey, I am an aspiring Software Engineer"
  }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("bg-img");
  img.src = user.pic;
  img.alt = user.name;

  const blurredLayer = document.createElement("div");
  blurredLayer.classList.add("blurred-layer");
  blurredLayer.style.backgroundImage = `url("${user.pic}")`;

  const content = document.createElement("div");
  content.classList.add("content");

  const heading = document.createElement("h3");
  heading.textContent = user.name;

  const paragraph = document.createElement("p");
  paragraph.textContent = user.bio;

  content.append(heading, paragraph);
  card.append(img, blurredLayer, content);

  return card;
}

function showUsers(arr) {
  cardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  arr.forEach(user => {
    fragment.appendChild(createUserCard(user));
  });

  cardsContainer.appendChild(fragment);
}

showUsers(users);

inp.addEventListener("input", function () {
  const searchValue = inp.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(searchValue)
  );

  showUsers(filteredUsers);

});


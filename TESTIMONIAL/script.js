const testimonial = [
  {
    author: {
      name: "Mr.Plums",
      image: "images/image1.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error officia laborum voluptate, asperiores sint aliquid tempore et. Quis animi culpa labore amet? Illo delectus non ea molestias sint quo",
    date: "02-12-2024",
  },
  {
    author: {
      name: "Princess Dark",
      image: "images/image2.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error officia laborum voluptate, asperiores sint aliquid tempore et. Quis animi culpa labore amet? Illo delectus non ea molestias sint quo",
    date: "03-23-2018",
  },
  {
    author: {
      name: "Kallie Kan",
      image: "images/image3.jpg",
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error officia laborum voluptate, asperiores sint aliquid tempore et. Quis animi culpa labore amet? Illo delectus non ea molestias sint quo",
    date: "07-16-2024",
  },
];
const testimonialsContainer = document.querySelector("#testimonal-container");

let currentData = 0;

function nextData() {
  currentData += 1;
  testimonialCard(testimonial);
}

function previousData() {
  currentData -= 1;
  if (currentData < 0) {
    currentData = 0;
  }
  testimonialCard(testimonial);
}

function makeTheCard(arrayData) {
  return `<div class = "testimonial-card">
    <img src="${arrayData.author.image}"/>
    <h2>${arrayData.author.name}</h2>
    <p>${arrayData.text}</p>
    <date>Date: ${arrayData.date}</date>
    </div>`;
}

function testimonialCard(arrayInfo) {
  testimonialsContainer.innerHTML = makeTheCard(arrayInfo[currentData]);

  if (arrayInfo.length > 1) {
    testimonialsContainer.innerHTML += `
        <div class="btn">
        <button onclick="previousData()">Previous</button>
        <button onclick="nextData()">Next</button>
        </div>`;
  }
}

testimonialCard(testimonial);

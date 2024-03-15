const firstQuestions = [
  {
    label: "Friendliness",
    rating: 0,
  },
  {
    label: "Cleanliness",
    rating: 0,
  },
];

//getting the data from local storage "string value" and parsing it.
const storedQuestions = JSON.parse(localStorage.getItem("questions"));

const questions = storedQuestions || firstQuestions;

function makeHearts(max, question) {
  const starContainer = document.createElement("div");

  for (let hearts = 1; hearts <= max; hearts++) {
    const starElement = document.createElement("span");
    starContainer.appendChild(starElement);

    if (hearts <= question.rating) {
      starElement.classList.add("filled");
    } else {
      starElement.classList.add("empty");
    }
    starElement.onclick = () => {
      for (let i = 0; i < max; i++) {
        if (i < hearts) {
          starContainer.children[i].classList.add("filled");
        } else {
          starContainer.children[i].classList.remove("filled");
          starContainer.children[i].classList.add("empty");
        }
      }
      question.rating = hearts;
      localStorage.setItem("questions", JSON.stringify(questions));
    };
  }

  return starContainer;
}

function makeStarsRating(question) {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = question.label;
  container.appendChild(label);
  container.appendChild(makeHearts(5, question));

  return container;
}

const ratingElements = document.querySelector("#rating");

questions?.forEach((question) => {
  ratingElements.appendChild(makeStarsRating(question));
});

//ASKING THE AI TO REQORGANIZE MY CODE AND THEN COMPARE CODES.

// // Define initial questions
// const defaultQuestions = [
//   {
//     label: "Friendliness",
//     rating: 0,
//   },
//   {
//     label: "Cleanliness",
//     rating: 0,
//   },
// ];

// // Retrieve questions from local storage or use default questions
// const storedQuestions = JSON.parse(localStorage.getItem("questions"));
// const questions = storedQuestions || defaultQuestions;

// // Function to create hearts for rating
// function createHeartElement(isFilled) {
//   const heartElement = document.createElement("span");
//   heartElement.classList.add(isFilled ? "filled" : "empty");
//   return heartElement;
// }

// // Function to generate star rating UI
// function createStarRating(maxRating, currentRating, question) {
//   const starContainer = document.createElement("div");

//   // Create hearts based on the maximum rating
//   for (let hearts = 1; hearts <= maxRating; hearts++) {
//     const heartElement = createHeartElement(hearts <= currentRating);
//     heartElement.onclick = () => {
//       // Update UI and question rating on click
//       for (let i = 0; i < maxRating; i++) {
//         if (i < hearts) {
//           starContainer.children[i].classList.add("filled");
//         } else {
//           starContainer.children[i].classList.remove("filled");
//           starContainer.children[i].classList.add("empty");
//         }
//       }
//       question.rating = hearts;
//       localStorage.setItem("questions", JSON.stringify(questions));
//     };
//     starContainer.appendChild(heartElement);
//   }

//   return starContainer;
// }

// // Function to create rating UI for a single question
// function createRatingElement(question) {
//   const ratingElement = document.createElement("div");

//   // Create label for the question
//   const label = document.createElement("label");
//   label.textContent = question.label;
//   ratingElement.appendChild(label);

//   // Create star rating UI for the question
//   ratingElement.appendChild(createStarRating(5, question.rating, question));

//   return ratingElement;
// }

// // Function to render all questions with their rating UI
// function renderQuestions() {
//   const ratingContainer = document.querySelector("#rating");
//   questions.forEach((question) => {
//     const ratingElement = createRatingElement(question);
//     ratingContainer.appendChild(ratingElement);
//   });
// }

// // Render all questions on page load
// renderQuestions();

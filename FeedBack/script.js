const ratings = document.querySelectorAll(".rating");
const feedBackBtn = document.querySelector("#btn");
const container = document.querySelector("#feedback-container");

let selectedRating = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    // console.log(e.target.innerText || e.target.parentNode.innerText);
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    rating.classList.add("active");
    rating.classList.remove("active");
  });
});

feedBackBtn.addEventListener("click", () => {
  if (!selectedRating) {
    return;
  } else if (selectedRating) {
    container.innerHTML = `
    <div class="feedbck">
      <strong >Thank You!</strong>
      <br/>
      <br/>
      <strong>"${selectedRating}" was Submited</strong>
      </div>
      `;
  }
});

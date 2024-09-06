const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#message");
const post = document.querySelector("#feeds");

let data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    postData();
  }
}

function postData() {
  data["text"] = input.value;
  createPost();
}

function createPost() {
  post.innerHTML += `
     <div>
            <p>${data.text}</p>
            <span class="options">
              <i class="trash" onclick="deleteFeed(this)">🗑️</i>
              <i class="pen" onclick="updateFeed(this)">✏️</i>
            </span>
          </div>
    `;
  input.value = "";
}

//delete func.
function deleteFeed(e) {
  e.parentElement.parentElement.remove();
}

// update function.

function updateFeed(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}

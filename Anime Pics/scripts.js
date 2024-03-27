//acquire the button, image, container and etc.
const btn = document.querySelector("#btn");
const animeContainer = document.querySelector(".anime-container");
const img = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

//add event listener

btn.addEventListener("click", getAnimeImg);

//fetch data from API and manipulate DOM

async function getAnimeImg() {
  try {
    btn.disabled = true;
    btn.textContent = "LOADING IMAGE";
    animeName.textContent = "LOADING";
    img.src = "animation/pulse.svg";
    const response = await fetch("https://nekos.best/api/v2/waifu");
    const data = await response.json();
    btn.disabled = false;
    btn.textContent = "Click Me";
    animeContainer.style.display = "block";
    img.src = data.results[0].url;
    animeName.textContent = `By: "${data.results[0].artist_name}"`.trim();
  } catch (error) {
    alert("An Error occurred. Please check API");
    btn.disabled = false;
    btn.textContent = "Click Me";
    console.log(error);
  }
}

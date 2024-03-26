const inputValue = document.querySelector("#input");
const infoText = document.querySelector("#info-text");
const defContainer = document.querySelector("#def-container");
const wordTitle = document.querySelector("#title");
const wordDef = document.querySelector("#definition");
const audio = document.querySelector("#audio");

const fetchData = async (word) => {
  try {
    infoText.style.display = "block";
    infoText.textContent = `
    Searching for the word "${word}"
    `;
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (data.title || response.ok === false) {
      defContainer.style.display = "block";
      infoText.style.display = "none";
      wordTitle.textContent = `"${word}"`;
      wordDef.textContent = `"Not Available"`;
      audio.style.display = "none";
    } else {
      infoText.style.display = "none";
      defContainer.style.display = "block";
      audio.style.display = "inline-flex";
      wordTitle.textContent = `"${data[0].word.toUpperCase()}"`;
      wordDef.textContent = `"${data[0].meanings[0].definitions[0].definition}"`;
      audio.src = data[0].phonetics[0].audio;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    infoText.textContent = `
    An error has occured. Try again.
    `;
  }
};

inputValue.addEventListener("keyup", async (e) => {
  if (e.target.value && e.key === "Enter") {
    await fetchData(e.target.value);
  }
});

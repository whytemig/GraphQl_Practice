//Array of Info.

const dataArray = [
  {
    title: "Why do you like Anime?",
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor quia architecto qui molestias sit a tempora ab similique reprehenderit rerum repellat ullam error harum officiis reiciendis unde odit doloremque!",
  },
  {
    title: "What is your favorite Anime",
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor quia architecto qui molestias sit a tempora ab similique reprehenderit rerum repellat ullam error harum officiis reiciendis unde odit doloremque!",
  },
  {
    title: "Why is it your Favorite?",
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor quia architecto qui molestias sit a tempora ab similique reprehenderit rerum repellat ullam error harum officiis reiciendis unde odit doloremque!",
  },
  {
    title: "What is your favorite Character?",
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor quia architecto qui molestias sit a tempora ab similique reprehenderit rerum repellat ullam error harum officiis reiciendis unde odit doloremque!",
  },
];

function maketheHTML(data) {
  return `<details>
    <summary>
    ${data.title}
    </summary>
    <p>${data.information}</p>
    </details>`;
}

document.querySelector(".faq").innerHTML = dataArray
  .map((data) => maketheHTML(data))
  .join("");

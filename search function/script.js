//  https://newsapi.org/v2/everything?q=Apple&from=2024-03-04&sortBy=popularity&apiKey=API_KEY

const apiKey = "e9bc320d313f402d8333f02b5bbc5311";

const blogContainer = document.querySelector("#blog-container");
const searchBar = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");

async function fetchInfo() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.articles;
  } catch (error) {
    console.error("Fetching error", error);
    return [];
  }
}

async function search() {
  const query = searchBar.value.trim();
  if (query !== "") {
    try {
      const articles = await fetchInfoByQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.error("Fetching error", error);
    }
  }
}

async function fetchInfoByQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=12&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Fetching error", error);
    return [];
  }
}

searchBtn.addEventListener("click", search);

function displayBlogs(articles) {
  console.log(articles);
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img");
    const imgArticle = article.urlToImage
      ? article.urlToImage
      : "https://picsum.photos/id/1015/600/400";
    img.src = imgArticle;
    img.alt = article.title;
    const title = document.createElement("h2");
    const trumcatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + "...."
        : article.title;
    title.textContent = trumcatedTitle;
    const trumcatedDesc =
      article.title.length > 130
        ? article.description.slice(0, 130) + "...."
        : article.description;
    const desc = document.createElement("p");
    desc.textContent = trumcatedDesc;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(desc);
    blogCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });
    blogContainer.appendChild(blogCard);
  });
}

async function main() {
  try {
    const articleData = await fetchInfo();
    displayBlogs(articleData);
  } catch (error) {
    console.error("Error has occur", error);
  }
}
main();

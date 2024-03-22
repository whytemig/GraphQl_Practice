const searchInput = document.querySelector("#searchText");
const autoCompleteInput = document.querySelector("#autoCompleteResuts");
const autoCompleteInputBody = document.querySelector(
  "#autoCompleteResuts tbody"
);

//timeout function to prevent multiple request to the API
function debounce(callbck, delay) {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callbck, delay);
  };
}

function autoComplete() {
  const input = searchInput.value.trim();
  if (!input) {
    return;
  }

  //this function is returning a promise function so we can use the dot then feature.
  getData(input).then((product) => {
    autoCompleteInput.classList.add("show");
    product.forEach((product) => {
      autoCompleteInputBody.innerHTML += `
      <tr>
      <td>${product.title}</td>
      <td>$${product.price}</td>
      <td>${product.category}</td>
      <td><img src="${product.image}"/></td>
      </tr>
        `;
    });
  });
}

function getData(input) {
  const searchURL = new URL("https://dummyjson.com/products/search?");
  searchURL.searchParams.append("q", input);

  return fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      const products = data.products;
      const arrayOfProducts = products?.map((product) => ({
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.images[0],
      }));

      return arrayOfProducts;
    });
}

searchInput.addEventListener("keyup", debounce(autoComplete, 1000));

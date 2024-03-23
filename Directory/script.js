//practice using a Class

class UserDirectory {
  constructor({
    apiUrl,
    dataMapFn,
    displaySelector,
    filterSelector,
    storageKey = "userData",
  }) {
    this.storageKey = storageKey;
    this.apiUrl = apiUrl;
    this.dataMapFn = dataMapFn;
    this.displaySelector = document.querySelector(displaySelector);
    this.filterSelector = document.querySelector(filterSelector);

    this.initialize();
  }

  initialize() {
    this.getData().then((data) => {
      this.renderUser(data);
      this.headerFunc();
    });

    this.filterSelector.addEventListener("keyup", () => {
      this.filterData(this.filterSelector.value);
    });
  }

  //1. function to get the data.
  getData() {
    const storedDate = JSON.parse(localStorage.getItem(this.storageKey));

    if (storedDate) {
      return new Promise((resolve, reject) => resolve(storedDate)).then(
        (user) => {
          this.users = user;
          return user;
        }
      );
    }

    return fetch(this.apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        return this.dataMapFn(data);
      })
      .then((user) => {
        this.users = user;
        localStorage.setItem(this.storageKey, JSON.stringify(this.users));
        return user;
      });
  }
  //render the api data
  renderUser(data) {
    Array.from(this.displaySelector.children).forEach((row) => row.remove());
    data?.forEach((user) => {
      const tr = document.createElement("tr");
      Object.entries(user).forEach(([key, value]) => {
        const td = document.createElement("td");

        if (key === "photo") {
          const img = document.createElement("img");
          img.src = `${value}`;
          tr.appendChild(img);
        } else {
          td.textContent = value;
          tr.appendChild(td);
        }
      });
      this.displaySelector.appendChild(tr);
    });
  }
  //create a header func.
  headerFunc() {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    Object.keys(this.users[0]).forEach((columnName) => {
      const th = document.createElement("th");
      th.textContent = columnName[0].toUpperCase() + columnName.slice(1);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    this.displaySelector.insertAdjacentElement("beforeBegin", thead);
  }

  //filter function

  filterData(query) {
    const filtered = this.users?.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    this.renderUser(filtered);
  }
}

function dataMapFn(data) {
  return data.users?.map(
    ({ firstName, lastName, birthDate, image, phone, email }) => {
      const userObj = {
        name: `${firstName} ${lastName}`,
        birthDate,
        phone,
        email,
        photo: image,
      };
      return userObj;
    }
  );
}

const directory = new UserDirectory({
  apiUrl: "https://dummyjson.com/users",
  dataMapFn,
  displaySelector: "#userTable tbody",
  filterSelector: "#userFilter",
});

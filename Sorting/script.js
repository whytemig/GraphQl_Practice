const data = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 4,
    title: "Huawei P30",
    price: 499,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 5,
    title: "OPPOF19",
    price: 280,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 6,
    title: "MacBook Pro",
    price: 1749,
    inStock: true,
    category: "laptops",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    price: 1499,
    inStock: false,
    category: "laptops",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    price: 1499,
    inStock: false,
    category: "laptops",
  },
  {
    id: 9,
    title: "HP Pavilion 15-DK1056WM",
    price: 1099,
    inStock: true,
    category: "laptops",
  },
  {
    id: 10,
    title: "Infinix INBOOK",
    price: 1099,
    inStock: true,
    category: "laptops",
  },
];

function createTable(productData) {
  const tableElement = document.createElement("table");
  const thElement = document.createElement("thead");
  const tBody = document.createElement("tbody");

  //use the data labels as the table title columns

  const tableHeads = Object.keys(productData[0]);

  thElement.appendChild(createTableHeads(tableHeads));

  //render the body from the data Array
  productData?.forEach((data) => {
    tBody.appendChild(createProductRow(data));
  });

  tableElement.appendChild(thElement);
  tableElement.appendChild(tBody);

  return tableElement;
}

function createProductRow(data) {
  const tRow = document.createElement("tr");
  Object.values(data).forEach((value) => {
    const tData = document.createElement("td");
    tData.textContent = value;
    tRow.appendChild(tData);
  });
  return tRow;
}

function createTableHeads(heads) {
  const trElements = document.createElement("tr");
  heads?.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName[0].toUpperCase() + columnName.slice(1);
    const sortUp = document.createElement("span");
    sortUp.textContent = "⬆️";
    const sortDown = document.createElement("span");
    sortDown.textContent = "⬇️";

    sortUp.onclick = () => sortBy(columnName, "ASC");

    sortDown.onclick = () => sortBy(columnName, "DSC");

    th.appendChild(sortUp);
    th.appendChild(sortDown);

    trElements.appendChild(th);
  });

  return trElements;
}

//sorting data function
function sortBy(columnName, direction) {
  const sortUpArray = [
    ...data?.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1)),
  ];
  const sortDwnArray = [
    ...data?.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1)),
  ];

  uploadTable(direction === "ASC" ? sortUpArray : sortDwnArray);
}

//make the table function
function uploadTable(data) {
  const sortTable = document.querySelector("#sortTable");
  //reseting the table each time the document is open
  sortTable.innerHTML = "";
  sortTable.appendChild(createTable(data));
}

uploadTable(data);

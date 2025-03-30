const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");
const priceSection = document.querySelectorAll(".price input");
const searchInput = document.getElementById("search");
let arrayData = [];
if (localStorage.Product != null) {
  arrayData = JSON.parse(localStorage.Product);
}
let mood = "Create";
let searchMood = "title";
const temp = 0;
function refreshLocalStorage() {
  localStorage.setItem("Product", JSON.stringify(arrayData));
}
priceSection.forEach((element) => {
  element.addEventListener("keyup", () => {
    if (priceSection[0].value != "") {
      const result =
        +priceSection[0].value +
        +priceSection[1].value +
        +priceSection[2].value -
        +priceSection[3].value;
      total.innerHTML = result + "$";
      total.style.background = "#040";
    } else {
      priceSection[1].value = null;
      priceSection[2].value = null;
      priceSection[3].value = null;
      total.style.background = "red";
      total.innerHTML = "";
    }
  });
});

function clearData() {
  title.value = "";
  price.value = "";
  ads.value = "";
  taxes.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  total.style.background = "red";
  count.style.display = "block";
  mood = "Create";
  submit.innerHTML = mood;
}

function readData() {
  let table = "";
  for (let i = 0; i < arrayData.length; i++) {
    table += `<tr>
              <td>${i + 1}</td>
              <td>${arrayData[i].title}</td>
              <td>${arrayData[i].price}</td>
              <td>${arrayData[i].taxes}</td>
              <td>${arrayData[i].ads}</td>
              <td>${arrayData[i].discount}</td>
              <td>${arrayData[i].total}</td>
              <td>${arrayData[i].category}</td>
              <td><button onclick="updateData(${i})" id="update">UPDATE</button></td>
              <td><button onclick="deleteData(${i})" id="delete">DELETE</button></td>
            </tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  const btnDelete = document.getElementById("btnDeleteAll");
  if (arrayData.length > 0) {
    btnDelete.innerHTML = `<button onclick="deleteAll()">DELETE ALL ( ${arrayData.length} )</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}

function deleteData(index) {
  arrayData.splice(index, 1);
  refreshLocalStorage();
  readData();
  clearData();
}
function deleteAll() {
  localStorage.clear();
  arrayData.splice(0);
  readData();
}

//
readData();
submit.onclick = () => {
  const newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    category: category.value,
  };
  if (mood == "Create") {
    if (count.value > 1) {
      for (let index = 0; index < count.value; index++) {
        arrayData.push(newProduct);
      }
    } else {
      arrayData.push(newProduct);
    }
  } else {
    arrayData[temp] = newProduct;
  }

  refreshLocalStorage();
  clearData();
  readData();
};

document.querySelectorAll(".searchBlock button").forEach((btnElement) => {
  btnElement.addEventListener("click", (event) => {
    document.get;
    if (event.target.id == "searchTitle") {
      searchMood = "title";
      searchInput.placeholder = "Search By Title";
    } else {
      searchMood = "category";
      searchInput.placeholder = "Search By Category";
    }
    searchInput.focus();
  });
});

function updateData(index) {
  const product = arrayData[index];
  title.value = product.title;
  price.value = product.price;
  taxes.value = product.taxes;
  ads.value = product.ads;
  discount.value = product.discount;
  total.innerHTML = product.total;
  category.value = product.category;
  mood = "Update";
  total.style.background = "#040";
  count.style.display = "none";
  submit.innerHTML = mood;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

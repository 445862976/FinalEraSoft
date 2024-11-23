const URL = "api.json";
const cat = document.getElementById("AllCircle");

function AxiosApi() {
  axios.get(`${URL}`).then((res) => {
    Categ = res.data.cat;
    Categ.forEach((element) => {
      cat.innerHTML += `
     <div class="circle1 ">
          <img src="./assets/img/${element.img}" alt="" />
          <h3>${element.Type}</h3>
        </div>
    `;
    });
    const boxes = document.querySelectorAll(".circle1");
    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        boxes.forEach((b) => b.classList.remove("active"));

        this.classList.add("active");
        if (box.classList.contains("active")) {
          box.innerHTML += '  <i class="fa-solid fa-check"></i>';
        } else {
          box.innerHTML += "";
        }
      });
    });
  });
}
AxiosApi();
Allproduct();
let arrayProduct = [];
let addProducts = JSON.parse(localStorage.getItem("cart"));
function addCart(index) {
  FindProduct = arrayProduct.find((el) => el.id === addProducts[index].id);
  if (FindProduct == undefined) {
    arrayProduct.push({ ...addProducts[index], quantity: 1 });
    console.log(arrayProduct);
  } else {
    FindProduct.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(arrayProduct));
}
function Allproduct() {
  const CardProduct = document.querySelector(".sec-Cardes");
  axios.get(`${URL}`).then((response) => {
    products = response.data.product;
    addProducts = products;

    products.forEach((element, index) => {
      CardProduct.innerHTML += `
    <div class="card ">
  <div class="imge">
  <i class="fa-regular fa-heart heartActive"></i>
    <img src="./assets/img/${element.img}" alt="" />
  </div>
  <div class="price">
    <h6>${element.price}</h6>
    <i class="fa-solid fa-star"><span> 45</span></i>
  </div>
  <div class="discription">
    <h5>${element.title}</h5>

    <p><i class="fa-solid fa-check"></i><span>${element.piecec}</span></p>
    <p><i class="fa-solid fa-check"></i><span>${element.spicy}</span></p>
  </div>
  <button onclick="addCart(${index})">Add To Cart</button>
</div>
    `;
    });
    active();
  });
}
function active() {
  const heartIcon = document.querySelectorAll(".heartActive");

  heartIcon.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("active-heart");
    });
  });
}

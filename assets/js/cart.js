let addProducts = JSON.parse(localStorage.getItem("cart")) || [];
const Product = document.querySelector(".ThreeCarts");
renderProduct();
function renderProduct() {
  addProducts.forEach((pro, index) => {
    Product.innerHTML += `
   <div class="ContainerCart">
            <div class="cart">
              <img src="./assets/img/e9e46d6503b1af4251a66afb588478fb.jpg" alt="" />
              <div class="text-price-piecec">
                <div class="text-price">
                  <h5>${pro.title}</h5>
                  <h6>${pro.price}</h6>
                </div>
                <div class="piecec">
                  <div class="piecec-text">
                    <p>${pro.piecec}</p>
                    <p>${pro.spicy}</p>
                  </div>
                  <div class="plus-minus">
                  <i class="fa-regular fa-square-plus plus"></i>
                    <p class="quantity">${pro.quantity}</p>
                    <i class="fa-regular fa-square-minus minus" ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  });
  Plus(addProducts);
  minus(addProducts);
}


function Plus(prod) {
  const plus = document.querySelectorAll(".plus");
  const quantity = document.querySelectorAll(".quantity");
  plus.forEach((el, index) => {
    el.addEventListener("click", () => {
      quantity[index].textContent = ++prod[index].quantity;
      updateLocalStorage();
    });
  });
}
function minus(prod) {
  const minus = document.querySelectorAll(".minus");
  const quantity = document.querySelectorAll(".quantity");
  minus.forEach((el, index) => {
    el.addEventListener("click", () => {
      quantity[index].textContent = --prod[index].quantity;

      updateLocalStorage();
    });
  });
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(addProducts));
}

let cart = document.getElementById("sec-2Cards");
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "swiper-wrapper");
cart.appendChild(newDiv);
const URL = "api.json";
async function JsonCart() {
  const res = await fetch(`${URL}`);
  const FinalRes = await res.json();
  data = FinalRes.cart;
  data.forEach((element) => {
    newDiv.innerHTML += `
       <div class="swiper-slide">
             <div class="card ">
               <div class="imge">
               <i class="fa-regular fa-heart  heartActive"></i>
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
               <button>Add To Cart</button>
             </div>
           </div>
         `;
    // const heartIcon = newDiv.querySelector(".swiper-slide .card .imge i");
    // heartIcon.addEventListener("click", () => {
    //   heartIcon.classList.toggle("heartActive");
    // });
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
JsonCart();
const swiper = new Swiper(".sec-2Cards", {
  slidesPerView: 3,
  spaceBetween: 10,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
// Click on botton to display Nav List
// let botton = document.getElementById("btnNav");
// let list = document.querySelector(".ulList");
// let sec = document.querySelector(".sec-1");
// let blockList = document.getElementById("blockList");
// botton.addEventListener("click", () => {
//   list.style.display = "block";
// });
// blockList.addEventListener("click", () => {
//   list.style.display = "none";
// });

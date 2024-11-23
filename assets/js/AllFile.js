let botton = document.getElementById("btnNav");
let list = document.querySelector(".ulList");
let sec = document.querySelector(".sec-1");
let blockList = document.getElementById("blockList");
botton.addEventListener("click", () => {
  list.style.display = "block";
});
blockList.addEventListener("click", () => {
  list.style.display = "none";
});

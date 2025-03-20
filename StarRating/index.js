const starParent = document.querySelector(".star-parent");
const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".rating");
let count = 0;

starParent.addEventListener("mouseover", (event) => {
  let currStar = event.target.dataset.index;
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("filled");
  }
  for (let i = 0; i < currStar; i++) {
    stars[i].classList.add("filled");
  }
});

starParent.addEventListener("mouseleave", (event) => {
  let currStar = event.target.dataset.index;
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("filled");
  }
  for (let i = 0; i < count; i++) {
    stars[i].classList.add("filled");
  }
});

starParent.addEventListener("click", (event) => {
  let currStar = event.target.dataset.index;
  for (let i = 0; i < count; i++) {
    stars[i].classList.remove("filled");
  }
  for (let i = 0; i < currStar; i++) {
    stars[i].classList.add("filled");
  }
  count = currStar;
  rating.lastElementChild.innerHTML = `<span>${count}</span>`;
});

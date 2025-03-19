const menu = document.querySelector(".main-menu");

function openMenu() {
  menu.style.display = menu.style.display == "block" ? "none" : "block";
}

window.addEventListener("resize", () => {
  let currWidth = window.innerWidth;
  if (currWidth > 500) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

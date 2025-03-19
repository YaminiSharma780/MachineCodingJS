const expander = document.querySelector(".expander");
const header = document.querySelector("header");
expander.addEventListener("click", () => {
    header.style.display = header.style.display === "flex" ? "none" : "flex";
});

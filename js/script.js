let button = document.querySelector(".button");
let body = document.querySelector(".body");
let nextColor = document.querySelector(".nextColor");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    nextColor.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
}) 
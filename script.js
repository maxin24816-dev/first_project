const to_main = document.getElementById("to_main");
const to_all = document.getElementById("to_all");
const to_about = document.getElementById("to_about");
const to_sources = document.getElementById("to_sources");

to_main.addEventListener("click", () => {
    window.location.href = "index.html";
})
to_all.addEventListener("click", () => {
    window.location.href = "pages/every_place.html";
})
to_about.addEventListener("click", () => {
    window.location.href = "pages/about.html";
})
to_sources.addEventListener("click", () => {
    window.location.href = "pages/sources.html";
})
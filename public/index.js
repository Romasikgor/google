const menu = document.getElementById("menu");
const icon = document.getElementById("menu-btn");

icon.addEventListener("click", (e) => {
    e.stopPropagation(); 
    menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== icon) {
        menu.classList.remove("open");
    }
});

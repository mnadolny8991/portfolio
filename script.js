let toggle_button = document.querySelector("#toggle-button");
let toggleable = document.querySelectorAll(".navbar__list-elem--toggleable");
toggle_button.addEventListener("click", () => {
    for (item of toggleable) {
        if (item.style.display == "block") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }
});
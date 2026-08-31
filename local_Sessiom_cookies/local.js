let btn = document.querySelector("#themeBtn");

// System ka theme check karo
let systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

// LocalStorage se theme nikalo
let savedTheme = localStorage.getItem("theme");

// Page load hone par theme set karo
if (savedTheme) {

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

} else {

    if (systemTheme.matches) {
        document.body.classList.add("dark");
    }

}

// Button par click
btn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    // Current theme check karo
    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

});
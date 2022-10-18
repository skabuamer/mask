// Preloader
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector(".preloader").style.display = "none";
});

window.addEventListener("scroll", () => {
    // Sticky Heade r
    document.querySelector("header").classList.toggle("sticky", window.scrollY >= 100);
    // back to top button hide/show
    document.querySelector(".back__to__top").classList.toggle("active", window.scrollY >= 200);
});

// Animation on scroll
AOS.init({
    duration: 1000,
    once: true,
});

// back to top
document.querySelector(".back__to__top").addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// light/dark toggle
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
    document.querySelector(".light__dark__toggle i").className = "fa-solid fa-sun";
}

document.querySelector(".light__dark__toggle").addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        document.querySelector(".light__dark__toggle i").className = "fa-solid fa-sun";
    } else {
        disableDarkMode();
        document.querySelector(".light__dark__toggle i").className = "fa-solid fa-moon";
    }
});


// multi language functionality
const flyingPaper = document.getElementById('fly');
const flyingPaper2 = document.getElementById('fly2');
const navList = document.getElementById('navList');
const currentLang = document.getElementById('currentLang');
// const spacer1 = document.getElementById('spacer1')
// const spacer2 = document.getElementById('spacer2')

import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);

});

document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
    if (language === "en") {
        languageSelector.selectedIndex = 0; // for english

    } else if (language === "ar") {
        languageSelector.selectedIndex = 1; // for arabic

    }
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
    language === "ar" ? flyingPaper.classList.add("left-0", "md:-left-8") : flyingPaper.classList.remove("left-0", "md:-left-8");
    language === "ar" ? flyingPaper.classList.remove("right-0", "md:-right-8") : flyingPaper.classList.add("right-0", "md:-right-8");
    language === "ar" ? flyingPaper2.classList.add("left-0") : flyingPaper2.classList.remove("left-0");
    language === "ar" ? navList.dir = "rtl" : navList.dir = "ltr";
    language === "ar" ? currentLang.innerText = 'AR' : currentLang.innerText = 'EN';
    // language === "ar" ? spacer1.classList.add("h-4") : spacer1.classList.remove("h-4");
    // language === "ar" ? spacer2.classList.add("h-4") : spacer2.classList.remove("h-4");

};

// Navbar toggle menu functionality ...

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenue = document.getElementById('toggleMenu');
    const servicesBtn = document.getElementById('servicesBtn');
    const homeBtn = document.getElementById('homeBtn');
    const contactBtn = document.getElementById('contactBtn');
    const locationBtn = document.getElementById('locationBtn');
    const toggleSidebarBtn = document.getElementById('toglleBtn');
    var sidebarOpen = false;

    toggleSidebarBtn.addEventListener('click', function () {
        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            toggleMenue.classList.add('fixed', 'flex');
            toggleMenue.classList.remove('hidden');
        } else {
            toggleMenue.classList.remove('fixed', 'flex');
            toggleMenue.classList.add('hidden');
        }
    });
    servicesBtn.addEventListener('click', function () {
        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            toggleMenue.classList.add('fixed', 'flex');
            toggleMenue.classList.remove('hidden');
        } else {
            toggleMenue.classList.remove('fixed', 'flex');
            toggleMenue.classList.add('hidden');
        }
    });
    homeBtn.addEventListener('click', function () {
        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            toggleMenue.classList.add('fixed', 'flex');
            toggleMenue.classList.remove('hidden');
        } else {
            toggleMenue.classList.remove('fixed', 'flex');
            toggleMenue.classList.add('hidden');
        }
    });
    contactBtn.addEventListener('click', function () {
        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            toggleMenue.classList.add('fixed', 'flex');
            toggleMenue.classList.remove('hidden');
        } else {
            toggleMenue.classList.remove('fixed', 'flex');
            toggleMenue.classList.add('hidden');
        }
    });
    locationBtn.addEventListener('click', function () {
        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            toggleMenue.classList.add('fixed', 'flex');
            toggleMenue.classList.remove('hidden');
        } else {
            toggleMenue.classList.remove('fixed', 'flex');
            toggleMenue.classList.add('hidden');
        }
    });
});




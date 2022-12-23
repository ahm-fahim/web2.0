function themeFunc() {
    const element = document.body;
    const header = document.getElementById("headerBG");
    element.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
}

//google translate
function loadGoogleTranslate() {
    new google.translate.TranslateElement("google_translate");
}

//particles
window.onload = function () {
    Particles.init({
        selector: ".background",
        color: "#c8cdcf",
        sizeVariations: 5,
        connectParticles: true,
        maxParticles: 60,
        minParticles: 10,
    });
};

//project show hide
const showBtn = document.getElementById("showProjectBtn");

showBtn.addEventListener("click", () => {
    const projectRow = document.getElementById("moreProectRow");
    projectRow.style.display = "block";
    projectRow.style.display = "flex";
});

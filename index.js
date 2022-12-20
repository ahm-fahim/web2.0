function myFunction() {
    const element = document.body;
    const header = document.getElementById('headerBG');
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
        sizeVariations: 3,
        connectParticles: true,
        maxParticles: 50,
        minParticles: 10,
    });
};
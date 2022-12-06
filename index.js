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
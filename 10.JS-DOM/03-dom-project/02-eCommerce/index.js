//reaction counting func

document.getElementById("react").addEventListener('click', (e) => {
    const reactCountId = document.getElementById("react-count");
    const reactCountValue = reactCountId.innerText;
    const reactCount = parseFloat(reactCountValue);

    const totalReact = reactCount + 1;

    reactCountId.innerText = totalReact;
});
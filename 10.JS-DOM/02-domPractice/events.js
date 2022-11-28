const btn = document.getElementsByTagName('button');

function dark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function light() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

const grayBtn = document.getElementById("gray");

//anonymus function
grayBtn.onclick = function () {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "white";
};


// addeventlistener

const goldBtn = document.getElementById('gold');

goldBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "gold";
    document.body.style.color = "black";

})
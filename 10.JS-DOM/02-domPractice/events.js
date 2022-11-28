const btn = document.getElementsByTagName("button");

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

const goldBtn = document.getElementById("gold");

goldBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "gold";
    document.body.style.color = "black";
});

// artical

// const article = document.getElementById("article");

// function addArticle() {
//     article.innerHTML = "Document Object Model Event Handler";
// }

// short

document.getElementById("addarticle").addEventListener("click", () => {
    document.getElementById("article").innerHTML =
        "Document Object Model Event Handler";
});

//add name

document.getElementById("addName").addEventListener("click", () => {
    const inputValue = document.getElementById("nameField");
    
    const li = document.createElement('li');
    li.innerHTML = inputValue.value;

    document.getElementById("nameList").appendChild(li);
    inputValue.value = '';
});

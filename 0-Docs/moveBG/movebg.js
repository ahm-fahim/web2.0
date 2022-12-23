for (let i = 0; i < 16; ) {
    const li = document.createElement("li");
    let increase = document.getElementById("liItem").appendChild(li);
    increase += i;
    i++;
}

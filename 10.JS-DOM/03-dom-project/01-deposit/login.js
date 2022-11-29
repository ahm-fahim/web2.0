document.getElementById("login-btn").addEventListener("click", () => {
    const userEmail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;

    if (userEmail == "user@gmail.com" && userPass == "1234") {
        window.location.href = "deposit.html";
    } else {
        let warning = document.createElement("p");
        warning = "Your user name or password was wrong!\n Try Again!";

        document.getElementById("warning").innerText = warning;
        console.log(warning);
    }
});

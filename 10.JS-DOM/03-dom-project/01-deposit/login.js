document.getElementById("login-btn").addEventListener("click", () => {

    //get user email & pass
    const userEmail = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;

    //set condition for login
    if (userEmail == "user@gmail.com" && userPass == "1234") {
        window.location.href = "deposit.html";
    } else {
        //set warning for wrong email
        let warning = document.createElement("p");
        warning = "Your user name or password was wrong!\n Try Again!";

        document.getElementById("warning").innerText = warning;
        console.log(warning);
    }
});

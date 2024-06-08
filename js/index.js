var users = JSON.parse(localStorage.getItem("users")) || [];
var inputEmail = document.querySelector("input[type='email']");
var inputPassword = document.querySelector("input[type='password']");
var btnLogin = document.querySelector("button.login");
var message = document.querySelector("#message");

btnLogin.addEventListener("click", function () {
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    if (message.classList.contains("text-success")) {
      message.classList.replace("text-success", "text-danger");
    }
    message.innerHTML = "All inputs is required";
    return;
  }

  var user = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === user.email && users[i].password === user.password) {
      console.log("  i  ", i);
      localStorage.setItem("sessionUsersIndex", JSON.stringify(i));
      window.location = "./pages/home.html";
      return;
    }
  }
  if (message.classList.contains("text-success")) {
    message.classList.replace("text-success", "text-danger");
  }
  message.innerHTML = "incorrect email or password";
});

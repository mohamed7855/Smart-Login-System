var users = JSON.parse(localStorage.getItem("users")) || [];
var inputName = document.querySelector("input[type='text']");
var inputEmail = document.querySelector("input[type='email']");
var inputPassword = document.querySelector("input[type='password']");
var message = document.querySelector("#message");
var btnSignup = document.querySelector("button.signup");
var regexName = /^[a-zA-Z]+([a-zA-Z0-9])*/;
var regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexPassword = /[A-Za-z0-9]{8,}/;


function isValid(regex, input) {
  return regex.test(input.value);
}

function clearInputs() {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
}

function addUser() {
  var user = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  //   check email not already exist before
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === user.email) {
      if (message.classList.contains("text-success")) {
        message.classList.replace("text-success", "text-danger");
      }
      message.innerHTML = "Email already exists before please signin";
      return;
    }
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  if (message.classList.contains("text-danger")) {
    message.classList.replace("text-danger", "text-success");
  }
  clearInputs();
  message.innerHTML = "success";
  
}



btnSignup.addEventListener("click", function () {
  // check if user not enter any data
  if (
    inputName.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputPassword.value.trim() === ""
  ) {
    if (message.classList.contains("text-success")) {
        message.classList.replace("text-success", "text-danger");
      }
    message.innerHTML = "All inputs is required";
    return;
  }
  // check valid name
  if (!isValid(regexName, inputName)) {
    if (message.classList.contains("text-success")) {
        message.classList.replace("text-success", "text-danger");
      }
    message.innerHTML =
      "Please enter valid name *(must start with at least one letter)";
    return;
  }
  // check valid email
  if (!isValid(regexEmail, inputEmail)) {
    if (message.classList.contains("text-success")) {
        message.classList.replace("text-success", "text-danger");
      }
    message.innerHTML = "Please enter valid email";
    return;
  }
  // check valid password
  if (!isValid(regexPassword, inputPassword)) {
    if (message.classList.contains("text-success")) {
        message.classList.replace("text-success", "text-danger");
      }
    message.innerHTML =
      "Please enter valid password *(must contain at least 8 letters or numbers)";
    return;
  }
  addUser();
  
});

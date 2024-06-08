var users = JSON.parse(localStorage.getItem("users")) || [];
var userName = document.querySelector("#userName");
var sessionUsersIndex = JSON.parse(localStorage.getItem("sessionUsersIndex"));
var userLogin = users[sessionUsersIndex];
userName.innerHTML = `Welcome ${
  userLogin.name.charAt(0).toUpperCase() + userLogin.name.slice(1)
}`;

var btnLogout = document.querySelector("button.logout");
var btnRemoveAccount = document.querySelector("button.removeAccount");

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("sessionUsersIndex");
  window.location = "../index.html";
});

btnRemoveAccount.addEventListener("click", function () {
  var deleted = confirm("Are you sure you want to delete your account?");
  if (deleted) {
    users.splice(sessionUsersIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("sessionUsersIndex");
    window.location = "../index.html";
    alert("your account deleted successfully.");
  }
});

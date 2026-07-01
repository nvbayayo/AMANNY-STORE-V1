document.addEventListener("DOMContentLoaded", () => {

const user =
JSON.parse(localStorage.getItem("user"));

const username =
document.getElementById("username");

if (user && username) {

username.textContent =
user.name;

}

});

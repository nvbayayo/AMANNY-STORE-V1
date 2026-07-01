function register() {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
}

if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];

const exists = users.find(u => u.email === email);

if (exists) {
    alert("Email already exists");
    return;
}

users.push({
    name,
    email,
    password
});

localStorage.setItem("users", JSON.stringify(users));

alert("Registration Successful");

window.location.href = "login.html";
}

function login() {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
u => u.email === email && u.password === password
);

if (!user) {
    alert("Invalid Email or Password");
    return;
}

localStorage.setItem("user", JSON.stringify(user));

window.location.href = "dashboard.html";
}

function logout() {

localStorage.removeItem("user");

window.location.href = "login.html";
}

const api = "http://localhost:3000/users";

// function getUsers(data) {
//   console.log(data);
// }

// fetch("http://localhost:3000/users/1")
//   .then((response) => response.json())
//   .then((data) => {
//     let [firstObject] = data;
//     let { property1, property2 } = firstObject;
//     console.log(property1);
//     console.log(property2);
//   });

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn_signin");

const usernameDB = loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "user" && password === "user") {
    location.reload();
    window.location.href = "/HTML/todoapp.html";
  } else {
    alert("Wrong username or password");
  }
});

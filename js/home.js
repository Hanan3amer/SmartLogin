// var logoutBtn = document.getElementById("logoutBtn");

// logoutBtn.addEventListener("click", function () {
//     window.location = "index.html";
//     localStorage.removeItem('Users');
// });
var User = localStorage.getItem('User');

document.getElementById('h1').innerHTML = User;

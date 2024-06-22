var email = document.getElementById("email")
var pass = document.getElementById("pass")
var signinBtn = document.getElementById("signinBtn")
console.log(email, pass, signinBtn)
var users;
if (localStorage.getItem('Users') == null) {
    users = []
}
else {
    var users = JSON.parse(localStorage.getItem('Users'))
}



signinBtn.addEventListener('click',function(){
    login()
})

function login() {
    if (userexist()) {
        window.location = 'home.html'
    }
}



function userexist() {

    for (var i = 0; i < users.length; i++) {
        if (email.value == users[i].email && pass.value == users[i].pass) {
            localStorage.setItem("User",users[i].name)
            email.nextElementSibling.classList.replace('d-block', 'd-none')
            pass.nextElementSibling.classList.replace('d-block', 'd-none')
            return true
        }
        else {
            email.nextElementSibling.classList.replace('d-none', 'd-block');
            pass.nextElementSibling.classList.replace('d-none', 'd-block');
            return false
        }

    }

}
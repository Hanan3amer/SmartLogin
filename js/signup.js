var nameinput = document.getElementById("nameinput")
var email = document.getElementById("email")
var pass = document.getElementById("pass")
var signupBtn = document.getElementById("signupBtn")
console.log(nameinput, email, pass, signupBtn)

var users;
if (localStorage.getItem('Users') == null) {
    var users = [];
}
else {
    var users = JSON.parse(localStorage.getItem('Users'))
}


signupBtn.addEventListener('click', function () {
    adduser()

})

function adduser() {
    if (validation(nameinput) && validation(email) && validation(pass) && !emailexist()) {
        var user = {
            nameinput: nameinput.value,
            email: email.value,
            pass: pass.value
        }
        users.push(user)
        localStorage.setItem('Users', JSON.stringify(users))
        console.log(users)
        clear()
    }
    else{
        emailfound()
    }
}

function clear() {
    nameinput.value = ""
    email.value = ""
    pass.value = ""
}

function validation(ele) {
    var regex = {
        nameinput: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        pass: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    };
    if (regex[ele.id].test(ele.value)) {
        ele.classList.add('is-valid')
        ele.classList.remove('is-invalid')
        ele.nextElementSibling.classList.replace('d-block', 'd-none')
        return true
    }
    else {
        ele.classList.add('is-invalid')
        ele.classList.remove('is-valid')
        ele.nextElementSibling.classList.replace('d-none', 'd-block')
        return false
    }
}
function emailexist() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email.value) {
            return true;
        }
    }
    return false;
}

function emailfound(){
    if(emailexist()){
        document.getElementById('alert').classList.replace('d-none', 'd-block')
    }
    else{
        document.getElementById('alert').classList.replace('d-block', 'd-none')   
    }
}
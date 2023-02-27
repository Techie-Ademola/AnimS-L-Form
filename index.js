let wrapper = document.querySelector('.wrapper')
let signupPage = document.querySelector('.signup')
let loginPage = document.querySelector('.login')
let signupButton = document.querySelector('.signup-button')
let loginButton = document.querySelector('.login-button')

signupButton.onclick = function() {
    signupPage.classList.remove('signup')
    loginPage.classList.remove('login')
}
loginButton.onclick = function() {
    signupPage.classList.add('signup')
    loginPage.classList.add('login')
}

function hiddenscript() {
    var eye = document.getElementById("eye");
    eye.style.opacity = "1";        
}

function Showfunction() {
    var eye = document.getElementById("eye");
    var eye2 = document.getElementById("eye2");   
    var pass = document.getElementById("pass");
    var value = pass.value;

    if(value.length == 0) {
        eye.style.opacity = "0";
    } if (pass.type == "password") {
        pass.type = "text";
        eye.style.opacity = "0";
        eye2.style.opacity = "1";
    } else {
        pass.type = "password";
        eye2.style.opacity = "0";
        eye.style.opacity = "1";
    }       
}

function hiddenscript2() {
    var eye = document.getElementById("eye_2");
    eye.style.opacity = "1";        
}

function Showfunction2() {
    var eye = document.getElementById("eye_2");
    var eye2 = document.getElementById("eye2_2");   
    var pass = document.getElementById("pass_2");
    var value = pass.value;

    if(value.length == 0) {
        eye.style.opacity = "0";
    } if (pass.type == "password") {
        pass.type = "text";
        eye.style.opacity = "0";
        eye2.style.opacity = "1";
    } else {
        pass.type = "password";
        eye2.style.opacity = "0";
        eye.style.opacity = "1";
    }       
}
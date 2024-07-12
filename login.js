let form2 = document.querySelectorAll('.form2 input');

const [loginEmail, loginPassword] = form2;

const data = JSON.parse(localStorage.getItem('userData'));

let error = document.getElementById('error');

const loginBtn = () => {
    event.preventDefault();
    const {email , password} = data;
    if ((email === loginEmail.value) && (password === loginPassword.value)) {
        window.location.href = './dashboard.html';
    }
    else {
        error.innerText = 'Incorrect Credentials';
    }
}

let isOpen = true;
function eyeOpenClose() {
    let eye = document.getElementById('eye');
    isOpen = !isOpen
    if (isOpen) {
        eye.className = "fa-solid fa-eye";
        loginPassword.type = 'password';
    }
    else {
        eye.className = "fa-solid fa-eye-slash";
        loginPassword.type = 'text';
    }
}
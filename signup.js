let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let error = document.getElementById('error');
let form = document.querySelectorAll('.form input');

const [userName, userEmail, userPassword] = form;

const signUpBtn2 = () => {
    event.preventDefault();
    if (userName.value !== '' && userEmail.value !== '' && userPassword.value !== '') {
        let obj = {
            user : userName.value,
            email : userEmail.value,
            password : userPassword.value,
            profile : imgUrl,
        }
        if (emailRegex.test(userEmail.value) || passwordRegex.test(userPassword.value)) {
            if (emailRegex.test(userEmail.value)) {
                if (passwordRegex.test(userPassword.value)) {
                        event.preventDefault();
                        localStorage.setItem('userData', JSON.stringify(obj))
                        window.location.href = './login.html'
                }
                else {
                    event.preventDefault();
                    error.innerText = 'Password must contain Upper Character, Lower Character\nNumber, and Special Character';
                }
            }
            else {
                event.preventDefault();
                error.innerText = "Please enter a valid email address\nThe email address must contain an '@' symbol";
            }
        }
        else {
            event.preventDefault();
            error.innerText = 'Incorrect Credentials';
        }
    }
}

let isOpen = true;
function eyeOpenClose() {
    let eye = document.getElementById('eye');
    isOpen = !isOpen
    if (isOpen) {
        eye.className = "fa-solid fa-eye";
        userPassword.type = 'password';
    }
    else {
        eye.className = "fa-solid fa-eye-slash";
        userPassword.type = 'text';
    }
}

let image = document.getElementById('pic');
let showImage = document.getElementById('showImage');
let imgUrl;

const uploadImage = () => {
    let img = image.files[0];

    let fileRead = new FileReader();
    fileRead.onload = () => {
        imgUrl = fileRead.result;
    }

    fileRead.readAsDataURL(img);
}
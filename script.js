const form = document.getElementById("form");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const alertMessage = document.querySelector(".alertMessage");
const alertTitle = document.getElementById("alertTitle");

let isValid = false;
let passwordMatch=false;

function validateForm(){
    isValid=form.checkValidity();
    console.log(isValid);
    if(!isValid){
        alertTitle.textContent='Lütfen Tüm Alanları Doldurunuz';
        alertTitle.style.color='red';
        alertMessage.style.borderColor='red';
        return;
    }

    if(password.value === repassword.value){

        passwordMatch=true;
        password.style.borderColor='green';
        repassword.style.borderColor='green';
    }
    else{
        passwordMatch=false;
        alertTitle.textContent='Şifreler Eşleşmiyor!';
        alertTitle.style.color='red';
        alertMessage.style.borderColor='red';
        password.style.borderColor='red';
        repassword.style.borderColor='red';
        return;
    }
    if(isValid && passwordMatch){
        alertTitle.textContent='Kayıt Olundu!';
        alertTitle.style.color='green';
        alertMessage.style.borderColor='green';
    }
}

function submitForm(e){
    e.preventDefault();
    validateForm();
}

form.addEventListener('submit',submitForm);

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstNameError = document.getElementById('first_name_msg');
const lastNameError = document.getElementById('last_name_msg');
const passwordError = document.getElementById('password_msg');
const emailError = document.getElementById('email_msg');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit',(e)=>{
    console.log(firstName.value);
   
    if(firstName.value === ""){
        firstNameError.innerText = "First name cannot be empty";
        document.getElementById("first_name_img").classList.remove("img-success");
        document.getElementById("first_name_img").classList.add("img-error");
        firstName.style.borderColor = 'red';
        firstName.placeholder = "";
        e.preventDefault();
    } 

    if(lastName.value === ""){
        lastNameError.innerText = "Last name cannot be empty";
        document.getElementById("last_name_img").classList.remove("img-success");
        document.getElementById("last_name_img").classList.add("img-error");
        lastName.style.borderColor = 'red';
        lastName.placeholder = "";
        e.preventDefault();
    } 

    if(email.value === "" || (!(email.value.match(mailFormat)))){
        emailError.innerText = "Looks like this is not an email";
        document.getElementById("email_img").classList.remove("img-success");
        document.getElementById("email_img").classList.add("img-error");
        email.style.borderColor = 'red';
        email.placeholder='';
        e.preventDefault();
    }


    if(password.value === ""){
        passwordError.innerText = "Password cannot be empty";
        document.getElementById("password_img").classList.remove("img-success");
        document.getElementById("password_img").classList.add("img-error");
        password.style.borderColor = 'red';
        password.placeholder = "";
        e.preventDefault();
    }

    
    
})
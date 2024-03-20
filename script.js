const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword');
const phone = document.getElementById('phone');

function error(input, message) {
     input.className = 'form-control is-invalid';
     const div = input.nextElementSibling;
     div.innerText = message;
     div.className = 'invalid-feedback';
}
function success(input) {
     input.className = 'form-control is-valid';

}

const checkEmail = (input) => {
    
       
     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(re.test(input.value)){
           success(input);
       }else {
          error(input, 'email required');
       }
   };

function checkRequired(inputs) {
     inputs.forEach(function(input){
        if(input.value === '' ){
          error(input, `${input.id} is required`);
        }else {
         success(input);
        }
     });
   
}

function checkLength(input, min, max){
   if(input.value.length < min) {
     error(input, `${input.id} en az ${min} larakter olmalidir`);
   }else if(input.value.length > max) {
     error(input, `${input.id} en fazla ${max} karakter olmalidir`);
   }else {
     success(input); 
   }
}

function checkPasswords(input1, input2){
     if(input1.value !== input2.value){
          error(input2, 'Parolalar eslesmiyor');
     }
}

function checkPhone(input) {
     var exp = /^\d{10}$/;
     if(exp.test(input.value)) {
          error(input, 'Telefon 10 karakterli olmalidir');
     }
}
form.addEventListener('submit', function(e) {
     e.preventDefault();

     checkRequired([username,email,password,rePassword,phone]);
     checkEmail(email);
     checkLength(username,7,15);
     checkLength(email,7,12);
     checkPasswords(password, rePassword);
     checkPhone(phone);


})
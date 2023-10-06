
console.log("hi , wwlcome to form validation page console 😊");

let evval = 0;
let nval = 0;
let pval=0;

let confim_val= 0;


function seterror(element,str) {
    let parente = element.parentElement;
    let erfimd = parente.querySelector(".invalid-feedback");

    erfimd.innerText = str;
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

}

function setsuc(element,str) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}


function maill() {
    let mail = document.getElementById("mail");
    console.log(`mail : ${mail.value}`);

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(mail.value == ""){
        seterror(mail,"Mail is required")
        evval = 0;
    }
    else if(!isValidEmail(mail.value)){
        seterror(mail,"Enter a valid Email")
        evval = 0;
    }
    else{
        setsuc(mail,'valid mail');
        evval = 1;
    }


}

function passwrd(){

    let pass = document.getElementById("pass");

    console.log(`pass : ${pass.value}`);

    if(pass.value == "") {
        seterror(pass,"Password is required")
        pval = 0;
     } 
     else if(pass.value.length < 8){
        seterror(pass,"Password must be at least 8 character")
        pval = 0;
     }
     else{
        setsuc(pass,'invalid mail');
        pval = 1;
    };
   
} 

function namee() {
    let name = document.getElementById('name');
    console.log(`name : ${name.value}`);

    if (name.value != "" && isNaN(name.value)) {
        setsuc(name,' ');
        nval = 1;
    }
    else{
        seterror(name,"Enter a valid name ");
        nval = 0;
    }
}

function cpasswrd() {
    let cpass= document.getElementById('con_pass');

    if (cpass.value == pass.value) {
        setsuc(cpass,' ');
        pval = 1;

        confim_val = pval * nval * evval;
       console.log( confim_val );

    }
    else{
        seterror(cpass,'Password is not matching')
        pval = 0;
    }
}

// -----------------------------------------------------------


function validate() {
    console.log(confim_val);
    if(confim_val == 1){
        return true;
    }
    else {return false;}
}
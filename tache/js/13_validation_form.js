// let prenom = 'ibn souleymane';
// let regExp = new RegExp('a');
// // console.log(/a/.test(prenom));
// console.log(regExp.test(prenom));
let form = document.querySelector('#loginForm');

//Ecouter la modification de l'email
form.email.addEventListener('change', function(){
    validEmail(this);
});

//Ecouter la modification du password
form.password.addEventListener('change', function(){
    validPassword(this);
});
//************** Validation EMAIL ************//
const validEmail = function(inputEmail){
    //creation de la reg exp pour la validation email
    let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
    //Recuperation de la balise small
    let small = inputEmail.nextElementSibling;
    //On teste l'expression reguliere
    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('text-danger');
        // small.classList.add('text-sucess');
        small.classList.add('text-success');

    }else{
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
    
};

//*********Validation PASSWORD ******************//
const validPassword = function(inputPassword){
    let small = inputPassword.value;

    let msg; 
    // let msg = "test";
    let valid = false;
    //Au moins 3 caracteres
    if (inputPassword.value.length < 3){
        msg ="Le mot de passe doit contenir au moins 3 caracteres";

    }
    //Au moins 1 maj
    else if (!/[A-Z]/.test(inputPassword.value)){
        msg ="Le mot de passe doit contenir au moins 1 majuscule";
    }
    //Au moins 1 min
    else if (!/[a-z]/.test(inputPassword.value)){
        message ="Le mot de passe doit contenir au moins 1 minuscule";
    }
    //Au moins 1 chiffre
    else if (!/[0-9]/.test(inputPassword.value)){
        msg ="Le mot de passe doit contenir au moins 1 chiffre";
    }
    //Mot de passe valide
    else{
        msg ="Le mot de passe est valide";
        valid = true;
    }

    //Affichage
     //Recuperation de la balise small
    //  let small = document.getElementsByTagName("small");
     //On teste l'expression reguliere
     if (valid) {
         small.innerHTML="Mot de passe Valide";
         small.classList.remove('text-danger');
         small.classList.add('text-success');
         
 
     }else {
         small.innerHTML = msg;
         console.log('coucou');
         small.classList.remove('text-success');
         small.classList.add('text-danger');
         
         
     }
};

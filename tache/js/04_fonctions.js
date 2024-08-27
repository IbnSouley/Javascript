//fonctions
/*const message = function(){
    alert('bonjour');
};

message();*/
/*const message = function(texte){
    alert(texte);
};

message('Je suis le texte en parametre');*/

//Creation d'une fonction avec parametre optionnel
/*const message = function(texte = 'texte par defaut'){
    alert(texte);
};

message('Avec parametre');*/

//Creation d'une fonction flechée
const message = () => {
    alert('fonction flechée');
};

message();
//Creation d'une fonction somme
const somme = (a, b) => {
    alert('resultat : ' + (a+b));
};

somme(10,2); 

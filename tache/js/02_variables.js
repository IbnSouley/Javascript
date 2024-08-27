/*Variable et constantes (video 2) */
// declaration de variable + affectation de valeur
let prenom = ' Gael '; //String

let age = 37; //Number

let enLigne = true; //Boolean

let choix = null; //Null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);

//concatenation
console.log(prenom + '' + age + ' ans');
//premiere methode
console.log("Je m'appelle" +prenom+ ", j'ai " +age + "ans");
//deuxieme methode
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);
//Echanger un caractere antislash
console.log(`il fait "beau aujourd\'hui"`);
//autre methode
console.log("il fait beau aujourd'hui");
//modification de l'age
age=20;
prenom= "ibn";
console.log("Je m'appelle " +prenom+ ",  j'ai " + age + "ans");
//Declaration et affectation d'une constante
const ville = 'Rouen';

//array
let tab = ['pommes', 30, true, ['bleu', 'rouge']];
//le nbre de tableau
console.log(tab);
//Grandeur du Tableau
console.log(tab.length);
//Index 1 pour recuperer la deuxieme valeur du tableau
console.log(tab[1]);
//pour recuperer le mot rouge
console.log(tab[3][1]);

//Objet commence par les accolodes
let personne = {
    prenom: 'Gael',
    age: 37,
    adresse: {
        rue: '12 rue de la Mare',
        ville: 'Rouen'
    }
};
//afficher le prenom de la personne
console.log(personne.prenom);
//autre methode
console.log(personne['prenom']);
//pour recuperer la rue
console.log(personne.adresse.rue);
//calcul mathematique
let a = 5;
let b = 2;

//Addition
console.log(a+b);
//Soustraction
console.log(a-b);
//Multiplication
console.log(a*b);
//Division
console.log(a / b);
//modulo
console.log(a % b);
//Incrementer
a = a + 1;
//autre methode
a++; //equivaut à a = a + 1
//la methode recommadé
a += 1;
console.log(a);
//Decrementer
b = b - 1;
//autre methode
b--; //equivaut à b = b + 1
//la methode recommadé
b -= 1;
console.log(b);


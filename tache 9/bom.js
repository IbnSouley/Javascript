//initialiser les variables
var ouvrir = document.getElementById('ouvrir');
var fermer = document.getElementById('fermer');
var modifier = document.getElementById('modifier');
var fenetre = '';

//les gestionnaires d'evenements
ouvrir.addEventListener('click', fOuvrir);
modifier.addEventListener('click', fModifier);
fermer.addEventListener('click', fFermer);

//Les functions
//cette methode permet d'ouvrir
function fOuvrir() {
    fenetre = window.open('http://pierre-giraud.com', '_blank', 'width = 500, height = 300')
}

// cette methode permet de redimensionner
function fModifier() {
    fenetre.resizeTo(300,300);
}

//cette function permet de fermer
function fFermer() {
    fenetre.close();
}

//presentation de l'objet screen permet de donner l'acces aux informqtions sur l'ecran et possede 6 proprietes :
//screen.width permet de retourner la largeur total de l'ecran
//colorDelpth : retourne la profondeur de la palette de couleur de l'ecran en bits

var hauteur = screen.height;//retour la hauteur total de l'ecran
var hauteurDispo = screen.availHeight;//retour la hauteur de l'ecran moins celle de la barre de tache
var reso = screen.pixelDepth;// reourne la resolution de l'ecran en bits par pixel
 //retourner le resultat
var para = document.querySelector('p');
para.innerHTML ='Hauteur de l\'ecran :' + hauteur + 
'<br> Hauteur disponible :' + hauteurDispo + 
'<br>Resolution :' +reso + 'bits/px';

//presentation de l'objet de navigator permet de nous donner des informations et possede 10 proprietes
var langue = navigator.language;//reourne la langue du navigateur
var navigateur = navigator.appName;//reourne le nom de navigateur
var version = navigator.appVersion;//retour la version du navigateur utilisee
var moteur = navigator.product;//retourne le nom du moteur product
var cookieA = navigator.cookieEnabled;//determine si les cookies sont autoriser ou non 

//Afficher les resultats
var para = document.querySelector('#nav');
para.innerHTML = 
        'Langue utilisee : ' + langue + 
        '<br>Nom du navigateur : ' + navigateur +
        '<br>Version : ' + version +
        '<br>Moteur : ' + moteur +
        '<br>Cookie : ' + cookieA ;

//geolocalisation
// var para = document.querySelector('#nav');
// var loc = navigator.geolocation;

// (function () {
//     if (loc){
//         loc.getCurrentPosition(coordonnees);
//     }
//     else{
//         para.innerHTML = 'Localisation non disponible';
//     }
// })();

// function coordonnees(x) {
//     para.innerHTML = 
//     'Latitude : ' + x.coords.latitude + 
//     '<br>Longitude : ' + x.coords.longitude;
// }

//presentation de l'objet location possede 9 proprietes et possede 3 methodes 
var para = document.querySelector('#loc');
var charger = document.getElementById('charger');
var recharger = document.getElementById('recharger');
var changer = document.getElementById('changer');

//Afficher les resultats
charger.addEventListener('click', charge);
recharger.addEventListener('click', recharge);
changer.addEventListener('click', change);

function charge() {
    location.assign('https://www.pierre-giraud.com');
}

function recharge() {
    location.reload();
}

function change() {
    location.replace('http://pierre-giraud.com');
}

var url = location.href;
var chemin = location.pathname;

para.innerHTML = 'URL : ' + url + '<br>Chemin : ' + chemin;

//l'objet history appartient une nouvelle fois a lobjet window
//il nous permet de deplacer dans l'history de nos visiteur et de nous donner de l'information relative
// il possede une propriete : length qui permet de connaitre le nombre d'url dans l'history et 3 methode : bank qui permet de charger la derniere url de l'hostory, forward() permet de charger la premiere url et go() permet de charger une url specifique
var para = document.querySelector('#history');
var precedent = document.getElementById('precedent');
var suivant = document.getElementById('suivant');
var specifique = document.getElementById('specifique');

//Afficher les resultats
precedent.addEventListener('click', arriere);
suivant.addEventListener('click, avant');
specifique.addEventListener('click', spec);

function arriere() {
    history.back();
}

function avant() {
    history.forward();
}

function spec() {
    history.go(-3);
}

var histo = history.length;

para.innerHTML = 'UrLs : ' + histo;
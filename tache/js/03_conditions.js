//Con dition if
let age = prompt('Saisir votre age',);

if(age < 18) {
    alert('Vous etes un mineur'); 
}
else if(age >= 70){
    alert('Vous etes Senior');
}
else{
    alert('Vous etes Majeur');
}
//Condition SWITCH
let vehicule = prompt('Quel vehivule souhaitez vous ? Peugeot, BMW, Ferrari').toLowerCase();

console.log(vehicule);
let km = prompt('Combien de km souhaitez vous faire ?');

const prix = {
    peugeot : 0.4,
    bmw : 0.6,
    ferrari : 0.8
};
switch (vehicule){
    case 'peugeot' : {
        alert('Vous payerez : ' + prix.peugeot * km + ' €');
        break;
    }
    case 'bmw' : {
        alert('Vous payerez : ' + prix.bmw * km + ' €');
        break;
    }
    case 'ferrari' : {
        alert('Vous payerez : ' + prix.ferrari * km + ' €');
        break;
    }
    default:
        alert('Veuillez choisir un vehicule proposé dans la liste');
}
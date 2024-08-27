//Con dition if
let age = prompt('Saisir votre age');

if(age >0 && age <= 14) {
    alert('Vous etes un enfant'); 
}
else if(age >=15 && age <= 25){
    alert('Vous etes adolescents');
}
else if(age >=26 && age <= 64){
    alert('Vous etes adultes');
}
else if(age >=65){
    alert('Vous etes ainés');
}
else{
    alert('age invalide');
}
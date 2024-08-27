//boucle FOR
for(let i = 0; i < 3; i += 1){
    console.log('Boucle : ' + i);
}

//Parcourir un tableau
let tab = ['Pommes', 'Fraises', 'Poires', 'Bananes'];
console.log('--For--');
for(let i = 0; i < tab.length; i += 1){
    console.log(tab[i]);
}

console.log('--While--');
let j = 0;
while(j < tab.length){
    console.log(tab[j]);
    j += 1;
}

console.log('--Do While--');
let k = 0;
do{
    console.log(tab[k]);
    k += 1;
}
while(k < tab.length);

//FOR IN : iterer sur les cles d'un objet
let voiture = {
    marque: 'peugeot', moteur: 'essence'
};
console.log('For IN');
for (let k in voiture){
    console.log(k);
}
//FOR OF : iterer sur les valeurs d'un tableau
let tab2 = ['bleu', 'blanc', 'rouge'];
console.log('For OF');
for (let v of tab2){
    console.log(v);
}
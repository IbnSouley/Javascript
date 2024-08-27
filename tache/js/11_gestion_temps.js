// window.setInterval(function() {
//     console.log('setInterval');
// }, 1000);

//deuxieme possibilité
// window.setTimeout(function() {
//     console.log('setTimeout');
// }, 3000);

const horloge = function() {
    let date = new Date();
// console.log(date);

let heures = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds();

if (secondes < 10) {
    secondes = '0' + secondes;
}
if (minutes < 10) {
    secondes = '0' + minutes;
}

let affichage = heures + ':' + minutes + ':' + secondes;

document.querySelector('#horloge').innerText = affichage;
};

window.setInterval(horloge, 1000);
let nbreAleatoire = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(nbreAleatoire);
let button = document.querySelector("button");
let span = document.getElementById("plusGrand");
let sept = document.getElementById("sept");
let essai = 0;
let tentative = 7;
sept.innerText = tentative;

button.addEventListener("click", function () {
    let input = parseInt(document.getElementById("input").value);

    if (isNaN(input)){
        span.innerText = "Le champ est vide !"
    }else{
        if(tentative === 0){
            span.innerText = "Vous avez epuiser le nbre de tentatives";
            button.innerText = "Recommencer";return;
        }

        if (input > nbreAleatoire) {
            span.innerText = "le nbre aleatoire est plus petit";
        }
        else if(input < nbreAleatoire) {
            span.innerText = "Non, le nbre aleatoire est plus grand";
        }

        tentative --;
        essai ++;
        sept.innerText = tentative;

        if (input == nbreAleatoire) {
            span.innerText = (`Bravo vous avez Gagner, Aprés ${essai} Essais`);
            button.innerText = "Recommencer";
        }
        document.getElementById("input").value = "";
    }
});
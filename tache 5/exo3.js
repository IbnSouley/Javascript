//ecrire un algorithme qui permet d'afficher le nombre entre 0 et 10
let chiffre = prompt('Entrez un nombre')
if (chiffre > 10 || chiffre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10");
}else{
    for (let i = chiffre; i >= 0; i--){
        console.log(i);
    }

    // while (chiffre  >= 0) {
    //     console.log(chiffre);
    //     chiffre--   
    // }
}

    // let guess = 8
    // let chiffre 
    // // while (chiffre !== guess)
    //    while(true) {
    //     chiffre = prompt('Votre chiffre') * 1
    //     if (chiffre < guess){
    //         console.log('plus');
    //     }else if (chiffre > guess){
    //         console.log('Moins');
    //     }else{
    //         break
    //     }
    // }
    // console.log('Bravo ! vous avez deviné');

// let i = 0;
//parcourir les elements d'un tableau 
// const notes = [12, 13, 16, 8]
// const person = {
//     fisrname : 'mamadou',
//     lastname : 'doucoure'
// }

//boucle for in permet d'iterer sur la clé d'un objet ou les clé d'un tableau
//boucle for of permet de parours quelques chose d'iterable, de parcourir les differents elements d'un tableau
// const greeting = 'Bonjour'
// for(let letter in greeting){
//     console.log(letter);
// }

// boucle for qui permet d'iterer un certain nombre de fois
// for (let i = 0; i < notes.lengh; i++) {
//     console.log(notes[i]);
    
// }

//repeter un texte à 10 fois
//boucle while permet d'executer du code jusqu'à qu'une condition de la sortie soit verifié
// let i = 0;
// while (i < 10 ) {
//     console.log('Bonjour ' + i);
//     i = i + 1
// }
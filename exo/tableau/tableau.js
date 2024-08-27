//le programme calcule la moyenne de cet etudiant et affiche la moyenne sur le tableau

let tableau = [
    {
        id: 1,
        prenom: "mamadou",
        nom: "doucoure",
        note1: 12,
        note2: 13,
        note3: 14,
        moyenne:"",
    },

    {
        id: 2,
        prenom: "mariama",
        nom: "balde",
        note1: 15,
        note2: 16,
        note3: 17,
        moyenne:"",
    },

    {
        id: 3,
        prenom: "mariama",
        nom: "ndiaye",
        note1: 15,
        note2: 16,
        note3: 17,
        moyenne:"",
    },

    {
        id: 4,
        prenom: "abdoul",
        nom: "khoudouss",
        note1: 15,
        note2: 16,
        note3: 17,
        moyenne:"",
    },
];
console.log(tableau);
let affichage = "";
for (let i = 0; i < tableau.length; i++) {
    let moyenne = (tableau[i].note1 + tableau[i].note2 + tableau[i].note3) / 3;
    tableau[i].moyenne = moyenne + "/20";

    affichage += `<tr"> <td>${tableau[i].id}</td> <td>${tableau[i].prenom}</td> <td>${tableau[i].nom}</td> <td>${tableau[i].note1}</td> <td>${tableau[i].note2}</td> <td>${tableau[i].note3}</td> <td>${tableau[i].moyenne}</td></tr>`;
    // console.log(moyenne);
}
document.querySelector(".tbody").innerHTML += affichage;
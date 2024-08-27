// var nom = prompt("saisir un nom")
// document.getElementById("demo").innerHTML = soma;
// document.getElementById("demo").innerHTML = "Hello World!";

//Recherche d'element html par id
// const doucoure = document.getElementById("soma");
// console.log(doucoure);
// document.getElementById("soma").innerHTML = "bonjour";

//Recherche d'element html par nom de balise
// const element = document.getElementsByTagName("h2");
// console.log(element, "doucouré");

//Recherche d'element html par des collection d'objet html
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("doucoure").innerHTML = text;

//ecrire un programme qui permet d'afficher
// var text =prompt("saisir un texte");
// document.getElementById("demo").innerHTML = text;

//modifier la couleur
// const p = document.getElementById("demo");
// p.style.color = "red";
// document.getElementById("demo").classList.add("class");

document.getElementById("couleur").addEventListener('mouseover',function () {
    document.getElementById('couleur').classList.add('bg-success');
} )

document.getElementById("couleur2").addEventListener("mouseover",function () {
    document.getElementById('couleur2').innerText='almaek,s';
} );

//avec le bouton
// function myfunction() {
//     document.getElementById("demo").style.color = "blue";
// }

//faire la somme de deux input
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const btns = document.querySelector(".btns");
const p = document.getElementById('p');
btns.addEventListener("click",function(){
    var inputvalue1=parseInt(input1.value);
    var inputvalue2=parseInt(input2.value);
    var somme = inputvalue1 + inputvalue2;
    p.innerHTML = somme;
})






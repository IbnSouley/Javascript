//Selectionner toutes les lignes du tableau
let tabTr = document.querySelectorAll('tbody tr');

//Ajout d'un ecouteur evenement au click sur toutes les lignes
for(let tr of tabTr){
    tr.addEventListener('click', function(){
        // tr.classList.add('gris');
         this.classList.toggle('gris');
    });
}

document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault();
    let target = this.getAttribute('href');
    let response = confirm('voulez vous partir du site ?');

    if (response == true) {
        window.location = target; //Redirection vers autre page
    }else {
        alert('Merci de rester avec nous');
    }
});


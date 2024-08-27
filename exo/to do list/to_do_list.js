var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
addToDoButton.onclick = function() {
    // alert('Vous avez cliquez sur +')
    // verifier si l'input n'est pas vide
    if (inputField.value != "") {
        // si l'input n'est pas vide, creer un paragraphe
        var paragraph = document.createElement('p')
    }
    // valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value;

    // styliser le paragraphe
    paragraph.classList.add('paragraphe_style');

    // inserer le paragraphe dans la l'element toDoContainer
    toDoContainer.appendChild(paragraph);

    // vider l'input quand le paragraphe est ajouté
    inputField.value = "";

    // barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function() {
     // alert('vous avez cliquer sur le paragraphe')
        paragraph.classList.add('paragraph_click');
    })

    // suprimer la tache quand on double click sur la tache

    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph);
    })
}
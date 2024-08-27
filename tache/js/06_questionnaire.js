const questions = [
    {
        question : 
        'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
        reponse : 2
    },
    {
        question : "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
        response : 1
    },
    {
        question : 
        'quel organe est perturbé par les acouphénes ?\n1. Les Pieds\n2. Les Oreilles',
        reponse : 2
    }
];
/************Debut du jeu********/
let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i += 1){
    let repUser = prompt(questions [i].question);
    if (repUser == questions[i].reponse) {
        console.log('Reponse Bonne');
        nbBonneReponse += 1;
    }else{
        console.log('Reponse Fausse');
    }
}

if (nbBonneReponse <= 1){
    console.log(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`);
}else{
    console.log (`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);
}

//Declarer les variables
var mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet'];
console.log(mois);

//Retirer le dernier valeur du tableau mois
mois.pop();
console.log(mois);

//Afficher les valeurs du tableau en utilisant la methode document.write
document.write("Janvier, Fevrier, Mars, Avril, Mai, Juin, Juillet");

//Ajouter la valeur aout à la fin du tableau

mois.push("aout");
console.log(mois);

//Remplacer la valeur 'fevrier' par 'fevrier'
mois.splice(1, 1, 'fevrier');
console.log(mois);

//Afficher le nombre de valeurs du tableau en utilisant document.write
document.write(" le nombre de valeurs du tableau est :" + mois.length);

//Afficher la troisieme valeur du tableau
document.write(" la troisieme valeur du mois est : " + mois[2]);

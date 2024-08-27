//Object Litteral[Encapsulation]
const utilisateur = {
    noms : 'Doucoure',
    email : 'Mamadou',
    amis : ['diallo', 'sarifou'],
    login(){
        console.log(`$(this.email) est connecté(e)`);
    },
    logout(){
        console.log(`$(this.email) est déconnecté(e)`);
    }
}

console.log(utilisateur);

//Acces aux proprietées d'un object
console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'Doucoure';
utilisateur['email'] = 'doucoure@gmail.com';
console.log(utilisateur);

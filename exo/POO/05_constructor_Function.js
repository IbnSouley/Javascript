//Constructor Function : maquette (model) pour la creation des objects
function Utilsateur(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
    this.login = function () {
        console.log(`${email} est connecté(e)`);
    }
    this.logout = function () {
        console.log(`${email} est déconnecté(e)`);
    }
}

//Une instance
const util1 = new Utilsateur('doucoure', 'doucoure@gmail.com', 'diallo', 'sarifou');
const util2 = new Utilsateur('menza', 'menza@gmail.com', 'mbacke', 'mariama');
const util3 = new Utilsateur('ousmane', 'ousmane@gmail.com', 'falilou', 'mbissane');
const util4 = new Utilsateur('awa', 'awa@gmail.com', 'ndeye', 'samb');
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);

//Accés aux methodes
util1.login();
util1.logout();
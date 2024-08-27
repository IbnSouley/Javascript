//Factory Function : c'est une maquette(model) pour creer des objets en js
const utilisateur = (noms, email, ...amis)=>{
    return{
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },
        login(){
            console.log(`${email} est déconnecté(e)`);
        }
    }
} 

const util1 = utilisateur('Mamadou', 'mamadou@gmail.com', 'diallo', 'sarifou');
const util2 = utilisateur('Mariama', 'mariama@gmail.com', 'menza', 'binta');
const util3 = utilisateur('Mbacké', 'mbacke@gmail.com', 'mariama', 'menza');
console.log(util1);
console.log(util2);
console.log(util3);

util1.login();
util1.logout();

util2.login();
util2.logout();
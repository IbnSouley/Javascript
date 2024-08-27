//Creation utilisateur1
const nomsUtil1 = 'Mamadou';
const emailUtil1 = 'Mamadou@gmail.com';
const amisUtil1 = ['mariama', 'binta', 'sarifou'];
console.log(`Nom : ${nomsUtil1}`);
console.log(`Email : ${emailUtil1}`);
console.log(`Amis: ${amisUtil1}`);
console.log('');

//Creation utilisateur2
const nomsUtil2 = 'Doucoure';
const emailUtil2 = 'doucoure@gmail.com';
const amisUtil2 = ['bilal', 'ousmane', 'diallo'];
console.log(`Nom : ${nomsUtil2}`);
console.log(`Email : ${emailUtil2}`);
console.log(`Amis: ${amisUtil2}`);
console.log('');

//Creation utilisateur3
const nomsUtil3 = 'Soma';
const emailUtil3 = 'soma@gmail.com';
const amisUtil3 = ['bilal', 'ousmane', 'diallo'];
console.log(`Nom : ${nomsUtil3}`);
console.log(`Email : ${emailUtil3}`);
console.log(`Amis: ${amisUtil3}`);
console.log('');

//function
function login(email) {
    console.log(`${email} est connecté(e)`);
}

function logout(email) {
    console.log(`${email} est déconnecté(e)`);
}

login(emailUtil1);
logout(emailUtil1);
login(emailUtil2);
login(emailUtil3);

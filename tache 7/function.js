//function notes
let notes = [12, 13, 14];
function upNotes(n) {
    n[0]++
}
upNotes(notes)
console.log(notes);

//function nom
let nom = 0;
function greeting(nom) {
    nom = 'doucoure'
    console.log(`Bonjour ${nom}`);
}

greeting('doucoure')
greeting('mamadou')
console.log(nom);

//function
const a = {
    firstname : 'mamadou',
    lastname : 'doucoure',
    fullname : function () {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

a.fullname()
console.log('Hello'.toLocaleUpperCase());

//function somme 
const somme = (a, b) => {
    return a + b
}
console.log(somme(1, 2));

//pair
const isPair = function (a, fn) {
    if(a % 2 === 0){
        fn(a)
    }
}

isPair(4, function (n) {
    console.log('Mon nombre est pair ' + n);
})

//function
//on crée un nombre entre 0 & 10
//3 essaie pour deviner le mot 

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1)) 
}
const solution = getRandomInt(10)
console.log(solution);

function isRight(n) {
    return solution === n
}

function guess() {
    const number = prompt('Entrez un chiffre') * 1
    return isRight(number)
}

for (i = 0; i < 3; i++){
    if(guess()){
        console.log('Bravo');
        break;
    } else if (i === 2) {
        console.log('Vous avez perdu');
    }
}

//function
function isPremier(n) {
    for (let i = n - 1; i > 1; i--){
        if (n % i === 0){
            return false
        }
    }
    return true
}

console.log('0', isPremier(0));
console.log('1', isPremier(1));
console.log('2', isPremier(2));
console.log('3', isPremier(3));
console.log('11', isPremier(11));
console.log('12', isPremier(12));
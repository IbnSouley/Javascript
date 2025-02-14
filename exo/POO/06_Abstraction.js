//Abstraction : se baser sur l'essentiel et non le detail
function Employe(noms, age, sexe, salaire) {
    this.noms = noms; 
    this.age = age; 
    this.sexe = sexe; 
    this.salaire = salaire;

    //Detail
    const allocation = 7000; 
    const primeDeRisque = 600; 
    const calculSalaire = function(){
        console.log(`Le salaire final:${salaire + allocation + primeDeRisque}`);
    }

    this.infoEmploye = function () {
        console.log(`Noms : ${this.noms}`);
        console.log(`Age : ${this.age}`);
        console.log(`Sexe : ${this.sexe}`);
        console.log(`Salaire : ${this.salaire}`);
        calculSalaire();
    }
}

//L'instance
const emp1 = new Employe('doucoure', 25, 'M', 50000);
const emp2 = new Employe('diallo', 23, 'M', 300000);

//Lessentiel
emp1.infoEmploye();
emp2.infoEmploye();

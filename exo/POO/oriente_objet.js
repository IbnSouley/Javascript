let person = {
    age : 15,
    nom : "doucoure",
    prenom : "mamadou",
    getNom(){
        return this.nom
    }
}

let person2 = {
    age : 11,
    nom : ndeye,
    prenom : awa,
    getNom(){
        return this.nom
    }
}

let person3 = {
    age : 13,
    nom : ndiaye,
    prenom : mariama,
    getNom(){
        return this.nom
    }

}

let getNom = person2.getNom.bind(person)
console.log(getNom());

// class : attributs, proprietes, methodes

class Person{
    constructor(monAge, monNom, monPrenom){
        //super(props)
        this.state = {
            age : monAge,
            nom : monNom,
            prenom : monPrenom
        }
        console.log("Constructor", monNom);
    }

    getNom(){
        return this.nom
    }

    render(){
        return <h1>Je suis {this.state.prenom}</h1>
    }
}

// let personne1 = new Person (12, "doucoure", "mamadou")
// let personne2 = new Person (11, "ndeye", "awa")
// let personne3 = new Person (13, "ndiaye", "mariama")

// console.log(personne1.render());
// console.log(personne1.getNom());

// console.log(personne2.render());
// console.log(personne3.render());

// console.log(person.getNom);
// console.log(person2.getNom());
//create user 
var userOne = {
email : 'mamadou@gmail.com',
nom : 'mamadou',
login(){
    console.log(this.email), 'has logged in';
    
},
logout(){
    console.log(this.email, 'has logged out');
    
}
};

userOne.name = 'doucoure';

var userTwo = {
    email : 'doucoure@gmail.com',
    nom : 'doucoure',
    login(){
        console.log(this.email), 'has logged in';
        
    },
    logout(){
        console.log(this.email, 'has logged out');
        
    }
    };

    var userThree = {
        email : 'alkaly@gmail.com',
        nom : 'alkaly',
        login(){
            console.log(this.email), 'has logged in';
            
        },
        logout(){
            console.log(this.email, 'has logged out');
            
        }
        };

        var userFour = new User()
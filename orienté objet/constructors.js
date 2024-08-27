function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in'); 
    }
}

var userOne = new User('mamadou@gmail.com', 'mamadou');
var userTwo = new User('kalika@gmail.com', 'kalika');

console.log(userOne);
userTwo.login();

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    // console.log(args);
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {
    users = users.filter(user => {
        return user.email != user.email;
    })
};

class UserClass{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.online = false;
    }

    login(){
        this.online = true
    }

    logout(){
        this.online = false
    }


    render(){
        
    }
}

var userOne = new User('mamadou@gmail.com', 'mamadou');
var userTwo = new User('kalika@gmail.com', 'kalika');
var admin = new Admin('ibn@gmail.com', 'ibn souleymane');

var users = [userOne, userTwo, admin];

console.log(admin);
class User {
    constructor(email,name){
this.email = email;
this.name = name;
this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}

var userOne = new User('doucoure@gmail.com', 'doucoure');
var userTwo = new User('kalika@gmail.com', 'kalika');
var admin = new Admin('ibn@gmail.com', 'ibn souleymane');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);


// userOne.login().updateScore().updateScore().logout();


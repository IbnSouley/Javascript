// console.log(USERS);
// console.log(NEWS);
const promiseGetUsers = new Promise(function(resolve, reject){
    if (typeof USERS !== 'undefined'){
        resolve(USERS);
    } else {
        reject('Accés aux users impossibles');
    }
});

//Recuperer l'etat de la promesse 

promiseGetUsers
.then(function(u){
    let liste = '<ul>';
    for(let users of u){
       liste += `<li>${users.name}</li>`;
    }
    liste += '</ul>';
    document.querySelector('#users').innerHTML = liste;
    // return u.length;
})
// .then(function(nbUsers){
//     console.log(`Il y a : ${nbUsers} utilisateurs`);
// })
.catch(function(e){
    console.log(e);
});

//*********************News ******/
//
const promiseGetNews = new Promise(function(resolve, reject){
    if (typeof NEWS !== 'undefined'){
        resolve(NEWS);
    } else {
        reject('Accés aux news impossibles');
    }
});

//Recuperer l'etat de la promesse 

promiseGetNews
.then(function(n){
    let liste = '<ul>';
    for(let actu of n){
       liste += `<li>${actu.title}</li>`;
    }
    liste += '</ul>';
    document.querySelector('#news').innerHTML = liste;
})
.catch(function(e){
    console.log(e);
});

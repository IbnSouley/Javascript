var langagesProg =  ['HTML', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS',];

var promptText = prompt('Entrez le nom d\'un langage de programmation');
if(langagesProg.indexOf(promptText) != -1) {
    alert('Ton langage existe !');
}else {
    alert('Ton langage n\'existe pas')
}

var langagesProg =  ['HTML', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS',];
console.log(langagesProg);

for(var i = 0; i < langagesProg.length; i++){
    alert(langagesProg[i]);
}

var langagesProg = [];

while (true) {
    var promptText = prompt('Entrez un langage de programmation');
    if(promptText != ''){
        langagesProg.push(promptText);
    }else{
        break;
    }
}

console.log(langagesProg);
var langagesProgText = langagesProg.join('-')
alert('Vous avez entré les langages suivants : ' + langagesProgText)
let a = prompt("saisir un nombre de multiplication");
let table = `<table class="table table-bordered">`;
for (i = 1; i <=10; i++) {
    // console.log(a+ "x"+ i + "=" + a*i); 
    // document.body.innerHTML += `${a}x  ${i} =  ${a*i} </br>`
    table += `<tr><td>${a}x  ${i} =  ${a*i}</td></tr>`
}

table +=`</table>`
document.querySelector("#tab").innerHTML = table;
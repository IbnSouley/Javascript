const APIKEY = 'd916e7796f38161ad6a8d3ce7262b383';

/* Appel à l'API openWeather avec ville en parametre de fonction */
let apicall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
fetch(url).then((response) =>
 response.json().then((data) => { console.log(data);
 document.querySelector('#city').innerHTML = data.name;
 document.querySelector('#temp').innerHTML ="<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°';
 document.querySelector('#humidity').innerHTML ="<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
 document.querySelector('#wind').innerHTML ="<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
})
).catch(err => console.log('Error : ' + err));
};
/*Ecouteur d'evenement sur la soumission du formulaire */
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apicall(ville);
});

 //Appel par defaut au chargement de la page
 apicall('Rouen');
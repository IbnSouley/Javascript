const images = document.querySelectorAll('#galery img');
let imgActive = 0;
let interval;//variable globale pour stocker interval de temps
images[imgActive].classList.add('show');

//Masquer les photos sauf la 1ere
for(let i = 1; i < images.length; i += 1){
    images[i].classList.add('hidden');
}

//clic sur bouton suivant
    document.querySelector('#next').addEventListener('click', function(){
  next();
});

//clic sur bouton precedent
    document.querySelector('#prev').addEventListener('click', function(){
    next();
  });

  //clic sur bouton play
    document.querySelector('#play').addEventListener('click', function(){
    //creation de l'interval de temps
    interval = setInterval(next, 2000);
  });

    //clic sur bouton pause
    document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(interval);//destruction de l'interval de temps
  });

//Fonction pour photo suivante
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if(imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 300);
};

//Fonction pour photo precedente
const prev = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if(imgActive < 0){
        imgActive = images.length - 1;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 300);
};

  //gestion touches du clavier
  window.addEventListener('keydown', function(e){
    if (e.key == 'ArrowRight'){
        next();
    }
    if (e.key == 'ArrowLeft'){
        prev();
    }
  });
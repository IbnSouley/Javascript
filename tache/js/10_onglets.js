let titles = document.querySelectorAll('#tabs .tab-titles li');

for (let title of titles) {
    title.addEventListener('click', function(){
        //On recupere le numero du titre
        let num = this.getAttribute('data-tabtitle');
        
        //On masque la div precedente
        document.querySelector('#tabs > div.active').classList.remove('active');

        //On reactive le div voulu
        document.querySelector('#tab' + num).classList.add('active');

        //On enleve la class du titre precedemment actif
        document.querySelector('#tabs .tab-titles li.active').classList.remove('active');

        //On active le bon titre
        this.classList.add('active');
    });
}
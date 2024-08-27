const li = document.querySelector('li')
const ul = document.querySelector('ul')
ul.append(li.cloneNode(true))


/**
 * Creer un element HTML representant un article
 * @param {{title: string, body: string}}post
 * @return {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement('article')
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `
    return article
}

async function main() {
    const wrapper = document.querySelector('#lastPosts')
const loader = document.createElement('p')
loader.innerText = 'Chargement...'
wrapper.append(loader)
try{
const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    headers: {
        Accept: 'application/json'
    }
})
if(!r.ok) {
   throw new Error('Erreur serveur')
}
const posts = await r.json()
loader.remove()
for (let post of posts){
    wrapper.append(createArticle(post))
}

}catch (e) {
     loader.innerText = 'Impossible de charger les articles'
    loader.style.color = 'red'
}

}

main()
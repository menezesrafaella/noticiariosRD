const API_KEY = "02ecd7d968a54af28077777b45a1f46d"

let config = {
    method: "GET"
}

let noticiaNova = document.querySelector("#corpo-noticia")

//ajax - - - - - - XMLHttpRequest()

let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
    .then((resposta) => {
        return resposta.json()
    })
    .then((json) => {
        exibirNaTela(json.articles)
    })

console.log(resposta);



function exibirNaTela(listaNoticias) {
    listaNoticias.forEach((noticia) => {
        let NovaNoticia = ` 
        <div class="col-md-4">
        <div class="card" > 
            <img class="card-img-top" src="${noticia.urlToImage}" alt="Imagem da noticia">
            <div class="card-body">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text text-justify">${noticia.description}.</p>
                <button class="btn btn-warning">Ver notícia completa</button> 
                </div>
                    </div>
                    </div>
                </div>
            </div>`

        noticiaNova.insertAdjacentHTML('beforeend', NovaNoticia)

    })
}

let btnCarregar = document.querySelector("#carregar")

btnCarregar.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            exibirNaTela(json.articles)
        })
}
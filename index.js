const key = "c5940bb6aab8495f8f01033b4611499c";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

const requisicao = async () => {
  return await fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

const pegarResposta = async () => {
  return await requisicao();
};

// MONTANDO O HTML

const montarHtml = async () => {
  const { articles } = await pegarResposta();
  const pegarContainer = document.querySelector(".news-container");

  await articles.forEach((e) => {

    pegarContainer.innerHTML += `

                      <div class="container-por-news">

                      <div class="imagem-noticia">
                      <a href="${e.url}" target="_blank"><img src="${e.urlToImage}" alt="Imagem notícia" /> </a>
                      </div>

                      <div class="titulo-noticia">
                              <h4>${e.title}</h4>
                      </div>

                        <div class="descricao-noticia">
                            <p>${e.description}</p>
                        </div>

                        <div class="author-news">
                              <h5 id="author">Author:${e.author}</h5>
                              <h5><a target="_blank " href="${e.url}">view</a></h5>
                        </div>

                      </div>`;

    if (e.description === null) {
      const sumirNoticia = document.querySelectorAll(".container-por-news");
      sumirNoticia.forEach((e) => {
        e.style.display = "none";
      });
    }
  });
  console.log(pegarContainer);
  console.log(articles);
};
montarHtml();

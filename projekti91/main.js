//NY TIMES NEWS API ARTICLE SEARCH DOCUMENTATION

//https://developer.nytimes.com/docs/articlesearch-product/1/overview

const key = "*********************************";

const form = document.querySelector(".search");

const main = document.querySelector("main");

//BAD DOM MANIPULATION ↓ - SEE LINE 65 FOR EXAMPLE
/* const article = document.querySelector(".article");

const abstract = document.querySelector(".article-text");

const headline = document.querySelector(".article-title");

const author = document.querySelector(".article-author");

const articleImg = document.querySelector(".article-img");

const readMore = document.querySelector(".article-link"); */
//------------------------------------------------------------------------------------ //

const next = document.querySelector(".arrow-right");

const back = document.querySelector(".arrow-left");

let currentArticle = 0;

//------------------------------------------------------------------------------------ //

//search - event listener
form.addEventListener("submit", e => {

    e.preventDefault();

    const newsTitle = form.search.value;
    
    theNews(newsTitle);

    form.reset();

});

//news grab api 
theNews = async (query) => {

    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=Article&api-key=${key}`);

    const data = await response.json();

    let currentArticles = data.response.docs;

    for (let i = 0; i < 5; i++) {

        sessionStorage.setItem(i, JSON.stringify(currentArticles[i]));

      }

    renderNews(currentArticle);

};

//inject news api data into html (BAD DOM MANIPULATION)
/* function renderNews(i) {

let theArticle = sessionStorage.getItem(i);
  
theArticle = JSON.parse(theArticle);
  
headline.innerText = theArticle.headline.main;
  
author.innerText = `Author: ${theArticle.byline.person[0].firstname} ${theArticle.byline.person[0].lastname}`;
  
abstract.innerText = wrapWordsByText(theArticle.abstract, 50);
  
articleImg.src = `https:\/\/nytimes.com/${theArticle.multimedia[4].url}`;
  
readMore.href = theArticle.web_url;

}; */

//inject news api data with GOOD DOM MANIPULATION
function renderNews(i) {

    let theArticle = sessionStorage.getItem(i);
  
    theArticle = JSON.parse(theArticle);

    let articleText = wrapWordsByText(theArticle.abstract, 50);

    let newNewsHTML = `

    <section>

    <div class="img-box">

        <img src="https:\/\/nytimes.com/${theArticle.multimedia[4].url}" alt="" class="article-img">

    </div>

    <article>

        <h2 class="article-title">

            ${theArticle.headline.main}

        </h2>

        <h5 class="article-author">

        Author: ${theArticle.byline.person[0].firstname} ${theArticle.byline.person[0].lastname}

        </h5>

        <p class="article-text">

        ${articleText}

        </p>

        <a href="${theArticle.web_url}" class="article-link">

            Read more.

        </a>

    </article>

</section>`;

    main.innerHTML = newNewsHTML;

}

//shuffle forward
next.addEventListener("click", e => {

    currentArticle = ++currentArticle % 5;
    renderNews(currentArticle);

        });

//shuffle back    
back.addEventListener("click", e => {

    currentArticle--;
    if (currentArticle < 0) currentArticle = 4; 
    renderNews(currentArticle);

        });

//text word limiter
function wrapWordsByText(text, numberOfWords) {

    let splittedText = text.split(" ");

    if(splittedText.length >= numberOfWords) {

        splittedText.splice(numberOfWords);

        splittedText[numberOfWords + 1] = "...";

    };

    return splittedText.join(" ");

};

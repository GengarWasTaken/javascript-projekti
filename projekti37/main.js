//NY TIMES NEWS API ARTICLE SEARCH DOCUMENTATION

//https://developer.nytimes.com/docs/articlesearch-product/1/overview

const key = "*************************************";

const form = document.querySelector(".search");

const article = document.querySelector(".article");

const abstract = document.querySelector(".article-text");

const headline = document.querySelector(".article-title");

const author = document.querySelector(".article-author");

const articleImg = document.querySelector(".article-img");

const readMore = document.querySelector(".article-link");

const next = document.querySelector(".arrow-right");

const back = document.querySelector(".arrow-left");

let currentArticles;

let i = 0;

// ----------------------------------------------------------------------------------- //

//search - event listener
form.addEventListener("submit", e => {

    e.preventDefault();

    const newsTitle = form.search.value.trim();
    
    theNews(newsTitle);

    form.reset();

});

//news grab api 
theNews = async (query) => {

    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=Article&api-key=${key}`);

    const data = await response.json();

    currentArticles = data.response.docs;

    renderNews();

};

//inject news api data into html
function renderNews() {

headline.innerText = currentArticles[i].headline.main;

author.innerText = `Author: ${currentArticles[i].byline.person[0].firstname} ${currentArticles[i].byline.person[0].lastname}`;

//50 word limit abstract
let splittedAbstract = currentArticles[i].abstract.split(" ");

if (splittedAbstract.length >= 50)

{
    splittedAbstract.splice(50);

    splittedAbstract[51] = "...";

}

abstract.innerText = splittedAbstract.join(' ');

articleImg.src = `https:\/\/nytimes.com/${currentArticles[i].multimedia[8].url}`;

readMore.href = currentArticles[i].web_url;

};

 //shuffle forward
next.addEventListener("click", e => {

        i++;
        renderNews();
        if (i === 5) i = 0;
        renderNews();

        });

//shuffle back    
back.addEventListener("click", e => {

        i--;
        if (i < 0  ) i = 4; 
        renderNews();

        });

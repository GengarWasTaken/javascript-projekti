//NY TIMES NEWS API ARTICLE SEARCH DOCUMENTATION

//https://developer.nytimes.com/docs/articlesearch-product/1/overview

const key = "************************************";

const form = document.querySelector(".search");

const article = document.querySelector(".article");

const abstract = document.querySelector(".article-text");

const headline = document.querySelector(".article-title");

const author = document.querySelector(".article-author");

const articleImg = document.querySelector(".article-img");

const readMore = document.querySelector(".article-link");

const next = document.querySelector(".arrow-right");

const back = document.querySelector(".arrow-left");

// ----------------------------------------------------------------------------------- //

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

    renderNews();

};

//inject news api data into html
function renderNews(i) {

let theArticle = sessionStorage.getItem(i);
  
theArticle = JSON.parse(theArticle);
  
headline.innerText = theArticle.headline.main;
  
author.innerText = `Author: ${theArticle.byline.person[0].firstname} ${theArticle.byline.person[0].lastname}`;
  
abstract.innerText = wrapWordsByText(theArticle.abstract, 50);
  
articleImg.src = `https:\/\/nytimes.com/${theArticle.multimedia[4].url}`;
  
readMore.href = theArticle.web_url;

};

//shuffle forward
next.addEventListener("click", e => {

        i++;
        if (i === 5) i = 0;
        renderNews();

        });

//shuffle back    
back.addEventListener("click", e => {

        i--;
        if (i < 0) i = 4; 
        renderNews();

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
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=Article&api-key=${key}`);

    const data = await response.json();

    currentArticles = data.response.docs;

    renderNews();

};

//inject news api data into html
function renderNews() {

headline.innerText = currentArticles[i].headline.main;

author.innerText = `Author: ${currentArticles[i].byline.person[0].firstname} ${currentArticles[i].byline.person[0].lastname}`;

abstract.innerText = wrapWordsByText(currentArticles[i].abstract, 50);

articleImg.src = `https:\/\/nytimes.com/${currentArticles[i].multimedia[8].url}`;

readMore.href = currentArticles[i].web_url;

};

 //shuffle forward
next.addEventListener("click", e => {

        i++;
        if (i === 5) i = 0;
        renderNews();

        });

//shuffle back    
back.addEventListener("click", e => {

        i--;
        if (i < 0) i = 4; 
        renderNews();

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

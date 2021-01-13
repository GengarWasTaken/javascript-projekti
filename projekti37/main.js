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

    const articles = data.response.docs;

    return articles;

};

//inject news api data into html

headline.innerHTML = articles[i].headline.main;

author.innerHTML = "Author:" + " " + articles[i].byline.person[0].firstname + " " + articles[i].byline.person[0].lastname;

abstract.innerHTML = articles[i].abstract;

articleImg.src = "https://nytimes.com/" + articles[i].multimedia[8].url;

readMore.href = articles[i].web_url;




 // shuffle forward
next.addEventListener("click", e => {

        i++;
        if (i === 5) i = 0;
        });

// shuffle back    
back.addEventListener("click", e => {

        i--;
        if (i < 0) i = 4; 

    });

// const API_KEY ="34b6c961750841ca8a0b00febff07e01";

// const url= "https://newsapi.org/v2/everything?q=";



// window.addEventListener('load',() => fetchNews("India"));
// // HERE CALLBACK FUNCTION WILL BE TRIGGERED ON LOADING THE WINDOW

// async function fetchNews (query)
// {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     // FETCH IS AN ASYNHRONOUS SERVER USED TO FECTH INFORMATION

//     const data = await res.json();
//     console.log(data);
//     bindData(data.articles);
// }

// function bindData(articles) {
     
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML ="";

//     // WE HAVE TO EMPTY THE CONTINER BEFORE BINDING THE DATA ND THEN WE HAVE TO USE FOR EACH LOOP

//     articles.forEach(article => {
//         if(!article.urlToImage) return;
//         const cardClone = newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);

//         //BEFORE APPENDING THE CARD PUT THE DATA
//         cardsContainer.appendChild(cardClone);

//     });

// }

// function fillDataInCard(cardClone ,article) {
//     const newsImg = cardClone.querySelector("#news-img");
//     const newsTitle = cardClone.querySelector("#news-title");
//     const newsSource = cardClone.querySelector("#news-source");
//     const newsDesc = cardClone.querySelector("#news-desc");

//     newsImg.src =article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML =article.description; 

//     const date =new Date(article.publishedAt).toLocaleString("en-US", { 
//     timeZone: "Asia/Jakarta",

//     });
    
//     newsSource.innerHTML = `${article.source.name}  · ${date}`;
//     cardClone.firstElementChild.addEventListener('click', () =>{
//         window.open(article.url, "_blank");

//     });
// }









const API_KEY = "34b6c961750841ca8a0b00febff07e01";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});




// dark mode features

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    darkModeToggle.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌓 Dark Mode";
});

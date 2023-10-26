const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=610fa0b6cbd85c4750e4a082db62c55b&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=610fa0b6cbd85c4750e4a082db62c55b&query=';

const main = document.querySelector("main");
const form = document.querySelector(".searchform");
const search = document.querySelector(".searchbar");

returnMovies(APILINK)
    function returnMovies(url) {
        fetch(url).then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');

                const title = document.createElement('h3');
                title.setAttribute('class', 'title');
                
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const div_row = document.createElement('div');
                div_card.setAttribute('class', 'card');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                div_card.appendChild(image);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        })
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    
    const searchItem = search.ariaValueMax;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})
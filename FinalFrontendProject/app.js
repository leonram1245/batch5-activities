//global variables
const url = 'https://api.rawg.io/api/games?key=96261bbc4b0143ea83f0df495d7e3c3f'
const API_KEY = '96261bbc4b0143ea83f0df495d7e3c3f'
let dynamicUrl;
let buttonElement = document.querySelector('#searchButton');
let inputElement = document.querySelector('#inputValue');
let searchGameElement = document.querySelector('#searchGames');
let gameSearch = document.querySelector('#games');
let specsGame = document.querySelector('#game');
let page = document.querySelector('#page');
let background = document.querySelector('#background');
let screenshots = document.querySelector('#screenshots');

function gameOn(data){
    gameSearch.innerHTML = "";
    page.innerHTML = "";
        let games = data.results;
        let pageCount = Math.ceil(data.count/40);
        console.log(pageCount);
        let output = '';
        let output2 = '';
        let output3 = ''
        function getPageNum(){
            for(let i=1;i<=pageCount;i++){
         output3 += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
            }
            return output3;
        }
        games.forEach(get);
        function get(item){
            if(item.background_image){
                output += `<div class = "col-md-3">
                <div class = "card text-center">
                <img src = ${item.background_image}
                <h5>${item.name}</h5>
                <a onclick = "gameSelected('${item.slug}')" class = "btn btn-primary" href = "#">Game Details</a>
                </div> </div>
                  `
            }
        }
        output2 =
        `<li class="page-item"><a class="page-link" href=#>Previous</a></li>
        ${getPageNum()}
        <li class="page-item"><a class="page-link" href="#">Next</a></li>` 

        gameSearch.innerHTML = output;
        page.innerHTML = output2;
        
        console.log(data.results)
        console.log(data);
        }  

function fetchGame(dynamicUrl){
    fetch(dynamicUrl)
    .then((res)=>res.json())
    .then(gameOn)
    .catch((error)=>{
        throw(error);
    })
    
}

buttonElement.onclick = function(event){
event.preventDefault();
const value = inputElement.value;
console.log(value);
 dynamicUrl = url + "&search="+ value + "&page_size=40";
console.log(dynamicUrl);
fetchGame(dynamicUrl)
}

function gameSelected(slug){
    sessionStorage.setItem('slug',slug);
    window.location = 'game.html';
    return false;
}

function getGame(){
   slug = sessionStorage.getItem('slug');
    fetch(`https://api.rawg.io/api/games/${slug}?key=96261bbc4b0143ea83f0df495d7e3c3f`)
    .then((res)=> res.json())
    .then((res)=>{
        let info = res
        console.log(info)
     let display = 
`<div class="container-md" id="mm" >
  <div id="test" class="row" >
      <div class="col-lg-4 mx-auto">
     <img src =${info.background_image} class="img-thumbnail bg-success"width="300" height ="150" >
          </div>  
          <div class="col-lg-8">
            <h1>${info.name}</h1>
          <ul class="list-group">
            <li class="list-group-item">Genre:${
                info.genres.map((info) => {
                    return info.name;
                  }) }
             </li>
            <li class="list-group-item" id = "rating">Rating:${ info.rating}/5 based on ${info.reviews_count} Reviews</li>
            <li class="list-group-item">Date Released:${info.released}</li>
            <li class="list-group-item">Platforms:${info.platforms.map((info) => {return info.platform.name; })}</li>
            <li class="list-group-item">Developers:${info.developers.map((info) => {return info.name; })}</li>
            <li class="list-group-item" id = "website">Website:<a href = "${info.website}">${info.website}</a></li>
          </ul>         
       </div>
    </div>
    <div>
    <hr></hr>
    <h2>Description</h2>
    <p class = "lead">    ${info.description} </p>
    </div>
`


    specsGame.innerHTML = display;
    if(info.rating===0){
        document.getElementById('rating').innerHTML = 'Rating:N/A';    
     }
     if(info.website===""){
        document.getElementById('website').innerHTML = 'Website:N/A';
     }
    }
    )
}

function getScreenShots(){
    slug = sessionStorage.getItem('slug');
    fetch(`https://api.rawg.io/api/games/${slug}/screenshots`)
    .then((res)=> res.json())
    .then((res)=>{console.log(res)
      screenshots.innerHTML = '';
        let output = '';
        let disp = '';
        let info = res.results;
      //  console.log(info);
        function getSc(){
            for(let i=0;i<info.length;i++){
         output += ` <div class>
         <img src=${info[i].image}>
         </div>
         `
            }
            return output;
        }
 disp = `${getSc()}`
        screenshots.innerHTML = disp
})

}



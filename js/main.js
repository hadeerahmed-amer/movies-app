//TMDB
const API_URL =
"https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44" ;
const IMAGE_PATH =
"https://image.tmdb.org/t/p/w500/";
const SEARCH_URL =
"https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=" ;

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');


// GetMovies

getMovies(API_URL)
async function getMovies(url) {
const res= await fetch(url)
const data= await res.json()
displayMovies(data.results)
console.log(data.results);
}
function displayMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title, poster_path,overview,release_date,vote_average} = movie;
        const moviesElement = document.createElement('div');
        moviesElement.classList.add('movie');
        moviesElement.innerHTML =`
        <img src="${IMAGE_PATH + poster_path}">
        <div class="movie-info d-flex align-items-center ">
        <div class=" overview p-0">
       
            <h2>${title}</h2>
            <p>${overview}</p>
            <p>${vote_average}</p>
            <p>${release_date}</p>
            
        </div>
        </div> 
        `
        main.appendChild(moviesElement)
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const seachValue=search.value
    if(seachValue && seachValue !==''){
        getMovies(SEARCH_URL+seachValue)
        seachValue=''
    }else{
        window.location.reload()
    }
})



// contact

let names = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let age = document.getElementById('age')
let password = document.getElementById('password')
let repassword = document.getElementById('repassword')
let span = document.getElementsByTagName('span')

 names.onkeydown = function(){
    const regexna = /^[a-zA-Z ]{2,30}$/;
    if (regexna.test(names.value))
       {
      span[0].innerText = "namee is valid";
      span[0].style.color = 'lime';
       }
       else{
        span[0].innerText = "name is Invalid";
         span[0].style.color = 'red';
       }
}
email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)\.([a-zA-Z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)\.([a-zA-Z]){2,3}\.({a-zA-Z}){1,3}$/;
    if (regex.test(email.value)|| regexo.test(email.value))
       {
      span[1].innerText = "email is valid";
      span[1].style.color = 'lime';
       }
       else{
        span[1].innerText = "email is Invalid";
         span[1].style.color = 'red';
       }
}
    phone.onkeydown = function(){
    const regexn = /^[0-9]{10}$/;
    if (regexn.test(phone.value))
       {
      span[2].innerText = "phone is valid";
      span[2].style.color = 'lime';
       }
       else{
        span[2].innerText = "phone is Invalid";
         span[2].style.color = 'red';
       }
}
age.onkeydown = function(){
    const regexa = /([1-7][0-9]|80)/;
    if (regexa.test(age.value))
       {
      span[3].innerText = "age is valid";
      span[3].style.color = 'lime';
       }
       else{
        span[3].innerText = "age is Invalid";
         span[3].style.color = 'red';
       }
}
    password.onkeydown = function(){
    const minNumberofChars = 6;
    const maxNumberofChars = 16;
    const regexp  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        span[4].innerText = "password is valid";
        span[4].style.color = 'lime';
    }
    else{
        span[4].innerText = "password Invalid";
        span[4].style.color = 'red';

    }
}
//    repassword.onkeydown = function(){
//     const minNumberofChars = 6;
//     const maxNumberofChars = 16;
//     const regexp  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     if(repassword.length < minNumberofChars || repassword.length > maxNumberofChars){
//         span[5].innerText = "repassword is valid";
//         span[5].style.color = 'lime';
//     }
//     else{
//         span[5].innerText = "repassword Invalid";
//         span[5].style.color = 'red';

//     }
// }


const jokecontainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

btn.addEventListener("click", () => {
    jokecontainer.classList.remove('fade')
    fetch(url)
        .then(data =>data.json())
        
        .then(item => {
            jokecontainer.textContent=`${item.joke}`
            jokecontainer.classList.add('fade')
        })

})




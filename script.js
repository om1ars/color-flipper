const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colors = ['green', 'yellow', 'blue', 'black', 'white', 'orange', 'grey']


btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
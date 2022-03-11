const dices = [
    {
        id: 1,
        img: "./images/dice1.png",
    },
    {
        id: 2,
        img: "./images/dice2.png",
    },
    {
        id: 3,
        img: "./images/dice3.png",
    },
    {
        id: 4,
        img: "./images/dice4.png",
    },
    {
        id: 5,
        img: "./images/dice5.png",
    },
    {
        id: 6,
        img: "./images/dice6.png",
    }
];


let currentDice = 0;
let currentDiceTwo = 0;

const rollDice = document.querySelector(".roll-dice");
const img = document.querySelector(".dice-img");
const imgTwo = document.querySelector(".dice2-img");
const loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
    showDice(currentDice);
    showDiceTwo(currentDiceTwo);
});

function showDice(dice){
    const item = dices[dice];
    img.src = item.img;
}

function showDiceTwo(dice){
    const item = dices[dice];
    imgTwo.src = item.img;
}

rollDice.addEventListener("click", ()=>{
    displayDiceCard();
    loaded();
    rolling();
    currentDice = Math.floor(Math.random()*dices.length);
    currentDiceTwo = Math.floor(Math.random()*dices.length);
    showDiceTwo(currentDiceTwo);
    showDice(currentDice);
});

function loaded(){
    loader.classList.add("active");

    setTimeout(function(){
        loader.classList.remove("active");
    },1000);
}

function displayDiceCard(){
    const diceCard = document.querySelector(".dice-card");
    diceCard.classList.add("sticky");
    setTimeout(function(){
        diceCard.classList.remove("sticky");
    },1000);
}


function rolling(){
    rollDice.classList.add("sticky");

    setTimeout(function(){
        rollDice.classList.remove("sticky");
    },1000);
}
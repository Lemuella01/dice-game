let randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1)

let randomDiceimages = 'dice' + randomNumber1 + '.png';

let randomImagessource = 'images/' + randomDiceimages;


let image1 = document.querySelectorAll('img')[0].setAttribute('src', randomImagessource);


// for player 2

let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomImagessource2 = "images/dice" + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute("src", randomImagessource2);


// now you have to specify what should happen if any player wins, using if else statement.


if (randomNumber1 > randomNumber2){
  document.getElementById("header").innerHTML= " player 1 wins 🚩  "


}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
}else{
  document.querySelector('h1').innerHTML = "Its a tie!"
}


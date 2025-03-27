//player1
var randomNum1 = Math.floor(Math.random() * 6) + 1
var ranImgSrc1 = "dice" + randomNum1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", ranImgSrc1)


//player2
var randomNum2 = Math.floor(Math.random() * 6) + 1
var ranImgSrc2 = "dice" + randomNum2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2)


//player1 won
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Won 🎉"
}//player2 won
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Won 🎉"
}//forequal
else{
    document.querySelector("h1").innerHTML = "Draw!"
}

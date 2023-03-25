// let head = document.getElementById("heading");
// head.textContent = "i am back";

// var image1= document.querySelector("img");
// image1.setAttribute("src","./images/dice1.png");
var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;
var path1 = "./images/dice"+num1+".png";
var path2 = "./images/dice"+num2+".png";
var image1= document.getElementsByClassName("img1")[0];
image1.setAttribute('src',path1);
var image2= document.getElementsByClassName("img2")[0];
image2.setAttribute('src',path2);
if(num1>num2)
{
    document.querySelector("h1").textContent=" 🚩Player 1 won ";
}
else {
    document.querySelector("h1").textContent=" Player 2 won 🚩 ";
}
 

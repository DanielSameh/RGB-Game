var colors= generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var headerColor = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors= generateRandomColors(6);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor; 
    headerColor.style.backgroundColor = "#232323";
    resetButton.textContent = "New Color";
    for (var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
    
    
    
    
    
})


colorDisplay.textContent = pickedColor; 

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedColor){
        changeColors(clickedcolor)
        messageDisplay.textContent="Correct!";
        headerColor.style.backgroundColor = pickedColor;
        resetButton.textContent = "Try Again?";
        }
        else
        { this.style.backgroundColor = "#232323" ;
        messageDisplay.textContent="Try Again!!"; }  
    });
}

function changeColors (color){
    for (var i =0; i <squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor (){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors (num){
    var arr = []

    for ( var i = 0; i <num ; i++){
        arr[i] = "rgb("+ Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) +", " + Math.floor(Math.random() * 255) +")";
    }

    return arr;
}
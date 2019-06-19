var colors=
[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");


colorDisplay.textContent = pickedColor; 

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedColor){
        changeColors(clickedcolor)
        messageDisplay.textContent="Correct!";
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
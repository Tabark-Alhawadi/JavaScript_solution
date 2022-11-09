document.getElementById("firstBox-1").onmouseover = function () {
    document.getElementById("firstBox-1").style.backgroundColor = "rgb(128, 0, 255);";
  }
  document.getElementById("firstBox-1").onmouseout = function () {
    document.getElementById("firstBox-1").style.backgroundColor = "rgb(27, 87, 115)";
  }

var boxTwo = document.getElementById("firstBox-2");
function getRandomColor() {
    var letters = '0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}
  
function changeColor(){
  boxTwo.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,500);
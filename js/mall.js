if (window.innerHeight){
    winHeight = window.innerHeight;
}
else if ((document.body) && (document.body.clientHeight)){
    winHeight = document.body.clientHeight;
}

if (document.documentElement && document.documentElement.clientHeight){
    winHeight = document.documentElement.clientHeight;
}
    

var winLeft = document.getElementById("category");
var winRight = document.getElementById("goods");
var footer = document.getElementById("footer");

var footerHeight = footer.clientHeight;

window.onload = function(){
    winLeft.style.height = (winHeight - footerHeight) + "px";
    winRight.style.height = (winHeight - footerHeight) + "px";
    console.log(winLeft);
    console.log(footer.clientHeight);
}

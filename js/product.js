var productRemove = document.getElementById("minus");
var productAdd = document.getElementById("add");
var productAmount = document.getElementById("product_number");

window.onload = function(){
    productAmount.innerHTML = "0";
}

productRemove.onclick = function(){
    var currentAmount = parseInt(productAmount.childNodes[0].nodeValue);

    currentAmount = currentAmount - 1;
    productAmount.innerHTML = currentAmount;
}

productAdd.onclick = function(){
    var currentAmount = parseInt(productAmount.childNodes[0].nodeValue);

    currentAmount = currentAmount + 1;
    console.log(currentAmount);
    productAmount.innerHTML = currentAmount;
}
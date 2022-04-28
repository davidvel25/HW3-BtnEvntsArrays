let origArray = [2,3,4];

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('Button 1 Clicked!');
    //Same principle here
    document.getElementById("tb1").value = origArray[0];
    document.getElementById("tb2").value = origArray[1];
    document.getElementById("tb3").value = origArray[2];
});

document.getElementById("btn2").addEventListener("click", function() {
    console.log('Button 2 Clicked!');
    newArray = origArray.map(cubeIt); 
    document.getElementById("tb1").value = newArray[0]; 
    document.getElementById("tb2").value = newArray[1]; 
    document.getElementById("tb3").value = newArray[2]; 
});

document.getElementById("btn3").addEventListener("click", ToTheFourth);

function square(){
    console.log("Button 3 Clicked!");
    newArray = origArray.map(squareIt);
    document.getElementById("tb1").value = newArray[0]; 
    document.getElementById("tb2").value = newArray[1];
    document.getElementById("tb3").value = newArray[2];
}

function squareIt(element){
    return Math.pow(element, 2);
}

function cubeIt(element){
    return Math.pow(element, 3);
}

function ToTheFourth(){
    newArray = origArray.map(fourthIt);
    document.getElementById("tb1").value = newArray[0];
    document.getElementById("tb2").value = newArray[1];
    document.getElementById("tb3").value = newArray[2];
}

function fourthIt(element){
    return Math.pow(element, 4);
}
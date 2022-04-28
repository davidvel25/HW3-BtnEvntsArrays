//the original array variable with three terms: 2, 3, 4
let origArray = [2,3,4];

//DOMContentLoaded waits for the page to fully load before executing the commands contained within the curly braces
document.addEventListener('DOMContentLoaded', function(event) {
    console.log('Button 1 Clicked!');
    //sets the value contained inside textbox 1, 2, and 3 with the pre-assigned values of the origArray function
    document.getElementById("tb1").value = origArray[0];
    document.getElementById("tb2").value = origArray[1];
    document.getElementById("tb3").value = origArray[2];
});

//once button 2 has been clicked, the commmands inside this anonymous function are executed
//this is an anonymous function which is essentially a basic way of writing a function
document.getElementById("btn2").addEventListener("click", function() {
    console.log('Button 2 Clicked!');
    //the .map property essentially applies a function or parameter throughout all values of an array... in this case the 'cubeIt' function is 
    //executed on the three terms in the original array named origArray
    newArray = origArray.map(cubeIt); 

    //sets the value contained inside textbox 1, 2, and 3 with the cubed numbers of the origArray terms
    document.getElementById("tb1").value = newArray[0]; 
    document.getElementById("tb2").value = newArray[1]; 
    document.getElementById("tb3").value = newArray[2]; 
});

//when button 3 has been clicked, the 'ToTheFourth' function is executed
//this eventListener calls the function by its name
document.getElementById("btn3").addEventListener("click", ToTheFourth);

//function with commands on what occurs when the first button is clicked, which squares all the values in origArray and replaces the textbox's values with the newArray
function square(){
    console.log("Button 1 Clicked!");
    newArray = origArray.map(squareIt);
    document.getElementById("tb1").value = newArray[0]; 
    document.getElementById("tb2").value = newArray[1];
    document.getElementById("tb3").value = newArray[2];
}

//basic squaring function using the Math library's Math.pow function
function squareIt(element){
    return Math.pow(element, 2);
}

//basic cubing function using the Math library's Math.pow function
function cubeIt(element){
    return Math.pow(element, 3);
}

//function with commands on what occurs when the third button is clicked, which raises the values in origArray to the fourth power and replaces the textbox's values with the newArray
function ToTheFourth(){
    newArray = origArray.map(fourthIt);
    document.getElementById("tb1").value = newArray[0];
    document.getElementById("tb2").value = newArray[1];
    document.getElementById("tb3").value = newArray[2];
}

//basic "to the fourth" function using the Math library's Math.pow function
function fourthIt(element){
    return Math.pow(element, 4);
}
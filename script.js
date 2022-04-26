function firstBtn(){
    // document.getElementById("demo").innerHTML = "btn1 pressed";
// }


// document.addEventListener('DOMContentLoaded', DOMprog);
// document.body.onload = ()=>{
//     console.log('body onload');
// }

// function DOMprog(){
//     console.log('DOM ready');
//     let main = document.querySelector('.output');
//     main.textContent = 'Hello World';
// }

// let origArray = [2,3,4];

// document.addEventListener('DOMContentLoaded', DOMprog);

// function DOMprog(){
//     document.getElementById("bt1") = origArray[0];
//     document.getElementById("bt2") = origArray[1];
//     document.getElementById("bt3") = origArray[2];

//     document.getElementById("bt2").addEventListener("click", x);
//     document.getElementById("bt3").addEventListener("click", callBtn3);
// }

// document.addEventListener('click', () => document.getElementById("demo2").innerHTML = "btn2 pressed"


// let x = function();
// function callBtn3(){

// }


// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     document.getElementById(bt1) = origArray[0];
//     document.getElementById(bt2) = origArray[1];
//     document.getElementById(bt3) = origArray[2];
// });

let message = "nice!";

document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById("button1").addEventListener("click", function(){
        document.getElementById("txt1").value = "success";
    });

    document.getElementById("button2").addEventListener("click", function(){
        DoSomething();
    });

    document.getElementById("button3").addEventListener("click", function(){
        document.getElementById("txt1").value = message;
    });
});

function doSomething(){
    console.log("doing something");
}
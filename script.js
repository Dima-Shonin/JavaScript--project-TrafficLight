const bgElements = document.querySelectorAll('div');
var element_yellow = document.getElementById('yellow');
var element_green= document.getElementById('green');
var element_red= document.getElementById('red');

for (const elem of bgElements) {   

    if(elem.id =='yellow')
    {
        elem.addEventListener('click', myFunctionyellow)
    }

    if(elem.id =='green')
    {
        elem.addEventListener('click', myFunctionGreen)
    }

    if(elem.id =='red')
    {
        elem.addEventListener('click', myFunctionRed)
    }
   
 }


function myFunctionyellow() {    
   
    element_yellow.classList.toggle("yellow");
    element_green.classList.remove('green');
    element_red.classList.remove("red");
}

function myFunctionGreen() {    
   
    element_green.classList.toggle("green");
    element_yellow.classList.remove("yellow");
    element_red.classList.remove("red");
}


function myFunctionRed() {    
    element_red.classList.toggle("red");
    element_green.classList.remove("green");
    element_yellow.classList.remove("yellow");
}


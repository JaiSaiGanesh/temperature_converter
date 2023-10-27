let celsiusElement= document.getElementById("celsius");
let resultElement= document.getElementById("result");

function convertToFahrenheit(){
    let inputValue = parseFloat(celsiusElement.value);
    if (isNaN(inputValue)){
        resultElement.value="Invalid Input!";
        }
    else{
        let fahrenheit=(9/5)*inputValue+32;
        resultElement.value= "Temperature in Fahrenheit: "+fahrenheit+"°F";
        }
}

 
    

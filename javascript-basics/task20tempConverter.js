/*
Create functions to convert temperature from Celsius to Fahrenheit and vice versa.
Ask the user which conversion they'd like to do, take the input temperature, and display the result.
*/

function chooseTemp(){
    let tempType = prompt('What temperature do you have: C or F?').toUpperCase();
    let temperature = Number(prompt('What is the temperature?'));
    if(tempType == 'C'){
        showFahrenheit(temperature);
    } else if(tempType == 'F'){
        showCelsius(temperature);
    } else {
        console.log('Invalid temperature. Start again.');
        chooseTemp();
    }
}

function showFahrenheit(temperature){
    let convertedTemp = ((temperature * 9/5) + 32).toFixed(1);
    console.log( convertedTemp + 'F');
}

function showCelsius(temperature){
    let convertedTemp = ((temperature - 32) * 5/9).toFixed(1);
    console.log( convertedTemp + 'C');
}

chooseTemp();
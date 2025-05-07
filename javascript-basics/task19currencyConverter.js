/*
Task 19 - Currency Converter (optional)

Create a simple currency converter function that converts USD to EUR or EUR to USD using fixed rates (e.g., 1 USD = 0.92 EUR). 
Let the user pick the direction of conversion and the amount.
*/

function chooseCurrency(){
    let currency = prompt('What currency do you have: EUR or USD?').toUpperCase();
    let amount = Number(prompt('How many ' + currency + ' do you want to convert?'))
    if(currency == 'EUR'){
        showUSD(amount);
    } else if(currency == 'USD'){
        showEUR(amount);
    } else {
        console.log('Invalid currency. Start again.');
        chooseCurrency();
    }
}

function showEUR(amount){
    let total = (amount * 0.92).toFixed(2);
    console.log('Total: ' + total + ' EUR');
}

function showUSD(amount){
    let total = (amount * (1 / 0.92)).toFixed(2);
    console.log('Total: ' + total + ' USD');
}

chooseCurrency();
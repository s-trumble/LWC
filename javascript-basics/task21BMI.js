function heightAndWeight(){
    let userHeight = Number(prompt('Enter your height in metres: '));
    let userWeight = Number(prompt('Enter your weight in kg: '));
    calculateBMI(userHeight, userWeight)
}

function calculateBMI(height, weight){
    let bmi = (weight / (height * height)).toFixed(1);
    
    let bmiClassifcation;
    if (bmi < 18.5) {
        bmiClassifcation = 'Underweight';
    } else if (bmi < 25) {
        bmiClassifcation = 'Normal';
    } else if (bmi < 30) {
        bmiClassifcation = 'Overweight';
    } else {
        bmiClassifcation = 'Obese';
    }

    console.log(`Your BMI is ${bmi} which is ${bmiClassifcation}`);
}
heightAndWeight();
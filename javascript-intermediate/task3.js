//Create a loop that finds the largest number in this array:

let scores = [12, 55, 3, 98, 42, 77];

let findLargest = (numbers) =>{
    let largestNumber = numbers[0];
    for(let score of scores){
        if(score > largestNumber){
            largestNumber = Number(score);
            console.log(largestNumber)
        }
    }
    console.log(`Final ${largestNumber}`);
    return largestNumber;
}

findLargest(scores);
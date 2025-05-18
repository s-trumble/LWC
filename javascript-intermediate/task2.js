//Given this array:
//let mixed = [0, "hello", false, 42, "", null, "world", undefined];
//Use a loop to create a new array that only contains the truthy values.

let mixed = [0, "hello", false, 42, "", null, "world", undefined];

let findTruthy = (mixedArray) => {
    let truthyArray = [];
    for(let item of mixedArray){
        if(item){
            truthyArray.push(item);
        }
    }
    console.log(truthyArray);
    return truthyArray;
}

findTruthy(mixed);


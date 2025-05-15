//reverse array without .reverse()

let nums = [1, 2, 3, 4, 5];
let reverseTheNums = (numbers) => {
    let reverseNums = [];
    for(let i = nums.length - 1; i >= 0; i--){
        reverseNums.push(nums[i]);
        console.log(`in loop: ${reverseNums}`);
    }
    console.log(`Final: ${reverseNums}`);
    return reverseNums;
}

reverseTheNums(nums);
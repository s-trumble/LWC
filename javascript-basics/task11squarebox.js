/* square box
*/
squareBox();
function squareBox(){
    let userNumber = Number(prompt('Enter size: '));

    for(let i = 1; i <= userNumber; i++){
        console.log('#'.repeat(userNumber));
    }
}

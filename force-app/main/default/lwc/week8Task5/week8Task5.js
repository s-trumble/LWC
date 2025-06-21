import { LightningElement } from 'lwc';

export default class Week8Task5 extends LightningElement {
    firstNumber = 0;
    secondNUmber = 0;

    get sum() {
        const total = Number(this.firstNumber) + Number(this.secondNUmber); 
        return total.toFixed(2);
    }
    get multiply(){
        const total = Number(this.firstNumber) * Number(this.secondNUmber); 
        return total.toFixed(2);
    }
    get subtract(){
        const total = Number(this.firstNumber) - Number(this.secondNUmber); 
        return total.toFixed(2);
    }
    get divide(){
        const total = Number(this.firstNumber) / Number(this.secondNUmber); 
        return total.toFixed(2);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        if(name === 'numberOne'){
            this.firstNumber = value;
        } else if(name === 'numberTwo'){
            this.secondNUmber = value;
        }
    }
}
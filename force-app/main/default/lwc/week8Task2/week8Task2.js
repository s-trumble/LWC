import { LightningElement } from 'lwc';

export default class Week8Task2 extends LightningElement {
    clickCount = 0;

    handleClick(){
        console.log(`Button Clicked`);
        this.clickCount++;
    }
}
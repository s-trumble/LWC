import { LightningElement } from 'lwc';

export default class Week8Task4 extends LightningElement {
    disabled = false;
    labelName = 'Click me only once!'

    handleClick(){
        this.disabled = true;
        this.labelName = 'Cannot click me again :(';
    }
}
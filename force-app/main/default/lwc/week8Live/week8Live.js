import { LightningElement } from 'lwc';

export default class Week8Live extends LightningElement {
    clickCount = 0;
    name = '';
    
    handleClick(event) {
        //console.log('Button clicked!', event);
        this.clickCount++;
    }
    resetCount(event) {
        this.clickCount = 0;
    }
    
    handleNameChange(event) {
        console.log('Name changed!', event);
        this.name = event.detail.value;
    }
}
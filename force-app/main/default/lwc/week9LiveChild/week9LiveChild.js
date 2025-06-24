import { LightningElement } from 'lwc';

export default class Week9LiveChild extends LightningElement {
    handleClick() {
        const myEvent = new CustomEvent('hello', {
            detail: {
                value: "Alex"
            }
        });
        this.dispatchEvent(myEvent);
    }
}
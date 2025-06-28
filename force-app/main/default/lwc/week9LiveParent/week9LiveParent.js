import { LightningElement } from 'lwc';

export default class Week9LiveParent extends LightningElement {
    name = '';
    handleHello(event) {
        this.name = event.detail.value;
    }
}
import { LightningElement } from 'lwc';

export default class Week8Task3 extends LightningElement {
    name = '';

    handleChange(event){
        console.log('User\'s name: ', event);
        this.name = event.detail.value;
    }
}
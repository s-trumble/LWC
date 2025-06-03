import { LightningElement } from 'lwc';

export default class Week6live extends LightningElement {
    showSpinner = true;

    people = [
        {id: 1, name: 'Alice', age: 30},
        {id: 2, name: 'Bob', age: 25},
        {id: 3, name: 'Chris', age: 10}
    ]
}
import { LightningElement, api } from 'lwc';

export default class Week6live extends LightningElement {
    
    @api recordId;
    @api objectApiName;
    showSpinner = true;

    people = [
        {id: 1, name: 'Alice', age: 30},
        {id: 2, name: 'Bob', age: 25},
        {id: 3, name: 'Chris', age: 10}
    ]

    
    columns = [
        {label: 'Name', fieldName: 'name', type: 'text'},
        {label: 'Age', fieldName: 'age', type: 'number'}
    ]

    fields = ['Name', 'AnnualRevenue'];
}
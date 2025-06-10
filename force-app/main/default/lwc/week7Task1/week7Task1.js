import { LightningElement, api } from 'lwc';
import getAllContacts from '@salesforce/apex/Week7Task1Controller.getAllContacts';

export default class Week7Task1 extends LightningElement {
    @api recordId;

    columns =  [
        {label: 'First Name', fieldName: 'FirstName'},
        {label: 'Last Name', fieldName: 'LastName'},
        {label: 'Email', fieldName: 'Email'},
        {label: 'Phone', fieldName: 'Phone'}
    ];

    contacts = [];

    connectedCallback() {
        getAllContacts().then(result => {
            this.contacts = result;
        });
    }
}
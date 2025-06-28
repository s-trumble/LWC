import { LightningElement, api } from 'lwc';
import queryContacts from '@salesforce/apex/week9Controller.queryContacts';

export default class Week9Parent extends LightningElement {
    @api recordId;
    contacts = [];

    columns = [
        {label: 'First Name', fieldName: 'FirstName', type: 'text'},
        {label: 'Last Name', fieldName: 'LastName', type: 'text'},
        {label: 'Phone', fieldName: 'Phone', type: 'phone'},
        {label: 'Email', fieldName: 'Email', type: 'email'}
        ];
    
    connectedCallback() {
        queryContacts({accountId : this.recordId})
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.log('Error fetching contacts: ', error);
            });
    }

    handleNewContact(event) {
        const newContact = event.detail;
        this.contacts = [...this.contacts, newContact];
    }
}
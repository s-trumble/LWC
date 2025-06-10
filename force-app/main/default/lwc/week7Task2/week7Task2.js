import { LightningElement, api, wire } from 'lwc';

import getAllUsers from '@salesforce/apex/Week7Task2Controller.getAllUsers';

export default class Week7Task2 extends LightningElement {
    columns =  [
        {label: 'First Name', fieldName: 'FirstName'},
        {label: 'Last Name', fieldName: 'LastName'},
        {label: 'Email', fieldName: 'Email'},
        {label: 'Phone', fieldName: 'Phone'}
    ];

    users = [];

    @wire(getAllUsers)
    wiredUsers({error, data}) {
        if(data) {
            this.users = data;
        } else {
            console.error('Error fetching users: ' + error);
        }
    }
}
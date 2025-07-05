import { LightningElement, api } from 'lwc';
import queryContacts from '@salesforce/apex/week9Controller.queryContacts';
import deleteContact from '@salesforce/apex/week9Controller.deleteContact';
import WarningAction from "c/warningAction";

export default class Week9Parent extends LightningElement {
    @api recordId;
    contacts = [];
    contactIdToDelete = null;

    columns = [
        {label: 'First Name', fieldName: 'FirstName', type: 'text'},
        {label: 'Last Name', fieldName: 'LastName', type: 'text'},
        {label: 'Phone', fieldName: 'Phone', type: 'phone'},
        {label: 'Email', fieldName: 'Email', type: 'email'},
        {
            label: 'Actions',
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                name: 'delete',
                title: 'Delete Contact',
                disabled: false,
                value: 'delete',
                iconName: 'utility:delete',
                iconPosition: 'left',
                variant: 'destructive'
            }
        }
        ];
    
    connectedCallback() {
        this.loadContacts();
    }
    loadContacts() {
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

    handleConfirmDelete(event) {
        this.contactIdToDelete = event.detail.row.Id; // Store the Id
        WarningAction.open({
            contactName: event.detail.row.FirstName + ' ' + event.detail.row.LastName
        }).then((result) => {
            if(result === 'okay'){
                this.deleteContact();
            } else {
                console.log('Delete action was dismissed.');
            }
            this.contactIdToDelete = null; // Clear after action
        });
    }
    deleteContact() {
        deleteContact({contactId : this.contactIdToDelete})
            .then(() => {
                this.loadContacts();
                console.log('Contact deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting contact: ', error);
            });
    }
}
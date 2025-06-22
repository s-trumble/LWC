import { LightningElement, api } from 'lwc';
import queryContacts from '@salesforce/apex/week8DatatableController.queryContacts';
import saveContacts from '@salesforce/apex/week8DatatableController.saveContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HelloWorld extends LightningElement {
    @api recordId; 
    contacts = [];
    draftValues = [];

    columns = [
        { label: 'First Name', fieldName: 'FirstName', editable : 'true'},
        { label: 'Last Name', fieldName: 'LastName', editable : 'true'},
        { label: 'Email', fieldName: 'Email', type: 'email', editable : 'true'},
        { label: 'Phone', fieldName: 'Phone', type: 'phone', editable : 'true'}
    ];

    connectedCallback() {
        queryContacts({accountId: this.recordId})
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }

    handleSave(event) {
        this.draftValues = event.detail.draftValues;

        saveContacts({contacts: this.draftValues})
            .then(result => {
                this.contacts = result;
                this.draftValues = [];

                this.showToast('Success!', 'Everything saved.', 'success')
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }

    handleCancel(event) {
        this.draftValues = [];
    }

    handleAddContact(event) {
        
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });

        this.dispatchEvent(evt);
    }
}
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
        this.loadContacts();
    }

    loadContacts(){
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
        
        const newRecords = [];
        const updatedRecords = [];

        this.draftValues.forEach(draft => {
            if (draft.Id.startsWith('new-')) { // Check for our temporary ID to separate new vs old records
                draft.Id = null;
                newRecords.push({ ...draft, AccountId: this.recordId }); // Add AccountId for new contacts. draftvalue will not have this value by default
            } else {
                updatedRecords.push(draft);
            }
        });

        const combinedRecords = [...newRecords, ...updatedRecords];

        saveContacts({contacts: combinedRecords})
            .then(result => {
                this.contacts = result;
                this.draftValues = [];
                this.loadContacts();

                this.showToast('Success!', 'Everything saved.', 'success')
            })
            .catch(error => {
                console.error('Error saving contacts:', error);
                this.showToast('Error', 'Did not save.', 'error')
            });
    }

    handleCancel(event) {
        this.draftValues = [];
    }

    handleAddContact(event) {
        const tempId = 'new-' + Date.now();
        let newContact = {Id: tempId, FirstName: '', LastName: '', Email: '', Phone: ''};
        this.contacts = [...this.contacts, newContact];
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
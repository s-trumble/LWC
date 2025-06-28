import { LightningElement, api } from 'lwc';
import saveContact from '@salesforce/apex/week9Controller.saveContact';

export default class Week9Child extends LightningElement {
    @api accountId;
    firstName = '';
    lastName = '';
    phone = '';
    email = '';
    savingContacts = false;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }
    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }
    handlePhoneChange(event) {
        this.phone = event.target.value;
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    

    handleNewContact(event){
        this.savingContacts = true;
        saveContact({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            accountId: this.accountId
            
        }).then(() => {
            this.dispatchEvent(
                new CustomEvent('newcontact', {
                    detail: {
                        FirstName: this.firstName,
                        LastName: this.lastName,
                        Email: this.email,
                        Phone: this.phone
                    }
                }) 
            );

            this.clearFields();
            this.savingContacts=false;
        }).catch(error => {
            console.error('Error saving contact: ', error);
            this.savingContacts=false;
        });   
    }

    clearFields() {
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.email = '';;
    }
    
}
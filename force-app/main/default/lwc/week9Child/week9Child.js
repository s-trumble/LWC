import { LightningElement, api } from 'lwc';
import saveContact from '@salesforce/apex/week9Controller.saveContact';

export default class Week9Child extends LightningElement {
    @api accountId;
    firstName = '';
    lastName = '';
    phone = '';
    email = '';

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
        }).catch(error => {
            console.error('Error saving contact: ', error);
        });   
    }

    clearFields() {
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.email = '';
        this.accountId = '';
    }
    
}
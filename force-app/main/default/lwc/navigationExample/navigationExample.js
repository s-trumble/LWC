import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getMostRecentlyModifiedAccount from '@salesforce/apex/NavigationExampleController.getMostRecentlyModifiedAccount';

export default class NavigationExample extends NavigationMixin(LightningElement) {
    navigateToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }

    navigateToGoogle() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com'
            }
        });
    }

    navigateToMostRecentlyyModifiedAccount() {
        getMostRecentlyModifiedAccount()
            .then(accountId => {
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: accountId,
                        objectApiName: 'Account',
                        actionName: 'view'
                    }
                });
            })
            .catch(error =>  {
                console.error('Error getting most recently modified account',error);
            });
    }
}
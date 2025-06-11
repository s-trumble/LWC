import { LightningElement } from 'lwc';
import getModifiedAccounts from '@salesforce/apex/Week7Task5Controller.getModifiedAccounts';

export default class Week7Task5 extends LightningElement {
    accounts = [];

    columns = [
        {
            label: 'Name', 
            fieldName: 'url', 
            type: 'url',
            typeAttributes: {
                label: {fieldName: 'Name'},
                target: '_blank'
            }
        },
        {label: 'Last Modified Date', fieldName: 'LastModifiedDate', type: 'date'}
    ];

    connectedCallback(){
        getModifiedAccounts()
            .then(result => {
                this.accounts = result.map(accsWithURL => ({
                    ...accsWithURL,
                    url: `/${accsWithURL.Id}`,
                }));
            })
            .catch(error => {
                console.log('Error fetching accounts: ' + error);
            });
    }
}
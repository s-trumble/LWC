import { LightningElement } from 'lwc';
import getCases from '@salesforce/apex/Week7Task7Controller.getCases';

export default class Week7Task7 extends LightningElement {
    cases = [];

    columns = [
        {
            label: 'Case Number', 
            fieldName: 'clickableURL',
            type: 'url',
            typeAttributes: { 
                label: { fieldName: 'CaseNumber'}, 
                target: '_blank'
            }
        },
        {label: 'Subject', fieldName: 'Subject'},
        //cannot use dot notation
        {label: 'Account Name', fieldName: 'accountName'},
        {label: 'Owner Name', fieldName:'ownerName'},
        {label: 'Created Date', fieldName: 'CreatedDate'}
    ];

    connectedCallback(){
        getCases()
            .then(result => {
                this.cases = result.map(item => ({
                    ...item,
                    accountName: item.Account.Name,
                    ownerName: item.Owner.Name,
                    clickableURL: `/${item.Id}`
                }));
            })
            .catch(error => {
                console.log(error)
            });
    }
}
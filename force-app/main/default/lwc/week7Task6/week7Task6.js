import { LightningElement } from 'lwc';
import getNewCasesOppsLeads from '@salesforce/apex/Week7Task6Controller.getNewCasesOppsLeads';

export default class Week7Task6 extends LightningElement {

    casesOppsLeadsWrapperList = [];

    columns = [
        {label: 'Record Id', fieldName: 'recordId', type: 'text'},
        {label: 'Object', fieldName: 'objectType', type: 'text'},
        {label: 'Name', fieldName: 'name', type: 'text'},
        {label: 'Created Date', fieldName: 'createdDate', type: 'date'},
        {label: 'Owner Name', fieldName: 'ownerName', type: 'text'}
    ];

    connectedCallback() {
        getNewCasesOppsLeads()
            .then(result => {
                this.casesOppsLeadsWrapperList = result;
            })
            .catch(error => {
                console.log('error');
            })
    }
}
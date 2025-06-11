import { LightningElement, api } from 'lwc';
import getAllOpportunityLineItems from '@salesforce/apex/Week7Task3Controller.getAllOpportunityLineItems';

export default class Week7Task3 extends LightningElement {
    @api recordId; //Opportunity Id

    columns = [
        {label: 'Product Name', fieldName: 'Name', type: 'text'},
        {label: 'Quantity', fieldName: 'Quantity', type: 'number'},
        {label: 'Sales Price', fieldName: 'SalesPrice', type: 'currency'},
        {label: 'Unit Price', fieldName: 'UnitPrice', type: 'currency'}
    ];

    olis = [];
    
        connectedCallback() {
            getAllOpportunityLineItems({opportunityId: this.recordId})
                .then(result => {
                    this.olis = result;
                })
                .catch(error => {
                    console.log('Error fetching Opportunity Line Items: ' + error);
                });
        }
}
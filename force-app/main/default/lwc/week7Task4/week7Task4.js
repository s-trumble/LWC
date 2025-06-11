import { LightningElement } from 'lwc';
import getOpenOpps from '@salesforce/apex/Week7Task4Controller.getOpenOpps';

export default class Week7Task4 extends LightningElement {
    opps = [];

    columns = [
        {label: 'Name', fieldName: 'Name', type: 'text'},
        {label: 'Amount', fieldName: 'Amount', type: 'currency'},
        {label: 'Close Date', fieldName: 'CloseDate', type: 'date'},
        {label: 'Stage', fieldName: 'StageName', type: 'text'}
    ];

    connectedCallback(){
        getOpenOpps()
            .then(result => {
                this.opps = result;
            })
            .catch(error => {
                console.log('Error fetching Opportunities: ' + error);
            });
    }
}
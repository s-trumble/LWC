import { LightningElement } from 'lwc';
import getNewLeads from '@salesforce/apex/Week8Task1Controller.getNewLeads';
import getClosedDeals from '@salesforce/apex/Week8Task1Controller.getClosedDeals';
import getPipelineValue from '@salesforce/apex/Week8Task1Controller.getPipelineValue';
import getOpenCases from '@salesforce/apex/Week8Task1Controller.getOpenCases';

export default class Week8Task1 extends LightningElement {

    newLeads = 0;
    closedDeals = 0;
    pipelineValue = 0.0;
    openCases = 0;

    connectedCallback() {
        getNewLeads()
            .then(result => {
                this.newLeads = result; 
            })
            .catch(error => {
                console.log(`getNewLeads error: ${error}`)
            });
        getClosedDeals()
            .then(result => {
                this.closedDeals = result;
            })
            .catch(error => {
                console.log(`getClosedDeals error: ${error}`)
            });
        getPipelineValue()
            .then(result => {
                this.pipelineValue = result;
            })
            .catch(error => {
                console.log(`getPipelineValue error: ${error}`)
            });
        getOpenCases()
            .then(result => {
                this.openCases = result;
            })
            .catch(error => {
                console.log(`getOpenCases error: ${error}`)
            });

    }
}
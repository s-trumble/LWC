import { LightningElement, api } from 'lwc';
import getCaseComments from '@salesforce/apex/caseCommentController.getCaseComments';

export default class CaseCommentTable extends LightningElement {
    @api recordId;

    caseComments = [];

    columns = [
        {label: 'Comment', fieldName: 'Comment__c', type: 'text'},
        {label: 'Category', fieldName: 'Category__c', type: 'text'},
        {label: 'Visibility', fieldName: 'Visibility__c', type: 'text'},
        {label: 'Created Date', fieldName: 'CreatedDate', type: 'datetime'},
        {label:'Created By', fieldName: 'createdByName', type: 'text'}
        ];
    
    connectedCallback(){
        console.log('recordId: ', this.recordId);

        getCaseComments({caseId: this.recordId})
            .then(result => {
                this.caseComments = result.map(row => ({
                    ...row,
                    createdByName: row.CreatedBy.Name
                }));
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleNewCaseComment(event) {
        setTimeout(() => {
            getCaseComments({caseId: this.recordId})
            .then(result => {
                this.caseComments = result.map(row => ({
                    ...row,
                    createdByName: row.CreatedBy.Name
                }));
            })
            .catch(error => {
                console.log(error);
            });
        },500);
            
    }
}
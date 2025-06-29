import { LightningElement, api } from 'lwc';
import saveCaseComment from '@salesforce/apex/caseCommentController.saveCaseComment';

export default class CaseCommentForm extends LightningElement {
    @api caseId;
    comment = '';
    category = '';
    visibility = '';

    get disableButton() {
        return !(this.comment && this.category  && this.visibility);
    }

    handleCommentChange(event) {
        this.comment = event.target.value;
    }
    handleCategoryChange(event) {
        this.category = event.target.value;
    }
    handleVisibilityChange(event) {
        this.visibility = event.target.value;
    }

    handleAddComment(event) {
        saveCaseComment({
            caseId: this.caseId,
            comment: this.comment,
            category: this.category,
            visibility: this.visibility
        })
            .then(newComment => {
                this.dispatchEvent(
                    new CustomEvent('newcasecomment', {
                        detail: newComment
                    })
                );
                const inputFields = this.template.querySelectorAll(
                    'lightning-input-field'
                );
                if (inputFields) {
                    inputFields.forEach(field => {
                        field.reset();
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });            
    }
}
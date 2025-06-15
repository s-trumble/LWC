import { LightningElement, api, wire } from 'lwc';
import getCurrentCategory from '@salesforce/apex/Week7Task8Controller.getCurrentCategory';
import updateCategory from '@salesforce/apex/Week7Task8Controller.updateCategory';
import CATEGORY_FIELD from '@salesforce/schema/Software_License__c.Category__c';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class Week7Task8 extends LightningElement {
    @api recordId;

    picklistOptions = [];
    selectedCategory = '';

    @wire(getObjectInfo, {objectApiName: 'Software_License__c'})
    objectInfo;

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:  CATEGORY_FIELD})
    wiredPicklistValues({data, error}){
        if(data) {
            this.picklistOptions = data.values;
        } else if (error) {
            console.log(`Error: ${error}`);
        }
    }

    connectedCallback(){
        getCurrentCategory({softwareId: this.recordId})
            .then(result => {
                this.selectedCategory = result;
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange(event){
        this.selectedCategory = event.target.value;
        updateCategory({softwareId: this.recordId, category: this.selectedCategory});
    }
}
import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';

export default class Week6Task7 extends LightningElement {
    @api recordId;
    @api objectApiName;

    nameField = NAME_FIELD;
    closeDateField = CLOSEDATE_FIELD;
    stageField = STAGE_FIELD;
    amountField = AMOUNT_FIELD;
    typeField = TYPE_FIELD;    

}
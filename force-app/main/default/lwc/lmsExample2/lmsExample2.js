import { LightningElement, wire} from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';

export default class LmsExample2 extends LightningElement {
    @wire(MessageContext)
    messageContext;
    
    message = '';

    connectedCallback() {
        subscribe(
            this.messageContext,
            MY_MESSAGE_CHANNEL,
            (result) => {
                this.message = result.value;
            }
        );
    }
}
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c'

export default class LmsExample1 extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick(event){
        console.log('Button clicked', event);
        publish(this.messageContext, MY_MESSAGE_CHANNEL, {
            value: 'Hello from LWC Example 1'
        });
    }
}
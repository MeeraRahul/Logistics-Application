import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_OBJECT from '@salesforce/schema/customer__c';
import NAME_FIELD from '@salesforce/schema/customer__c.Name';
import ADDRESS_FIELD from '@salesforce/schema/customer__c.Address__c';
import LOCATION_FIELD from '@salesforce/schema/customer__c.Location__c';
import PHONE_FIELD from '@salesforce/schema/customer__c.Phone_Number__c';
import EMAIL_FIELD from '@salesforce/schema/customer__c.Email__c';
import PRODUCT_FIELD from '@salesforce/schema/customer__c.Product_Name__c';






export default class AccountCreator extends LightningElement {
    objectApiName = CUSTOMER_OBJECT;
    fields = [NAME_FIELD, ADDRESS_FIELD,LOCATION_FIELD, PHONE_FIELD,EMAIL_FIELD,PRODUCT_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}
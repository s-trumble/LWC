import { LightningElement } from 'lwc';

export default class Week5task3 extends LightningElement {
    leads = {
        title: 'New Leads',
        value: 245,
        subttitle: 'This month'
    }
    deals = {
        title: 'Closed Deals',
        value: 78,
        subttitle: 'Q2 Total'
    }
    pipeline = {
        title: 'Pipeline Value',
        value: 120000,
        subttitle: 'Current Quarter'
            }
    cases = {
        title: 'Open Cases',
        value: 32,
        subttitle: 'Pending Resolution'
    }
}
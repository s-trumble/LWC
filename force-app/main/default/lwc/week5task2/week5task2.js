import { LightningElement } from 'lwc';

export default class Week5task2 extends LightningElement {
    currentMonth;
    currentYear;
    expense1;
    expense2;
    expense3;
    expense4;
    expense5;
    expense6;
    expense7;

    constructor() {
        super();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const today = new Date();
        this.currentMonth = monthNames[today.getMonth()];
        this.currentYear = today.getFullYear();

        this.expense1 = {
            name: 'Groceries', 
            category: 'Food', 
            amount: 700, 
            date: '15 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense2 = {
            name: 'Petrol', 
            category: 'Transportation', 
            amount: 100, 
            date: '12 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense3 = {
            name: 'Mortgage', 
            category: 'House', 
            amount: 2000, 
            date: '21 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense4 = {
            name: 'Water', 
            category: 'House', 
            amount: 75, 
            date: '19 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense5 = {
            name: 'Eating Out', 
            category: 'Food', 
            amount: 45, 
            date: '18 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense6 = {
            name: 'Internet', 
            category: 'Entertainment', 
            amount: 100, 
            date: '12 ' + this.currentMonth + ' ' + this.currentYear
        };
        this.expense7 = {
            name: 'Streaming', 
            category: 'Entertainment', 
            amount: 30,
            date: '12 ' + this.currentMonth + ' ' + this.currentYear
        };
    }
}
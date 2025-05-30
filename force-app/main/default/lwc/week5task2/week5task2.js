import { LightningElement } from 'lwc';

export default class Week5task2 extends LightningElement {
    currentMonth = Text(Date.today().Month());
    currentYear = Text(Date.today().Year());
    
    expense1 = {
        name: 'Grocery Groceries', 
        category: 'Food', 
        amount: 700, 
        date: '15 ' + this.currentMonth + ' ' + this.currentYear
    };
    expense2 = {
        name: 'Petrol', 
        category: 'Transportation', 
        amount: 100, 
        date: '12 ' + this.currentMonth + ' ' + this.currentYear
    };

    expense3 = {
        name: 'Mortgage', 
        category: 'House', 
        amount: 2000, 
        date: '21 ' + this.currentMonth + ' ' + this.currentYearexport
    };
    expense4 = {
        name: 'Water', 
        category: 'House', 
        amount: 75, 
        date: '19 ' + this.currentMonth + ' ' + this.currentYear
    };
    expense5 = {
        name: 'Eating Out', 
        category: 'Food', 
        amount: 45, 
        date: '18 ' + this.currentMonth + ' ' + this.currentYear
    };
    expense6 = {
            name: 'Internet', 
        category: 'Entertainment', 
        amount: 100, 
        date: '12 ' + this.currentMonth + ' ' + this.currentYear
    };
    expense7 = {
        name: 'Streaming', 
        category: 'Entertainment', 
        amount: 30,
        date: '12 ' + this.currentMonth + ' ' + this.currentYear
    }
}
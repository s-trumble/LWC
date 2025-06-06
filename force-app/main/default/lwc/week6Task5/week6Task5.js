import { LightningElement } from 'lwc';

export default class Week6Task5 extends LightningElement {
    monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    expenses;
    columns = [
        {label: 'Expense Name', fieldName: 'name', type: 'text'},
        {label: 'Category', fieldName: 'category', type: 'text'},
        {label: 'Amount', fieldName: 'amount', type: 'currency'},
        {label: 'Date', fieldName: 'date', type: 'date'}
    ];

    constructor() {
        super();
        const today = new Date();
        const currentMonth = this.monthNames[today.getMonth()];
        const currentYear = today.getFullYear();
        this.expenses = [
            {
                name: 'Groceries', 
                category: 'Food', 
                amount: 700, 
                date: '15 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Petrol', 
                category: 'Transportation', 
                amount: 100, 
                date: '12 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Mortgage', 
                category: 'House', 
                amount: 2000, 
                date: '21 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Water', 
                category: 'House', 
                amount: 75, 
                date: '19 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Eating Out', 
                category: 'Food', 
                amount: 45, 
                date: '18 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Internet', 
                category: 'Entertainment', 
                amount: 100, 
                date: '12 ' + currentMonth + ' ' + currentYear
            },
            {
                name: 'Streaming', 
                category: 'Entertainment', 
                amount: 30,
                date: '12 ' + currentMonth + ' ' + currentYear
            }
        ];
    }
}
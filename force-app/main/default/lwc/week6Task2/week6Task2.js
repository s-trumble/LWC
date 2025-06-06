import { LightningElement } from 'lwc';

export default class Week6Task2 extends LightningElement {
    currentMonth;
    currentYear;
    expenses;
    columns;
    
    

    constructor() {
        super();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const today = new Date();
        this.currentMonth = monthNames[today.getMonth()];
        this.currentYear = today.getFullYear();

        this.expenses = [
            {
                name: 'Groceries', 
                category: 'Food', 
                amount: 700, 
                date: '15 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Petrol', 
                category: 'Transportation', 
                amount: 100, 
                date: '12 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Mortgage', 
                category: 'House', 
                amount: 2000, 
                date: '21 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Water', 
                category: 'House', 
                amount: 75, 
                date: '19 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Eating Out', 
                category: 'Food', 
                amount: 45, 
                date: '18 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Internet', 
                category: 'Entertainment', 
                amount: 100, 
                date: '12 ' + this.currentMonth + ' ' + this.currentYear
            },
            {
                name: 'Streaming', 
                category: 'Entertainment', 
                amount: 30,
                date: '12 ' + this.currentMonth + ' ' + this.currentYear
            }
        ];

        this.columns = [
            {label: 'Expense Name', fieldName: 'name', type: 'text'},
            {label: 'Category', fieldName: 'category', type: 'text'},
            {label: 'Amount', fieldName: 'amount', type: 'currency'},
            {label: 'Date', fieldName: 'date', type: 'date'}
        ];

         
    };

    get expensesWithClass() {
            return this.expenses.map(expense => ({
                ...expense,
                categoryClass: this.getCategoryClass(expense.category)
            }));
        }; 

    getCategoryClass(category) {
            return category ? category.toLowerCase() : '';
        }
}
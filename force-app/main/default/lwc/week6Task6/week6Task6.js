import { LightningElement } from 'lwc';

export default class Week6Task6 extends LightningElement {
    contacts = [
        {
            firstName: 'Arthur',
            lastName: 'Arthurson',
            email: 'arthur@gmail.com',
            phone: 12345,
            id: 1
        },
        {
            firstName: 'Bradley',
            lastName: 'Bradleyson',
            email: 'bradley@gmail.com',
            phone: 23456,
            id: 2
        },
        {
            firstName: 'Chris',
            lastName: 'Christopher',
            email: 'chris@gmail.com',
            phone: 34567,
            id: 3
        },
        {
            firstName: 'David',
            lastName: 'Davidson',
            email: 'David@gmail.com',
            phone: 45678,
            id: 4
        }
    ];

    columns = [
        {
            label: 'First Name',
            fieldName: 'firstName',            
            type: 'text'
        },
        {
            label: 'Last Name',
            fieldName: 'lastName',            
            type: 'text'
        },
        {
            label: 'Email',
            fieldName: 'email',            
            type: 'email'
        },
        {
            label: 'Phone',
            fieldName: 'phone',
            type: 'phone'
        }
    ];
}
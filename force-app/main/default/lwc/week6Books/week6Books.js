import { LightningElement, api } from 'lwc';

export default class Week6Books extends LightningElement {
    books = [
        {id: 1, name: 'Alice in Wonderland', author: 'Igor', rating: 5},
        {id: 2, name: 'The Lord of the Rings', author: 'Tolkein', rating: 10},
        {id: 3, name: 'Harry Potter', author: 'Rowling', rating: 9}
    ];

    columns = [
        {label: 'Name', fieldName: 'name', type: 'text'},
        {label: 'Author', fieldName: 'author', type: 'text'},
        {
            label: 'Rating', 
            fieldName: 'rating', 
            type: 'number', 
            cellAttributes: { 
                alignment: 'center' 
            }
        }
    ];
}
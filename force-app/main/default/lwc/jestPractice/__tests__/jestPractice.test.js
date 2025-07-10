import { createElement } from 'lwc';
import JestPractice from 'c/jestPractice';

describe('c-jest-practice tests', () => {
    //if do this way then do not need to redefine const in each test
    //let element;
    beforeEach(() => {
        
        const element = createElement('c-jest-practice', {
            is: JestPractice
        });
        ///page is empty so need to append to the document body
        document.body.appendChild(element);

    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });


    test('first test', () => {
        const element = document.querySelector('c-jest-practice');
        const paragraph = element.shadowRoot.querySelector('p');
        expect(paragraph.textContent).toBe('Hello, Jest!')
    });

    test('button click changes message', () => {
        const element = document.querySelector('c-jest-practice');
        const button = element.shadowRoot.querySelector('lightning-button');
        button.dispatchEvent(new CustomEvent('click'));

        return Promise.resolve().then(() => {
            const paragraph = element.shadowRoot.querySelector('p');
            expect(paragraph.textContent).toBe('Button clicked');
        });
    });
});
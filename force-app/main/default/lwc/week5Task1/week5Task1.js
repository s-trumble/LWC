import { LightningElement } from 'lwc';

export default class Week5Task1 extends LightningElement {
    opp1 = {
        name: 'Opp1',
        stage: 'Prospecting',
        amount: 100000,
        closeDate: '2025-05-01'
    }

    opp2 = {
        name: 'Opp2',
        stage: 'Qualification',
        amount: 200000,
        closeDate: '2025-05-02'
    }

    opp3 = {
        name: 'Opp3',
        stage: 'Needs Analysis',
        amount: 300000,
        closeDate: '2025-05-03'
    }

    opp4 = {
        name: 'Opp4',
        stage: 'Closed Won',
        amount: 400000,
        closeDate: '2025-05-04'
    }

    opp5 = {
        name: 'Opp5',
        stage: 'Closed Lost',
        amount: 500000,
        closeDate: '2025-05-05'
    }
}

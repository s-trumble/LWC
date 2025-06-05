import { LightningElement } from 'lwc';

export default class Week6Task1 extends LightningElement {
    opportunities = [ 
        {
        name: 'Opp1',
        stage: 'Prospecting',
        amount: 100000,
        closeDate: '2025-05-01',
        id: 1
        },
        {
        name: 'Opp2',
        stage: 'Qualification',
        amount: 200000,
        closeDate: '2025-05-02',
        id: 2
        },
        {
        name: 'Opp3',
        stage: 'Needs Analysis',
        amount: 300000,
        closeDate: '2025-05-03',
        id: 3
        },
        {
        name: 'Opp4',
        stage: 'Closed Won',
        amount: 400000,
        closeDate: '2025-05-04',
        id: 4
        },
        {
        name: 'Opp5',
        stage: 'Closed Lost',
        amount: 500000,
        closeDate: '2025-05-05',
        id: 5
        }
    ];

    columns = [
        {label: 'Opportunity Name', fieldName: 'name', type: 'text'},
        {label: 'Stage', fieldName: 'stage', type: 'text'},
        {label: 'Amount', fieldName: 'amount', type: 'currency'},
        {label: 'Close Date', fieldName: 'closeDate', type: 'date'}
    ];

    get opportunitiesWithClass() {
        return this.opportunities.map(opp => ({
            ...opp,
            stageClass: this.getStageClass(opp.stage)
        }));
    }

    getStageClass(stage) {
        return stage ? stage.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z\-]/g, '') : '';
    }
}

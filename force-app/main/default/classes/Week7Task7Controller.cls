public with sharing class Week7Task7Controller {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(){
        return [SELECT Id, Subject, Priority, IsClosed, CreatedDate, Account.Name, Owner.Name, CaseNumber
                FROM Case
                WHERE IsClosed = false
                AND Priority = 'High'
                ORDER BY CreatedDate ASC
                ];
    }
}
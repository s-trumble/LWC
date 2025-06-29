public with sharing class caseCommentController {
    @AuraEnabled
    public static List<Case_Comment__c> getCaseComments(Id caseId){
        return [
            SELECT Id, Name, Category__c, Visibility__c, CreatedDate, CreatedBy.Name, Case__c
            FROM Case_Comment__c
            WHERE Case__c = :caseId
            ORDER BY CreatedDate DESC
        ];
    }
}
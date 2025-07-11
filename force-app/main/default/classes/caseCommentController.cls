public with sharing class caseCommentController {
    @AuraEnabled
    public static List<Case_Comment__c> getCaseComments(Id caseId){
        return [
            SELECT Id, Name, Comment__c, Category__c, Visibility__c, CreatedDate, CreatedById, CreatedBy.Name, Case__c
            FROM Case_Comment__c
            WHERE Case__c = :caseId
            ORDER BY CreatedDate DESC
        ];
    }

    @AuraEnabled
    public static Case_Comment__c saveCaseComment(Id caseId, String comment, String category, String visibility){
        Case_Comment__c caseComment = new Case_Comment__c(
            Case__c = caseId,
            Comment__c = comment,
            Category__c = category,
            Visibility__c = visibility
        );

        insert caseComment;

        return [
            SELECT Id, Name, Comment__c, Category__c, Visibility__c, CreatedDate, CreatedById, CreatedBy.Name, Case__c
            FROM Case_Comment__c
            WHERE Id = :caseComment.Id
            LIMIT 1
        ];

    }
}
public with sharing class Week7Task4Controller {
    @AuraEnabled
    public static List<Opportunity> getOpenOpps(){
        try {
            return [SELECT Id, Name, StageName, CloseDate, IsClosed, Amount                
                FROM Opportunity
                WHERE IsClosed = false
                AND CloseDate = THIS_WEEK
                ORDER BY Amount desc];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
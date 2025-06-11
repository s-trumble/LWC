public with sharing class Week7Task3Controller {
    @AuraEnabled(cacheable=true)
    public static List<OpportunityLineItem> getAllOpportunityLineItems(Id opportunityId){
        return [SELECT Id, Name, OpportunityId, Product2Id, Quantity, ListPrice, UnitPrice 
            FROM OpportunityLineItem 
            WHERE OpportunityId = :opportunityId];
    }
}
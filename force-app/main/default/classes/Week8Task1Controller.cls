public with sharing class Week8Task1Controller {
    @AuraEnabled
    public static Integer getNewLeads(){
        List<Lead> newLeads = [SELECT Id
            FROM Lead
            WHERE CreatedDate = THIS_MONTH];
        return newLeads.size();
    }

    @AuraEnabled
    public static Integer getClosedDeals(){
        List<Opportunity> closedOpps = [SELECT Id
            FROM Opportunity
            WHERE CloseDate = THIS_QUARTER
            AND StageName = 'Closed Won'];
        return closedOpps.size();
    }

    @AuraEnabled
    public static Decimal getPipelineValue(){
        List<AggregateResult> openOpps = [SELECT SUM(Amount) totalAmount
            FROM Opportunity
            WHERE CloseDate = THIS_QUARTER
            AND IsClosed = FALSE];
        Decimal total = (openOpps.size() > 0 && openOpps[0].get('totalAmount') != null) ? (Decimal)openOpps[0].get('totalAmount') : 0;
        return total;
    }

    @AuraEnabled
    public static Integer getOpenCases(){
        List<Case> openCases = [SELECT Id
            FROM Case
            WHERE IsClosed = FALSE];
        return openCases.size();
    }
}
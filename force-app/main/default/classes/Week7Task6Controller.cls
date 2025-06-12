public with sharing class Week7Task6Controller {
    @AuraEnabled(cacheable=true)
    public static List<CasesOppsLeadsWrapper> getNewCasesOppsLeads(){
        try {
            List<CasesOppsLeadsWrapper> casesOppsLeadsWrapperList = new List<CasesOppsLeadsWrapper>();
            List<Case> caseList = [SELECT Id, Subject, CreatedDate, Owner.Name
                                    FROM Case
                                    WHERE CreatedDate = LAST_N_DAYS:7];
            List<Opportunity> oppList = [SELECT Id, Name, CreatedDate, Owner.Name
                                    FROM Opportunity
                                    WHERE CreatedDate = LAST_N_DAYS:7];
            List<Lead> leadList = [SELECT Id, Name, CreatedDate, Owner.Name
                                    FROM Lead
                                    WHERE CreatedDate = LAST_N_DAYS:7];

            if(!caseList.isEmpty()){
                for(Case c : caseList){
                    CasesOppsLeadsWrapper caseWrapper = new CasesOppsLeadsWrapper();
                    caseWrapper.recordId = c.Id;
                    caseWrapper.name = c.Subject;
                    caseWrapper.objectType = 'Case';
                    caseWrapper.createdDate = c.CreatedDate;
                    caseWrapper.ownerName = c.Owner.Name;
                    casesOppsLeadsWrapperList.add(caseWrapper);
                }
            }

            if(!oppList.isEmpty()){
                for(Opportunity opp : oppList){
                    CasesOppsLeadsWrapper oppWrapper = new CasesOppsLeadsWrapper();
                    oppWrapper.recordId = opp.Id;
                    oppWrapper.name = opp.Name;
                    oppWrapper.objectType = 'Opportunity';
                    oppWrapper.createdDate = opp.CreatedDate;
                    oppWrapper.ownerName = opp.Owner.Name;
                    casesOppsLeadsWrapperList.add(oppWrapper);
                }
            }
            if(!leadList.isEmpty()){
                for(Lead lead : leadList){
                    CasesOppsLeadsWrapper leadWrapper = new CasesOppsLeadsWrapper();
                    leadWrapper.recordId = lead.Id;
                    leadWrapper.name = lead.Name;
                    leadWrapper.objectType = 'Lead';
                    leadWrapper.createdDate = lead.CreatedDate;
                    leadWrapper.ownerName = lead.Owner.Name;
                    casesOppsLeadsWrapperList.add(leadWrapper);
                }
            }

            return casesOppsLeadsWrapperList;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class CasesOppsLeadsWrapper{
        @AuraEnabled
        public Id recordId {get;set;}
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public String objectType{get;set;}
        @AuraEnabled
        public Datetime createdDate {get;set;}
        @AuraEnabled
        public String ownerName {get;set;}
    }
}
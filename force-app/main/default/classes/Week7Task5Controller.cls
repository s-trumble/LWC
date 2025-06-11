public with sharing class Week7Task5Controller {
    @AuraEnabled(cacheable=true)
    public static List<Account> getModifiedAccounts(){
        try {
            return [SELECT Id, Name, LastModifiedDate
            FROM Account 
            WHERE LastModifiedDate = LAST_N_DAYS:10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
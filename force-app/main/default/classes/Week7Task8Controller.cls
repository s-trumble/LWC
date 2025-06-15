public with sharing class Week7Task8Controller {
    @AuraEnabled
    public static void updateCategory(Id softwareId, String category){
        Software_License__c softwareLicense = new Software_License__c();
        softwareLicense.Id = softwareId;
        softwareLicense.Category__c = category;

        update softwareLicense;
    }

    @AuraEnabled
    public static string getCurrentCategory(Id softwareId){
        Software_License__c license = [
            SELECT Category__c
            FROM Software_License__c
            WHERE Id = :softwareId
            LIMIT 1
        ];
        return license.Category__c;
    }
}
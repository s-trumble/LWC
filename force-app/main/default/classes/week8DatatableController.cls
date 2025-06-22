public with sharing class week8DatatableController {
    @AuraEnabled
    public static List<Contact> queryContacts(Id accountId){
        return [
            SELECT Id, FirstName, LastName, Email, Phone 
            FROM Contact 
            WHERE AccountId = :accountId 
        ];
    }

    @AuraEnabled
    public static void saveContacts(List<Contact> contacts){
        upsert contacts;
    }
}
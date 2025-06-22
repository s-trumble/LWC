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
    public static List<Contact> saveContacts(List<Contact> contacts){
        update contacts;
        return [
            SELECT Id, FirstName, LastName, Email, Phone 
            FROM Contact 
            WHERE Id IN :contacts 
        ];
    }
}
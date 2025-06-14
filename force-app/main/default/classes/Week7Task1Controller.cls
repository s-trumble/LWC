public with sharing class Week7Task1Controller {
    @AuraEnabled
    public static List<Contact> getAllContacts(){
        return [SELECT Id, FirstName, LastName, Email, Phone
            FROM Contact];
    }
}
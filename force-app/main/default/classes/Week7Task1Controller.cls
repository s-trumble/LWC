public with sharing class Week7Task1Controller {
    @AuraEnabled
    public static List<Contact> getAllContacts(){
        try {
            return [SELECT Id, FirstName, LastName, Email, Phone
                FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }            
    }
}
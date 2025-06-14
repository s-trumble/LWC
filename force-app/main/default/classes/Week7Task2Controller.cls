public with sharing class Week7Task2Controller {
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsers() {
        return [SELECT Id, FirstName, LastName, Email, Phone 
                FROM User];    
    }
}
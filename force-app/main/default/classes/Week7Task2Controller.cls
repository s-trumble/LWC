public with sharing class Week7Task2Controller {
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsers() {
        try {
            return [SELECT Id, FirstName, LastName, Email, Phone 
                    FROM User];    
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
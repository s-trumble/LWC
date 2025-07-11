public with sharing class week9Controller {
    @AuraEnabled
    public static List<Contact> queryContacts(Id accountId){
        return [
            SELECT Id, FirstName, LastName, Email, Phone 
            FROM Contact 
            WHERE AccountId = :accountId 
            ];
    }

    @AuraEnabled
    public static void saveContact(String firstName, String lastName, String email, String phone, Id accountId){
        Contact newContact = new Contact(
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Phone = phone,
            AccountId = accountId
        );
        insert newContact;
    }

    @AuraEnabled
    public static void deleteContact(Id contactId){
        Contact c = new Contact();
        c.Id = contactId;
        delete c;
    }
}
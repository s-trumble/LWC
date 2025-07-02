public with sharing class NavigationExampleController {
    @AuraEnabled
    public static string getMostRecentlyModifiedAccount(){
        String accountId = '';
        List<Account>  accounts = [
                SELECT Id 
                FROM Account 
                ORDER BY LastModifiedDate DESC 
                LIMIT 1];
        accountId = accounts[0].Id;
        return accountId;
    }
}
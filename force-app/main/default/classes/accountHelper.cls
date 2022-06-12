public with sharing class accountHelper {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountList(string idObject) {
         list <Contact> contacto = new list<Contact>();
         for (Contact ctc : [SELECT Id, Name
            FROM Contact where AccountId = :idObject]) {
            contacto.add(ctc);
         }       
        return contacto;
    } 
}
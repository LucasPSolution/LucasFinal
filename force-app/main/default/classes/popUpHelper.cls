public with sharing class popUpHelper {
    @AuraEnabled(cacheable=true)
    public static List<Factura__c> getAccountList(string idObject) {
       
          list <Factura__c> factura = new list<Factura__c>();
         for (Factura__c fc  :[SELECT Pagada__c from Factura__c where Account__c =:idObject])  {
            factura.add(fc);
            
         }
         system.debug(factura);
        return factura;

    }
}
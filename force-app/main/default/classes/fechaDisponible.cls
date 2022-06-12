public with sharing class fechaDisponible {
    public fechaDisponible() {


    }
    public static Boolean noDisponible(Opportunity aVerif){
        Boolean resp = false;
        List<Opportunity> getOpp = [SELECT Id, Name, StageName, Fecha_de_Fin__c, Fecha_de_Inicio__c, Servicio__c,Transport__c, Vehicle__c FROM Opportunity WHERE StageName ='Closed Won'];
        for(Opportunity verif : getOpp){
            if((verif.Fecha_de_Inicio__c <= aVerif.Fecha_de_Inicio__c && verif.Fecha_de_Fin__c >= aVerif.Fecha_de_Inicio__c)||
            (verif.Fecha_de_Inicio__c <= aVerif.Fecha_de_Fin__c && verif.Fecha_de_Fin__c >= aVerif.Fecha_de_Fin__c)){
                if ((verif.Servicio__c == 'Viaje Individual' && verif.Vehicle__c == aVerif.Vehicle__c )||
                (verif.Servicio__c =='Alquiler de Vehiculo' && verif.Transport__c == aVerif.Transport__c)) {
                    resp= true;
                }
            }
        }
        return resp;
    
    }
}

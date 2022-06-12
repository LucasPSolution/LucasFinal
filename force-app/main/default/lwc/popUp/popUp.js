import { LightningElement ,api,wire,track} from 'lwc';
import getAccountList from '@salesforce/apex/popUpHelper.getAccountList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


let count


export default class Contability extends LightningElement {
    @track datita
    @track Error 
    @track accList
    @api recordId;   
    @track count
   

    @wire(getAccountList, {idObject: '$recordId'})
     wiredAccounts({error,data}){
      
        if(data){
            count = 0; 
            this.datita = data;
            data.forEach(dato => {
                if (dato.Pagada__c === false) {
                    count ++
                    console.log(dato.Pagada__c)        
                }
                console.log(count);
            });
            if (count > 0 ) {
                let texto = `Hay ${count} facturas sin pagar`
                console.log(count);
                this.showWarningToast(texto)
            } else if (count===0){            
                console.log(count);
                this.showSuccesToast('No hay facturas pendientes de pago'
            )}

/*            if (data[0].Pagada__c === false) {
                alert('Hay facturas sin pagar')
            }
            console.log(this.datita)
            console.log(data[0])
            console.log(data.length);
*/             
        }else if(error){
            this.Error = error;
        }
    }
    showWarningToast(title) {
        const evt = new ShowToastEvent({                  
            title, 
            variant: 'error',
            mode: 'dismissable' 
        });
        this.dispatchEvent(evt);
    
    }
    showSuccesToast(title) {
        const evt = new ShowToastEvent({                  
            title, 
            variant: 'success',
            mode: 'dismissable'
    
        });
        this.dispatchEvent(evt);
    }
    
    
}
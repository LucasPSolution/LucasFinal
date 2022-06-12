import { LightningElement ,api,wire,track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
const columns = [
    {
        label: 'Account name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },{
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        sortable: true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'url',
        sortable: true
    }
    /*,
    {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
        sortable: true
    },
    {
        label: 'Annual Revenue',
        fieldName: 'AnnualRevenue',
        type: 'Currency',
        sortable: true
    },
    
    {
        label: 'Rating',
        fieldName: 'Rating',
        type: 'test',
        sortable: true
    }*/
];




export default class Contability extends LightningElement {
    columns = columns;
    @track Error 
    @track accList
    @api recordId;  
    

    @wire(getAccountList, {idObject: '$recordId'})
    wiredAccounts({error,data}){
        if(data){
            this.accList = data;
            console.log(data)
            console.log('aca estas la lista '+accList)
        }else if(error){
            this.Error = error;
        }
    }
    
    
}
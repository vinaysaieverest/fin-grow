import axios from "axios";
export class saving{
    name:string;
    savingName:string;
    amount:number
    constructor(name:string,savingName:string,amount:number){
        this.name=name;
        this.savingName=savingName
        this.amount=amount
    }
    async saving() {
        try{
            const response = await axios.post('http://localhost:5005/api/saving', {
                name:this.name,
                savingName:this.savingName,
                amount:this.amount
              });
              return true;
        }
        catch(e){
            console.log(e)
            return false
        }

      
    }
}
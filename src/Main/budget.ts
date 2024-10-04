import axios from "axios";

export class Budget {
    name:string;
    budgetName:string;
    amount:number;

    constructor(name: string, budgetName: string,amount:number) {
        this.name = name;
        this.budgetName = budgetName;
        this.amount=amount
    }

    async setBudget(){
        try{
            const response = await axios.post('http://localhost:5005/api/budget', {
                name: this.name,
                budgetName: this.budgetName,
                amount: this.amount,
              });
              return true;
        }
        catch(e){
            console.log("Network Error")
            return false
        }

    }

}


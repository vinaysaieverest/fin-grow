import axios from "axios";
import { DataModel } from "../../../models";

export class Transaction {
    name:string;
    constructor(name: string) {
        this.name = name;

    }
    async getTransaction(){
        try{
            const name = this.name
            const user = await DataModel.findOne({ name });
            if (!user) {
              return;
            }
            const transaction = user.transaction;
            if(transaction.length===0){
                return 0;
            }
            const lastFiveTransactions = transaction.slice(-5).reverse();
            return lastFiveTransactions
        }
        catch(e){
            console.log("Network Error")
            return false
        }

    }

}


import axios from "axios";
import { DataModel } from "../../../models";

export class Budget {
    name:string;
    category:string;
    amount:number;

    constructor(name: string, category: string,amount:number) {
        this.name = name;
        this.category = category;
        this.amount=amount
    }

    async setBudget(){
        try{
            const name = this.name
            const category=this.category;
            const amount = this.amount
            const user = await DataModel.findOne({ name });
            if (!user) {
              return false;
            }
            user.categories.push({budgetName:category,amount});
            await user.save();
            return true
        }
        catch(e){
            console.log("Network Error")
            return false
        }

    }

}


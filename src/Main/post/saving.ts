import axios from "axios";
import { DataModel } from "../../../models";
export class Saving{
    name:string;
    savingName:string;
    amount:number
    constructor(name:string,savingName:string,amount:number){
        this.name=name;
        this.savingName=savingName
        this.amount=amount
    }
    async setSaving() {
        try{
            const name = this.name;
            const savingName = this.savingName;
            const amount = this.amount
            const currentAmount = 0
            const user = await DataModel.findOne({ name });
            if (!user) {
              return false;
            }
            user.savings.push({ goal:savingName, totalSavings:amount,currentAmount:currentAmount});
            await user.save();
            return true
        }
        catch(e){
            console.log(e)
            return false
        }

      
    }
}
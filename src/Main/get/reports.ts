import axios from "axios";
import { DataModel } from "../../../models";

export class Report {
    name:string;


    constructor(name: string) {
        this.name = name;
    }

    async setReport(){
        try{
            const name = this.name

            const user = await DataModel.findOne({ name });

            if (!user) {
              return false;
            }
        
            const spentPerCategory: any = {};
        
            user.transaction.forEach((transaction: any) => {
              const category = transaction.category;
        
              if (!spentPerCategory[category]) {
                spentPerCategory[category] = 0;
              }
        
              spentPerCategory[category] += transaction.amount;
            });
        
            const detailedSpent = user.categories.map((category: any) => {
              return {
                category: category.budgetName,
                allocatedAmount: category.amount,
                spentAmount: spentPerCategory[category.budgetName] || 0,
              };
            });
        
            
            return  detailedSpent
            
        }
        catch(e){
            console.log("Network Error")
            return false
        }

    }

}


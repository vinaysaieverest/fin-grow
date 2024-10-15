import axios from 'axios';
import { DataModel } from '../../../models';
export class TransactionService {
  name: string;
  transactionName:string;
  amount: number;
  type: string;
  category :string;
 

  constructor(name:string,transactionName:string,amount: number, type: string,category :string ) {
    this.name = name;
    this.transactionName = transactionName
    this.amount = amount;
    this.type = type;
    this.category = category
  }

  async makeTransaction() {
    try {
      const name=this.name;
      const transactionName=this.transactionName;
      const amount = this.amount;
      const type = this.type;
      const category = this.category
      const user = await DataModel.findOne({ name });
      if (!user) {
        return false ;
      }
      if(type==="budget" || type==="Budget"){
        const budget = user.categories.find((Tcategory: { budgetName: string }) => Tcategory.budgetName === category)
        console.log(budget)
        if (!budget) {
          console.log("No budget found")
          return false;
        }
        
        user.salary -= amount;
        budget.amount -= amount;
        user.transaction.push({ transactionName, amount, type,category });
        await user.save();
        return true
      }
      
      if(type==="saving"||type==="Saving"){
        const budget = user.saving.find((Tcategory: { goal: string }) => Tcategory.goal === category)
        if (!budget) {
          return false;
        }
        budget.currentAmount += amount;
        user.transaction.push({ transactionName, amount, type,category});
        await user.save();
        return true
      }
      
    } catch (error) {
      return false;
    }
  }
}


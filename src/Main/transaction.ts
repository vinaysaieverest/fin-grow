import axios from 'axios';
export class TransactionService {
  amount: number;
  type: string;
  name: string;
  budgetType:string
  spendType:string

  constructor(amount: number, type: string, name: string,budgetType:string,spendType:string) {
    this.amount = amount;
    this.type = type;
    this.name = name;
    this.budgetType=budgetType;
    this.spendType=spendType
  }

  async makeTransaction(): Promise<boolean> {
    try {
      const response = await axios.post('http://localhost:5005/api/transaction', {
        amount: this.amount,
        budgetType:this.budgetType,
        name: this.name,
        spendType:this.spendType,
        type: this.type
      });
      return true;
    } catch (error) {
      // console.error('Error pushing data to the database:', error);
      return false;
    }
  }
  async getTransaction(name:string):Promise<any>{
    try{
      const response = await axios.get(`http://localhost:5005/api/recenttransactions/${name}`,{
      });
      return response.data
    }
    catch(e){
      console.log(e)
      return false
    }
  }

}
export class getTransaction{
  amount:number;
  type:string;
  category:string;
  constructor(amount: number, type: string,category:string ) {
    this.amount = amount;
    this.type = type;
    this.category =category
  }

}

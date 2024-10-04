import axios from 'axios';
export class TransactionService {
  amount: number;
  type: string;
  name: string;
  budgetType:string
  spendType:string
  // address:string="";

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
}

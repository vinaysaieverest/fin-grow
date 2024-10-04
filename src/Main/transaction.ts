import axios from 'axios';
export class TransactionService {
  amount: number;
  type: string;
  name: string;
  // address:string="";

  constructor(amount: number, type: string, name: string) {
    this.amount = amount;
    this.type = type;
    this.name = name;
  }

  async makeTransaction(): Promise<boolean> {
    try {
      const response = await axios.post('http://localhost:5005/api/transaction', {
        amount: this.amount,
        type: this.type,
        name: this.name
      });
      return true;
    } catch (error) {
    //   console.error('Error pushing data to the database:', error);
      return false;
    }
  }
}

const transaction = new TransactionService(1000,'debit','Vinay')
transaction.makeTransaction()

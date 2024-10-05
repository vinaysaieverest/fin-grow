
import axios from 'axios';
import { TransactionService } from '../main/transaction';
import { getTransaction } from '../main/transaction';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('TransactionService', () => {
  test('should successfully make a transaction', async () => {
    mockedAxios.post.mockResolvedValue(true);

    const transaction = new TransactionService(100, 'credit', 'Vinay',"budget","General");
    const result = await transaction.makeTransaction();

    expect(result).toBe(true);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/transaction', {
      amount: 100,
      type: 'credit',
      name: 'Vinay',
      spendType:"General",
      budgetType:"budget",
      
    });
  });

  test('should fail the transaction when axios throws an error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const transaction = new TransactionService(200, 'debit', 'Vinay',"budget","General");
    const result = await transaction.makeTransaction();

    expect(result).toBe(false); 
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/transaction', {
      amount: 200,
      type: 'debit',
      name: 'Vinay',
      spendType:"General",
      budgetType:"budget"
      

    }); 
  });
  test('should pass if the get transactions',async()=>{
    const details = {
      amount:1000,
      Ttype:"credit",
      category: "Bike",
      spend:"saving"
    }
    mockedAxios.get.mockResolvedValue({data:details})
    const transaction = new TransactionService(200, 'credit', 'Srinija',"saving","Bike");
    const result = await transaction.getTransaction("Srinija");
    expect(result).toEqual(details);
  })
  test('should fail if we get any error',async()=>{
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));
    const transaction = new TransactionService(200, 'credit', 'Srinija',"saving","Bike");
    const result = await transaction.getTransaction("Srinija");
    expect(result).toBe(false);
  })
});




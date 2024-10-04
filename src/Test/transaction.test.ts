
import axios from 'axios';
import { TransactionService } from '../main/transaction';  // import your class
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('TransactionService', () => {
  it('should successfully make a transaction', async () => {
    mockedAxios.post.mockResolvedValue({ data: { success: true } });

    const transaction = new TransactionService(100, 'credit', 'Vinay');
    const result = await transaction.makeTransaction();

    expect(result).toBe(true);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/transaction', {
      amount: 100,
      type: 'credit',
      name: 'Vinay'
    });
  });

  it('should fail the transaction when axios throws an error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const transaction = new TransactionService(200, 'debit', 'Vinay');
    const result = await transaction.makeTransaction();

    expect(result).toBe(false); 
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/transaction', {
      amount: 200,
      type: 'debit',
      name: 'Vinay'
    });
  });
});
const transaction = new TransactionService(100, 'credit', 'Srinija');
transaction.makeTransaction();

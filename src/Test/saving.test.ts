
import axios from 'axios';
import { saving } from '../main/saving';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('TransactionService', () => {
  it('should successfully make a transaction', async () => {
    mockedAxios.post.mockResolvedValue({ data: { success: true } });

    const transaction = new saving("Vinay","Cycle",10000);
    const result = await transaction.saving();

    expect(result).toBe(true);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/saving', {
    name:"Vinay",
    savingName:"Cycle",
    amount:10000

    });
  });

  it('should fail the transaction when axios throws an error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const transaction = new saving("Vinay","Cycle",10000);
    const result = await transaction.saving();

    expect(result).toBe(false); 
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/saving', {
        name:"Vinay",
        savingName:"Cycle",
        amount:10000
    }); 
  });
});
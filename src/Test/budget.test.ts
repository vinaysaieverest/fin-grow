// 
import axios from 'axios';
import { Budget } from '../main/budget';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('TransactionService', () => {
  it('should successfully make a transaction', async () => {
    mockedAxios.post.mockResolvedValue({ data: { success: true } });

    const budget = new Budget("Vinay","General",2000);
    const result = await budget.setBudget();

    expect(result).toBe(true);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/budget', {
     name:"Vinay",
     budgetName:"General",
     amount:2000
    });
  });

  it('should fail the transaction when axios throws an error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const budget = new Budget("Vinay","General",2000);
    const result = await budget.setBudget();
    expect(result).toBe(false); 
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/budget', {
      name:"Vinay",
     budgetName:"General",
     amount:2000
    }); 
  });
});
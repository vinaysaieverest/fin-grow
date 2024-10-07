// 
import axios from 'axios';
import { Budget } from '../main/post/budget';
import { Register } from '../main/post/register';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('TransactionService', () => {
  it('should successfully make a transaction', async () => {
    mockedAxios.post.mockResolvedValue({ data: { success: true } });

    const budget = new Register("Vinay","Vinay123",50000);
    const result = await budget.setRegister();

    expect(result).toBe(true);
   
  });
  it('should pass if API hits succesfully',()=>{
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/register', {
      name:"Vinay",
      password:"Vinay123",
      salary:2000
     });
  })

  it('should fail the transaction when axios throws an error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const budget = new Register("Vinay","Vinay123",50000);
    const result = await budget.setRegister();
    expect(result).toBe(false); 
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:5005/api/regidter', {
        name:"Vinay",
        password:"Vinay123",
        salary:2000
    }); 
  });
});
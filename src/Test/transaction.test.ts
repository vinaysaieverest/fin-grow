import { TransactionService } from '../../src/main/post/transaction';
import { DataModel } from '../.././models';  

jest.mock('../.././models'); 

describe('TransactionService', () => {
  beforeEach(() => {
    jest.clearAllMocks();  
  });
  it('should return false if user does not exist', async () => {
    DataModel.findOne = jest.fn().mockResolvedValue(null);

    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'budget', 'Food');
    const result = await service.makeTransaction();

    expect(result).toBe(false);
    expect(DataModel.findOne).toHaveBeenCalledWith({ name: 'TestUser' });
  });

  it('should return false if the budget category is not found', async () => {
    DataModel.findOne = jest.fn().mockResolvedValue({
      name: 'TestUser',
      salary: 1000,
      categories: []
    });

    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'budget', 'Food');
    const result = await service.makeTransaction();
    expect(result).toBe(false);
    expect(DataModel.findOne).toHaveBeenCalled();
  });
  it('should correctly update user salary and budget on a valid transaction', async () => {
    const mockUser = {
      name: 'TestUser',
      salary: 1000,
      categories: [{ budgetName: 'Food', amount: 500 }],
      transaction: [],
      save: jest.fn()
    };
    DataModel.findOne = jest.fn().mockResolvedValue(mockUser);

    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'budget', 'Food');
    const result = await service.makeTransaction();

    expect(result).toBe(true);
    expect(mockUser.salary).toBe(900);  // Salary reduced by 100
    expect(mockUser.categories[0].amount).toBe(400);  // Category amount reduced by 100
    expect(mockUser.transaction).toHaveLength(1);  // New transaction added
    expect(mockUser.save).toHaveBeenCalled();  // Ensure save method is called
  });
  it('should correctly update user savings on a valid saving transaction', async () => {
    const mockUser = {
      name: 'TestUser',
      saving: [{ goal: 'Emergency Fund', currentAmount: 200 }],
      transaction: [],
      save: jest.fn(),
    };
    DataModel.findOne = jest.fn().mockResolvedValue(mockUser);
  
    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'saving', 'Emergency Fund');
    const result = await service.makeTransaction();
  
    expect(result).toBe(true);
    expect(mockUser.saving[0].currentAmount).toBe(300);  // Savings increased by 100
    expect(mockUser.transaction).toHaveLength(1);  // New transaction added
    expect(mockUser.save).toHaveBeenCalled();  // Ensure save method is called
  });
  it('should retuen false when budget is not found',async()=>{
    DataModel.findOne = jest.fn().mockResolvedValue({
      name: 'TestUser',
      salary: 1000,
      categories: []
    })
    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'saving', 'Emergency Fund');
    const result = await service.makeTransaction();
    expect(result).toBe(false);
  })
  it('should return false when an error occurs during transaction', async () => {
    DataModel.findOne = jest.fn().mockRejectedValue(new Error('Database Error'));
  
    const service = new TransactionService('TestUser', 'TestTransaction', 100, 'budget', 'Food');
    const result = await service.makeTransaction();
  
    expect(result).toBe(false);  // Should return false on error
  });  
});

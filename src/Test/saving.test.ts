import { DataModel } from '../.././models';  // Import the mocked DataModel
import { Saving } from '../main/post/saving';

// Mock the DataModel so that no real DB calls are made
jest.mock('../.././models');
const mockedDataModel = DataModel as jest.Mocked<typeof DataModel>;

describe('Saving Class', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();  // Clear any previous mock data before each test
  });

  test('should successfully create a saving for an existing user', async () => {
    const mockUser = {
      name: 'Vinay',
      savings: [],
      save: jest.fn(),
    };

    mockedDataModel.findOne.mockResolvedValue(mockUser); 

    const budget = new Saving("Vinay", "General", 500);
    const result = await budget.setSaving();
    expect(mockUser.save).toHaveBeenCalled();
    expect(result).toBe(true);  // No return value expected (success)
    expect(mockUser.savings.length).toBe(1);  // Ensure a budget category was added
    expect(mockUser.savings[0]).toEqual({ goal: "General", totalSavings: 500,currentAmount:0 });  // Check the category and amount
  });

  test('should fail to create a saving when the user does not exist', async () => {
    mockedDataModel.findOne.mockResolvedValue(null);  // Simulate user not found

    const budget = new Saving("Vinay", "Home", 500);
    const result = await budget.setSaving();

    expect(result).toBe(false);  // Should return false when user is not found
  });

  test('should handle errors when an exception occurs', async () => {
    mockedDataModel.findOne.mockRejectedValue(new Error('Database Error'));  // Simulate a DB error

    const budget = new Saving("Vinay", "Home", 500);
    const result = await budget.setSaving();

    expect(result).toBe(false);  // Should return false on error
  });

});

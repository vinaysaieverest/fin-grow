import { DataModel } from '../.././models';  // Import the mocked DataModel
import { Saving } from '../main/post/saving';

// Mock the DataModel so that no real DB calls are made
jest.mock('../.././models');
const mockedDataModel = DataModel as jest.Mocked<typeof DataModel>;

describe('Budget Class', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();  // Clear any previous mock data before each test
  });

  test('should successfully create a saving for an existing user', async () => {
    const mockUser = {
      name: 'Vinay',
      categories: [],
      save: jest.fn(),
    };

    mockedDataModel.findOne.mockResolvedValue(mockUser);  // Mock the DB user query

    const budget = new Saving("Vinay", "General", 500);
    const result = await budget.setSaving();

    expect(result).toBe(false);  // No return value expected (success)
    expect(mockUser.categories.length).toBe(1);  // Ensure a budget category was added
    expect(mockUser.categories[0]).toEqual({ budgetName: "General", amount: 500 });  // Check the category and amount
    expect(mockUser.save).toHaveBeenCalled();  // Ensure the save method was called
  });

  test('should fail to create a saving when the user does not exist', async () => {
    mockedDataModel.findOne.mockResolvedValue(null);  // Simulate user not found

    const budget = new Saving("Vinay", "General", 500);
    const result = await budget.setSaving();

    expect(result).toBe(false);  // Should return false when user is not found
  });

  test('should handle errors when an exception occurs', async () => {
    mockedDataModel.findOne.mockRejectedValue(new Error('Database Error'));  // Simulate a DB error

    const budget = new Saving("Vinay", "General", 500);
    const result = await budget.setSaving();

    expect(result).toBe(false);  // Should return false on error
  });

});

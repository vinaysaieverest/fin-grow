import { Budget } from "../main/budget"; // Import the class from your file

describe('Budget Class Tests', () => {
  let groceriesBudget: Budget;
  let entertainmentBudget: Budget;

  beforeEach(() => {
    groceriesBudget = new Budget('Groceries', 100);
    entertainmentBudget = new Budget('Entertainment', 200);
  });

  it('should return the remaining budget after spending', () => {
    expect(groceriesBudget.spend(30)).toBe(70); // 100 - 30 = 70
    expect(entertainmentBudget.spend(50)).toBe(150); // 200 - 50 = 150
  });

  it('should return "Budget limit exceeds" if spending exceeds the budget', () => {
    expect(groceriesBudget.spend(110)).toBe('Groceries budget limit exceeds');
    expect(entertainmentBudget.spend(250)).toBe('Entertainment budget limit exceeds');
  });

  it('should handle exact spending', () => {
    expect(groceriesBudget.spend(100)).toBe(0); // Exact budget spent
  });
});
const groceriesBudget = new Budget('Groceries', 100);
const entertainmentBudget = new Budget('Entertainment', 200);

import { budget } from "../Main/main"
import { data } from "../../data"
import { transactions } from "../Main/main"
const user = data[0]
describe('This is about budget',()=>{
    test('should return the budget',()=>{
        expect(budget(user.salary,user.categories.Entertainment,user.categories.Groceries)).toBe(8000)

    })
})
describe("This is about transactions",()=>{
    test('should check about credit',()=>{
        expect(transactions(2000,"credit")).toBe(12000)
    })
    test('should check debit money',()=>{
        expect(transactions(2000,"debit")).toBe(8000)
    })
    test ('should check wheather balance is equal to zero',()=>{
        expect (transactions(2000,"balanceCheck")).toEqual("NoBalance")
    })
})
import { Groceriesbudget, Entertainmentbudget,login } from "../Main/main"
import { data } from "../../data"
import { transactions } from "../Main/main"
const user = data[0]

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
describe("This is about Login",()=>{
    test('should check aboout username and password',()=>{
        expect(login("vinay","Vinaysai02")).toBeTruthy
    })
})
describe('This will manage the budget for each category',()=>{
    test('should track the groceries budget',()=>{
        expect(Groceriesbudget(5000,1000)).toBe(4000)
    })
    test('should track the groceries budget',()=>{
        expect(Groceriesbudget(5000,2000)).toBe(3000)
    })
})


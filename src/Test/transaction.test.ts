import { transactions } from "../main/transaction"

describe("This is about transactions",()=>{
    test('should check about credit',()=>{
        expect(transactions(2000,"credit")).toBe(12000)
    })
    test('should check debit money',()=>{
        expect(transactions(2000,"debit")).toBe(8000)
    })
    test('should return error if debiting money is more than money with in account',()=>{
        expect(transactions(10001,"debit")).toBeFalsy
    })
    test ('should check wheather balance is equal to zero',()=>{
        expect (transactions(2000,"balanceCheck")).toEqual("NoBalance")
    })
})
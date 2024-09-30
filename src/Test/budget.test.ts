import { Groceriesbudget, Entertainmentbudget } from "../main/budget"
import { data } from "../../data"
const user = data[0]
describe('This will manage the budget for each category',()=>{
    test('should track the groceries budget',()=>{
        expect(Groceriesbudget(5000,1000)).toBe(4000)
    })
    test('should track the groceries budget',()=>{
        expect(Entertainmentbudget(5000,5001)).toEqual("Budget limit exceeds")
    })
    test('should track the groceries budget',()=>{
        expect(Groceriesbudget(5000,2000)).toBe(3000)
    })
    test('should track the groceries budget',()=>{
        expect(Entertainmentbudget(5000,5001)).toEqual("Budget limit exceeds")
    })
})


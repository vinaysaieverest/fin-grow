import { data } from "../main/data"
import { report } from "../main/post/report"

describe('This test will describe amount reports',()=>{
    test('should return the reports',()=>{
        const results = `totalIncome = 12000 
                         totalSpend = 2000
                         Groceries:1000
                         Entertainment:1000
                         goalReport:40%
                         `
        expect(report(data[0])).toBe(results);
       
    })
   
})

import { data } from "../../data"
import { progres, saving } from "../main/saving"

describe('This test will describe amount savings',()=>{
    test('should return the saved amount',()=>{
        expect(saving(1000)).toBe(data[0].savings.currentAmount+1000)
    })
    test('should give progress',()=>{
        expect(progres(data[0].savings.currentAmount)).toBe(40)
    })
    test('should return true if we reach our goal',()=>{
        expect(progres(10000)).toBeTruthy
    })
})

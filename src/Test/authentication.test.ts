import { login } from "../main/login"

describe("This is about Login",()=>{
    test('should check aboout username and password',()=>{
        expect(login("vinay","Vinaysai02")).toBeTruthy
    })
    test('should throw error for wrong credentails',()=>{
        expect(login("visa","1234")).toBeFalsy
    })
    test('should give error if any of details is not enter',()=>{
        expect(login('','1234')).toBeFalsy
    })
    test ('should return flase if both details not enter',()=>{
        expect(login('','')).toBeFalsy
    })
})

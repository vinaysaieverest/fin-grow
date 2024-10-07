import { Login } from "../main/post/login"

describe("This is about Login",()=>{
    test('should check aboout username and password',()=>{
        const user = new Login("vinay","Vinaysai02")
        const results = user.setLogin()
        expect(results).toBeTruthy
    })
    test('should check aboout username and password',()=>{
        const user = new Login("Vinay","Vinaysai02")
        const results = user.setLogin()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Login("vinay","Vinaysai01")
        const results = user.setLogin()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Login("","Vinaysai02")
        const results = user.setLogin()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Login("Vinay","")
        const results = user.setLogin()
        expect(results).toBeFalsy
    })
})



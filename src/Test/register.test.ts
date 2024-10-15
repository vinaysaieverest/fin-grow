import { Register } from "../main/post/register"
import { DataModel } from "../../models";
import mongoose from "mongoose";

describe("This is about Login",()=>{
      beforeEach(() => {
        jest.clearAllMocks();
        (DataModel.findOne as jest.Mock) = jest.fn();
      });
    test('should check aboout username and password',()=>{
        const user = new Register("vinay","Vinaysai02",0)
        const results = user.setRegister()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Register("Vinay","Vinaysai02",5000)
        const results = user.setRegister()
        expect(results).toBeTruthy
    })
    test('should check aboout username and password',()=>{
        const user = new Register("","",70000)
        const results = user.setRegister()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Register("","Vinaysai02",90000)
        const results = user.setRegister()
        expect(results).toBeFalsy
    })
    test('should check aboout username and password',()=>{
        const user = new Register("Vinay","",60000)
        const results = user.setRegister()
        expect(results).toBeFalsy
    })
    test("should return true for correct username and password", async () => {
        (DataModel.findOne as jest.Mock).mockResolvedValue({
          name: "testUser",
          password: "12345",
          salary :50000
        });
        const login = new Register("testUser", "12345",50000);
        const result = await login.setRegister();
        expect(result).toBe(false);
      });
      test("should return true for correct username and password", async () => {
        (DataModel.findOne as jest.Mock).mockResolvedValue({
          name: "testUser1",
          password: "12345",
          salary :50000
        });
        const login = new Register("testUser", "12345",50000);
        const result = await login.setRegister();
        expect(result).toBe(false);
      });
    test("should handle errors gracefully", async () => {
    (DataModel.findOne as jest.Mock).mockRejectedValue(new Error("Database error"));
    const login = new Register("testUser", "12345",50000);
    const result = await login.setRegister();
    expect(result).toBe(false);
  });

})


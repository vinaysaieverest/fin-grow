import { Login } from "../main/post/login"
import { DataModel } from "../../models";
import mongoose from "mongoose";
const request = require('supertest');

describe("This is about Login",()=>{
      beforeEach(() => {
        jest.clearAllMocks();
        (DataModel.findOne as jest.Mock) = jest.fn();
      });
      afterAll(async () => {
        await mongoose.connection.close();
      });
    

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
    test("should return true for correct username and password", async () => {
        (DataModel.findOne as jest.Mock).mockResolvedValue({
          name: "testUser",
          password: "12345",
        });
        const login = new Login("testUser", "12345");
        const result = await login.setLogin();
        expect(result).toBe(true);
      });
        test("should handle errors gracefully", async () => {
    (DataModel.findOne as jest.Mock).mockRejectedValue(new Error("Database error"));

    const login = new Login("testUser", "12345");
    const consoleSpy = jest.spyOn(console, "log");
    const result = await login.setLogin();

    expect(consoleSpy).toHaveBeenCalledWith("Error is that", expect.any(Error));
    expect(result).toBeUndefined();
  });

})


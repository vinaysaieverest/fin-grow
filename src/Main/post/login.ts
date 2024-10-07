import axios from "axios";
import { DataModel, dataSchema } from "../../../models";

export class Login {
    name:string;
    password:string;
    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
     async setLogin(){
        try{
            const name =this.name;
            const password = this.password 
            const user = await DataModel.findOne({ name});
            if (!user) {
              return false;
            }
            if(user.password===password){
              console.log("login",name)
              return true ;
            }
            else{
              return false
            }
        }
        catch(e){
            console.log("Error is that",e)
        }   
        }
}


import axios from "axios";
import { DataModel, dataSchema } from "../../../models";

export class Register {
    name:string;
    password:string;
    salary:number;

    constructor(name: string, password: string,salary:number) {
        this.name = name;
        this.password = password;
        this.salary=salary
    }

     async setRegister(){
            try{
                const user = new DataModel ({
                    name:this.name,
                    password:this.password,
                    salary:this.salary
                })
                await user.save();
                return "User Created Succesfully"
            }
            catch(e){
                console.log(e)
            }
            
        }

    }


import { DataModel } from "../../../models";
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
                const user1 = await DataModel.findOne({ name:this.name });
                if (user1) {
                return  false;
            }
                const user = new DataModel ({
                    name:this.name,
                    password:this.password,
                    salary:this.salary
                    
                })
                if (this.name === "" || this.password === '' || this.salary === 0) {
                    return false; 
                }
                await user.save();
            }
            catch(e){
                return false
            }
            
        }

    }


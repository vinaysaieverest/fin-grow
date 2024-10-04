import { data } from "../../data"

export const login=(username:string,password:string)=>{
    if(username=data[0].name, password=data[0].password){
        return true
    }
    return false;
}
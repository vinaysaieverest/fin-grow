import { data } from "../../data"

export const login=(username:string,password:string)=>{
    if(username=data[0].name, password=data[0].password){
        return true
    }
    // if(username='visa',password='1234'){
    //     return false
    // }
    // if(username='',password='1234'){
    //     return false
    // }
    // if(username='',password=''){
    //     return false
    // }
    return false;
}
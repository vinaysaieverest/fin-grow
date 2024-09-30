import { data } from "../../data"

const target = data[0].savings.totalSavings
let savedAmount = data[0].savings.currentAmount
export const saving =(amount:number)=>{
    savedAmount =savedAmount+amount
    return savedAmount
}
export const progres = (amount:number)=>{
    if(amount===target){
        return true
    }
    const percentage = amount/target
    return percentage*100
}

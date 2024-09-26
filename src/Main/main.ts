export const transactions=(amount:number,type:string)=>{
    let intialAmount = 10000
    let amountAfterTranacation
    if(type==="debit"){
        amountAfterTranacation =  intialAmount-amount
    }
    if(type==="credit"){
        amountAfterTranacation = intialAmount+amount
    }
    if(type==="balanceCheck"){
        if(intialAmount===0){
            return "NoBalance"
        }
    }
    return amountAfterTranacation

}
export const budget=(salary: number, Groceries: number, Entertainment: number)=>{
    return salary-Groceries-Entertainment;

}

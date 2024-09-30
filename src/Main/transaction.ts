
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
    if(type==="debit"){
        if(amount>intialAmount){
            return false
    }
    }
    return amountAfterTranacation
}
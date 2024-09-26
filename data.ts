type TypeCart = {
    name:string,
    salary:number,
    otherIncome:number
    categories:Categories
    savings:Savings

}
type  Categories={
    Groceries:number,
    Entertainment:number

}
type Savings={
    emergency:number,
    totalSavings:number,
    currentAmount:number

}


export const data:TypeCart[] = [
    {
        name:"vinay",
        salary :10000,
        otherIncome:2000,
        categories:
            {
                Groceries:1000,
                Entertainment:1000,
            }
        ,
        savings:
            {
                emergency:1000,
                totalSavings:7000,
                currentAmount:4000

            }
        
    }
]
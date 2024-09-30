type TypeCart = {
    name:string,
    password:string
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
    goal:string,
    totalSavings:number,
    currentAmount:number

}


export const data:TypeCart[] = [
    {
        name:"vinay",
        password:"Vinaysai02",
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
                goal:"Bike",
                totalSavings:50000,
                currentAmount:20000

            }
        
    }
]
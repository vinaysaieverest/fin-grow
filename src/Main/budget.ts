
export const Groceriesbudget=(budget: number, spent: number)=>{
    if(budget<spent){
        return "Budget limit exceeds"
    }
    budget = budget-spent;
    return budget
}
export const Entertainmentbudget=(budget: number, spent: number)=>{
    if(budget<spent){
        return "Budget limit exceeds"
    }
    budget = budget-spent;
    return budget
}



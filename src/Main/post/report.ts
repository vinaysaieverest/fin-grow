import { data, TypeCart } from "../data"


export const report =(user:TypeCart)=>{
   const  totalIncome = user.salary+user.otherIncome;
   const totalSpend = user.categories.Entertainment+user.categories.Groceries
   const Groceries = user.categories.Groceries;
   const  Entertainment= user.categories.Entertainment;
   const goalReport = (user.savings.currentAmount/user.savings.totalSavings)*100;
   return `totalIncome = ${totalIncome} 
                         totalSpend = ${totalSpend}
                         Groceries:${Groceries}
                         Entertainment:${Entertainment}
                         goalReport:${goalReport}%
                         `    
}

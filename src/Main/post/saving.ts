import { DataModel } from "../../../models";
export class Saving{
    name:string;
    goal:string;
    totalSavings:number
    constructor(name:string,goal:string,totalSavings:number){
        this.name=name;
        this.goal=goal;
        this.totalSavings=totalSavings;
    }
    async setSaving() {
        try{
            const name = this.name;
            const goal = this.goal;
            const totalSavings = this.totalSavings
            const currentAmount = 0
            const user = await DataModel.findOne({ name });
            if (!user) {
                console.log("No user found");
              return false
              
            }
            user.savings.push({ goal, totalSavings,currentAmount});
            await user.save();
            console.log("Saving created")
            return true
        }
        catch(e){
            console.log(e)
            return false
        }

      
    }
}
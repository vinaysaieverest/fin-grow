import axios from "axios";

export const goal = async (targetAmount:number,currentAmount:number,goalName:string,name:string) => {
    try {
      const response = await axios.post('http://localhost:5005/api/goal', {
        targetAmount,currentAmount,goalName,name
      });
      return true
    } catch (error) {
      console.error('Error pushing data to the database:', error);
    }
  };
  

import axios from "axios";

export const transaction = async (amount:number,type:string,name:string) => {
    try {
      const response = await axios.post('http://localhost:5005/api/transaction', {
       amount,type,name
       
      });
      return true
      
    } catch (error) {
      console.error('Error pushing data to the database:', error);
    }
    
  };
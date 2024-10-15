import { Request, Response, Router } from 'express';
import { DataModel } from '../../models';
import { Register } from '../../src/main/post/register';
const express = require("express")
const router = express.Router();
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
      const { name,password,salary} = req.body as { name:string,password:string,salary:number};
    
      const user1 = new Register(name, password, salary);
        const result = await user1.setRegister();
        res.status(200).json(result)
      
     
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;
import { Request, Response, Router } from 'express';
import { DataModel } from '../../models';
import { Budget } from '../../src/main/post/budget';
const express = require("express")
const router = express.Router();



router.post('/:name', async (req: Request, res: Response) => {
  try {
    const name = req.params.name
    const {category,amount} = req.body as { category: string; amount: number };
    const user = new Budget(name,category,amount)
    const results = user.setBudget()

    res.status(200).json({message:"Budget created"})
  } catch (error) {
    console.error('Error saving user to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router

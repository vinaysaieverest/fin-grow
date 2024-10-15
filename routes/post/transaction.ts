import { Request, Response, Router } from 'express';
import { DataModel } from '../../models';
import { TransactionService } from '../../src/main/post/transaction';
const express = require("express")
const router = express.Router();

router.post('/:name', async (req: Request, res: Response): Promise<void> => {
  try {
    const { transactionName, amount, type,category } = req.body as { transactionName:string,amount: number; type: string;category:string};
    const name = req.params.name
    const user = new TransactionService (name,transactionName,amount,type,category)
    const result = await user.makeTransaction()
    res.status(200).json(result)
  } catch (error) {
    console.error('Error saving user to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;


import { Request, Response } from 'express';
import { Transaction } from '../../src/main/get/transactionGet'; 
const express = require("express")
const router = express.Router();
router.get('/:name', async (req: Request, res: Response) => {
  try {
    const name = req.params.name
    const user = new Transaction(name)
    const result = await user.getTransaction()
    res.status(200).json(result)
  } catch (error) {
    console.error('Error saving user to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router
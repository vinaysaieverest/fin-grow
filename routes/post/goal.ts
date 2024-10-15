import { Request, Response, Router } from 'express';
import { Saving } from '../../src/main/post/saving';
const express = require("express")
const router = express.Router();


router.post('/', async (req: Request, res: Response) => {
  try {
    const { name,savingName,amount} = req.body as { name: string; savingName: string; amount: number ; };
    const user = new Saving(name,savingName,amount)
    const results = await user.setSaving()
    res.status(200).json({message:"Saving created"})

  } catch (error) {
    console.error('Error saving user to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router
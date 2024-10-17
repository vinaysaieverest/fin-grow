import { Request, Response, Router } from 'express';
import { Saving } from '../../src/main/post/saving';
const express = require("express")
const router = express.Router();


router.post('/:name', async (req: Request, res: Response) => {
  try {
    const name = req.params.name
    const {goal,totalSavings} = req.body as { goal: string; totalSavings: number };
    const user = new Saving(name,goal,totalSavings)
    const results = await user.setSaving()
    res.status(200).json({message:"Saving created"})

  } catch (error) {
    console.error('Error saving user to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router
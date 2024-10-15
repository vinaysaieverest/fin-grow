
import { Request, Response, Router } from 'express';
import { DataModel } from '../../models';
import { Report } from '../../src/main/get/reports';
const express = require("express");
const router = express.Router();

router.get('/:name', async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const user = new Report(name);
    const results = await user.setReport()
    res.status(200).json(results)
  } catch (error) {
    console.error('Error fetching user data from the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;

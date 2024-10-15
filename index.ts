
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
import { data } from "./src/main/data";
import { DataModel } from "./models";
export const app = express();
const transaction = require('./routes/post/transaction');
const saving = require('./routes/post/goal');
const budget = require('./routes/post/budget')
const getTransactions = require('./routes/get/transactionsGet')
const register = require('./routes/post/register')
const login = require('./routes/post/login')
const report = require('./routes/get/report')

app.use(express.json());
app.use(cors());
module.exports = app

async function connection() {
  try {
    await mongoose.connect('mongodb://localhost/FinGrow');
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to the database", err);
    
  }
}
async function create(){
    try{
        await DataModel.create(data[1])
        console.log("created")
    }
    catch(e){
        console.log(e)
    }
}

async function insert() {
  try {
    await DataModel.insertMany(data);
    console.log("Inserted successfully");
  } catch (e) {
    console.log("Error inserting data:", e);
  }
}
const queries = async () => {
  try {
    app.use('/api/transaction', transaction);
    app.use('/api/saving', saving);
    app.use('/api/budget',budget)
    app.use('/api/recenttransactions',getTransactions)
    app.use('/api/register',register)
    app.use('/api/login',login)
    app.use('/api/report',report)
  } catch (err) {
    console.log("Error setting up routes:", err);
  }
};
async function startServer() {
  try {
    await connection(); 
    // await insert(); 
    queries();   
    // create()

    const PORT = process.env.PORT || 5005;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) { 
    console.error("Error starting server:", error);
  }
}
startServer(); 

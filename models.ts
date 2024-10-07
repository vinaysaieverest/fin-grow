const mongoose = require("mongoose");
export const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },
  otherIncome: {
    type: Number,
  },
  categories: [
    {
      budgetName: {
        type: String,
      },
      amount: {
        type: Number,
      },
    },
  ],
  transaction: [
    {
      transactionName:{
        type:String
      },

      amount: {
        type: Number,
      },
      type: {
        type: String,
      },
      category:{
        type:String
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

    },
  ],
  savings: [
    {
      goal: {
        type: String,
      },
      totalSavings: {
        type: Number,
      },
      currentAmount: {
        type: Number,
      },
      createdAt: {
        type: Date,
        default: Date.now, 
      },
    },
  ],
 
});


export const DataModel = mongoose.model("Data", dataSchema);

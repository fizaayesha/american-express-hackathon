const express = require("express");
const router = express.Router();
const TransHist = require("../models/transactions");


//Routing for transactions and transaction history
//get trasactions
router.route("/transactions").get((req, res) => {
  TransHist.find()
    .then((transaction) => res.send(transaction))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/transactions/:id").get((req, res) => {
  TransHist.findById(req.params.id)
    .then((transaction) => res.json(transaction))
    .catch((err) => res.status(400).json("Error:" + err));
});

//add trasactions
router.route("/transactions/add").post((req, res) => {
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const amount = req.body.amount;
  const date = req.body.date;
  const newtransaction = new TransHist({
    sender,
    receiver,
    amount,
    date,
  });
  newtransaction
    .save()
    .then(() => res.json("transaction added in history"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
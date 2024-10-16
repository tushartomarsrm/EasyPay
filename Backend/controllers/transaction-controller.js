const Account = require("../models/account-model");
const User = require("../models/user-model");
const Transaction = require("../models/transaction-model");

const makeTransaction = async (req, res) => {
	const user = req.user;
	const { from_account, to_account, amount ,time} = req.body;
	try {
		var from = await Account.findOne({ account_no: from_account });
		var to = await Account.findOne({ account_no: to_account });
		if (!from) {
			return res.status(404).json({ message: "Account does not exists1" });
		} else if (!to) {
			return res.status(404).json({ message: "Account does not exists2" });
		} else {
			if (from.balance >= amount) {
				from.balance = from.balance - Number(amount);
				to.balance = to.balance + Number(amount);
				await from.save();
				await to.save();
				const tnx = await Transaction.create({from_name:from.username,from_account:from,to_name:to.username,to_account:to,amount:Number(amount)})
				let reciever = await User.findOne({ username: to.username });
				let transactions = user.transactions;
				transactions.push(tnx);
				user.transactions = transactions;
				await user.save();
				reciever.transactions.push(tnx);
				await reciever.save();
				return res.status(200).json({ message: "Payment Successful", data: tnx });
			} else {
				return res.status(400).json({ message: "Payment Failed Not enough balance" });
			}
		}
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error :" + err });
	}
};

const getUserTransactions = async (req, res, next) => {
	const user = req.user;
	try {
		const newUser = await User.findById(user._id).sort({createdAt:1});
		const transactions = newUser.transactions;
		var trnxs = [];
		await Promise.all(
			transactions.map(async (tnx) => {
				var t = await Transaction.findById(tnx._id);
				if (t.from_name.toLowerCase() === user.username.toLowerCase()) {
					t = { ...t._doc ,status: "sent" };
				} else {
					t = { ...t._doc, status: "received" };
				}
				await trnxs.push(t);
				// await trnxs.p
			})
		);
		return res.status(200).json(trnxs);
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error :" + err });
	}
};

module.exports = { makeTransaction, getUserTransactions };

const User = require("../models/user-model");
const Account = require("../models/account-model");

const addNewBank = async (req, res) => {
	const user = req.user;
	const { username, account_no, bank_name } = req.body;
	try {
		let account = await Account.findOne({
			bank_name: bank_name,
			account_no: account_no,
		});
		if (!account) {
			// return res
			// 	.status(404)
			// 	.json({ message: "Account with those details dont exist" });
			await Account.create({username,bank_name,account_no});
			account = await Account.findOne({
				bank_name: bank_name,
				account_no: account_no,
			});
		}
		if (account.username === username) {
			try {
				user.banks.forEach((bank) => {
					if (bank._id.toString() === account._id.toString())
						throw BreakException;
				});
			} catch (e) {
				return res.status(401).json({ message: "Account already added" });
			}

			let newBanks = user.banks;

			newBanks.push(account);
			user.banks = newBanks;
			const newUser = await user.save();
			return res
				.status(200)
				.json({ message: "Account added successfully", banks: newBanks });
		} else {
			return res
				.status(401)
				.json({ message: "You are not Authorized to add that account" });
		}
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error :" + err });
	}
};

const deleteBank = async (req, res, next) => {
	const user = req.user;
	const { id } = req.body;
	try {
		const account = await Account.findOne({ _id: id });
		if (!account) {
			return res
				.status(404)
				.json({ message: "Account with those details dont exist" });
		}
		let newBanks = user.banks.filter((bank) => {
			return bank._id.toString() !== account._id.toString();
		});
		user.banks = newBanks;
		const newUser = await user.save();
		res.status(200).json({ message: "Account added Deleted", banks: newBanks });
	} catch (err) {
		res.status(500).json({ msg: "Internal Server Error :" + err });
	}
};

const getBank = async (req, res, next) => {
	try {
		const id = req.params.id;
		const account = await Account.findById({ _id: id });
		if (!account) {
			return res.status(404).json("Account not found");
		} else {
			return res.status(201).json({ account });
		}
	} catch (err) {
		res.status(500).json({ msg: "Internal Server Error :" + err });
	}
	next();
};
const getUserAccounts = async (req, res, next) => {
	const user = req.user;
	console.log(user);
	try {
		var accounts = [];
		await Promise.all(
			user.banks.map(async (acc) => {
				var a = await Account.findById(acc._id);
				await accounts.push(a);
			})
		);
		res.status(200).json(accounts);
	} catch (err) {
		res.status(500).json({ msg: "Internal Server Error :" + err });
	}
	next();
};

module.exports = { addNewBank, deleteBank, getBank, getUserAccounts };

const Account = require("../models/account-model");

// only for internal use
const addBank = async (req, res) => {
    try{
        const {username,account_no,bank_name,balance} = req.body;
        let account = await Account.findOne({account_no});
        if(!account){
            account = await Account.create({username,bank_name,account_no,balance});
            return res.status(200).json({message:"Account added successfully",data:account});
        }
        else{
            return res.status(403).json({message:"Account already exists"});
        }
    }
	catch(err){
        return res.status(500).json({message:err})
    }
};

const getAccount = async(req,res) => {
    try{
        const {id} = req.body
        const account = await Account.findOne({_id:id});
        if(account){
            return res.status(200).json({account});
        }else{
            return res.status(404).json({message:"Account does not exists"});
        }
    }
    catch(err){
        return res.status(500).json({message:err})
    }
}

module.exports = {addBank,getAccount}
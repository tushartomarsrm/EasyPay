const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		minLength: [3, "Username must be atleast 3 characters long"],
	},
	bank_name: {
		type: String,
		required: [true, "Bank Name is required"],
	},
	account_no: {
		type: String,
		required: [true, "Account No. is required"],
		minLength:[12,"Account no must be 12 characters long"],
        maxLength:[12,"Account no must be 12 characters long"]
	},
	balance: {
		type: Number,
		default: 10000,
		validate: {
            validator: function(value) {
                return value >= 0;
            },
            message: 'Balance must be greater than or equal to 0'
        }
	},
},{
	timestamps:true
}
);

const Account=new mongoose.model('Account',accountSchema);

module.exports=Account;
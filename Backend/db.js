const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;
const connectToDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log('Connected to Database');
    }
    catch(err){
        console.log(err);
        process.exit(0);
    }
}

module.exports=connectToDb;
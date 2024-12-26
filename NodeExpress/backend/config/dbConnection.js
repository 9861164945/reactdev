const mongoose=require('mongoose');
const connectDb=async()=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/TestBackend`);
        console.log("Connected to DataBase");
    }
    catch(error)
    {
        console.log(`Error Connecting to MongoDb`,error);
        process.exit(1);
    }
};
module.exports=connectDb;
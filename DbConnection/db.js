

const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB = 'mongodb+srv://Oluwatobi:cai3XqJJxBYXv3Rw@cluster0-iblgy.mongodb.net/test?retryWrites=true&w=majority'

    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("DB connected");
    } catch (err) {
        console.log(err.message);
        console.log('error occur')
        process.exit(1);
        
    }
}

module.exports = dbConnect;
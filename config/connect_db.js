const mongoose = require('mongoose');

const connectDB = async() =>{
    try 
    {
        const res = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true, //allow users to fall back to the old parser if they find a bug in the new parser. 
            useUnifiedTopology: true // opt in to using the MongoDB driver's new connection management engine.
        });

        console.log('database connected')
    }
    catch (error) {
        console.error(error)

    }
}
module.exports = connectDB;
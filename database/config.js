const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.DB_CNN);
            // UseNewUrlParser: true,
            // UseUnifiedTopology: true,
            // useCreateIndex: true
    
        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inniciar la BD');
        
    }
};

module.exports = {
    dbConnection
}
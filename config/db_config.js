const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error connecting to database: ', error);
        process.exit(1); // Stop the process if connection fails
    }
};

module.exports = dbConnection;

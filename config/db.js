const mongoose = require('mongoose');

const initializeDB = async (connectionString) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
};

module.exports = initializeDB;

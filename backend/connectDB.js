const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log("Database Connected")
    } catch (error) {
        console.error("DB connection failed")
    }
};

module.exports = connectToDB;
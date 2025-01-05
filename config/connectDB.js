const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Validate the environment variable
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB");

        // Handle connection errors after connection
        mongoose.connection.on('error', (error) => {
            console.error("MongoDB connection error:", error);
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;

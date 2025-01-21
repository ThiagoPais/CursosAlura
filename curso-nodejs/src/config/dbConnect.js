import mongoose from "mongoose";

async function connectToDatabase() {
    const MONGODB_PORT = 27017;
    const MONGODB_NAME = "/book-store-alura"
    const MONGODB_HOST = "mongodb://admin:admin123@127.0.0.1:" + MONGODB_PORT + MONGODB_NAME + "?authSource=admin";

    if (mongoose.connection.readyState === 1) {
        return;
    }
    
    try {
        await mongoose.connect(MONGODB_HOST);
        console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }

    return mongoose.connection;
};

export default connectToDatabase;
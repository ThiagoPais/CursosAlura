import mongoose from "mongoose";

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_HOST);
        console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }

    return mongoose.connection;
};

export default connectToDatabase;
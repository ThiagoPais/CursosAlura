import mongoose from "mongoose";

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return;
    }
    
    try {
        await mongoose.connect("mongodb+srv://admin:admin@livraria-curso-alura.l58yu.mongodb.net/livraria-curso?retryWrites=true&w=majority&appName=livraria-curso-alura");
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }

    return mongoose.connection;
};

export default connectToDatabase;
import mongoose from "mongoose";
import NoAuthorError from "../errors/NoAuthorError.js";

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        console.log(error.errors);
        res.status(400).json({ message: "ID inválido!" });
        return;
    }
    else if (error instanceof mongoose.Error.ValidationError) {
        const errorMessages = Object.values(error.errors)
            .map(err => err.message)
            .join("; ");

        res.status(400).json({ message: errorMessages });
        return;
    }
    else if (error instanceof NoAuthorError) {
        res.status(400).json({ message: error.message });
        return;
    }
    console.log(error);
    res.status(500).json({ message: "Falha ao processar requisição - Erro no servidor" });
}

export default errorHandler;
import mongoose from "mongoose";

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "ID inválido!" });
        return;
    }
    res.status(500).json({ message: "Falha ao processar requisição - Erro no servidor" });
}

export default errorHandler;
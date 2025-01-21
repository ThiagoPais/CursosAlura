import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const connection = await connectToDatabase();

app.delete("/books/:id", (req, res) => {
    console.log("Requisição recebida");
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

export default app;
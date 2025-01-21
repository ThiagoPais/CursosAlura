import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const app = express();
app.use(express.json());

const connection = await connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", async (req, res) => {
    const bookList = await book.find({});
    res.status(200).json(bookList);
});

app.post("/books", (req, res) => {
    console.log("Requisição recebida");
    books.push(req.body);
    res.status(201).send("Registro feito com sucesso!");
});

app.get("/books/:id", (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(books[index]);
});

app.put("/books/:id", (req, res) => {
    console.log("Requisição recebida");
    const index = findBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books[index]);
});

app.delete("/books/:id", (req, res) => {
    console.log("Requisição recebida");
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

export default app;
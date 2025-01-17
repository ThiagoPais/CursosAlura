import express from "express";
import connectToDatabase from "./config/dbConnect.js";

const app = express();
app.use(express.json());

async function initializeDatabase() {
    const connection = await connectToDatabase();
    connection.on("error", (error) => {
        console.log("Erro ao conectar ao banco de dados: " + error);
    });
    connection.once("open", () => {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    });
}

initializeDatabase();

const books = [
    {
        id: 1,
        title: "Rangers"
    },
    {
        id: 2,
        title: "Harry Potter"
    },
    {
        id: 3,
        title: "Lord of the Rings"
    }
]

function findBook(id){
    return books.findIndex(book => book.id === parseInt(id));
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
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
import express from "express";

const app = express();
app.use(express.json());

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
    books.push(req.body);
    res.status(201).send("Registro feito com sucesso!");
});

app.get("/books/:id", (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(books[index]);
})

export default app;
import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {
    static async getBooks(req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async postBook(req, res) {
        const bookInfo = req.body;
        try {
            const authorFound = await author.findById(bookInfo.author);
            const bookComposed = { ...bookInfo, author: { ...authorFound._doc } };
            const newBook = await book.create(bookComposed);
            res.status(201).json({ message: "Registro feito com sucesso!", book: newBook });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro removido com sucesso!", book: bookFound });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir livro` });
        }
    }

    static async getBooksByPublisher(req, res) {
        const publisher = req.query.publisher;
        try {
            const bookList = await book.find({ publisher: publisher });
            res.status(200).json(bookList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao processar requisição` });
        }
    }
};

export default BookController;
import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {
    static async getBooks(req, res, next) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            next(error);
        }
    }

    static async getBookById(req, res, next) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            next(error);
        }
    }

    static async postBook(req, res, next) {
        const bookInfo = req.body;
        try {
            const authorFound = await author.findById(bookInfo.author);
            const bookComposed = { ...bookInfo, author: { ...authorFound._doc } };
            const newBook = await book.create(bookComposed);
            res.status(201).json({ message: "Registro feito com sucesso!", book: newBook });
        } catch (error) {
            next(error);
        }
    }

    static async updateBook(req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id;
            const bookFound = await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro removido com sucesso!", book: bookFound });
        } catch (error) {
            next(error);
        }
    }

    static async getBooksByPublisher(req, res, next) {
        const publisher = req.query.publisher;
        try {
            const bookList = await book.find({ publisher: publisher });
            res.status(200).json(bookList);
        } catch (error) {
            next(error);
        }
    }
};

export default BookController;
import book from "../models/Book.js";
import { author as authors} from "../models/Author.js";
import NoAuthorError from "../errors/NoAuthorError.js";

class BookController {
    static async getBooks(req, res, next) {
        try {
            let { limit = 5, page = 1, sort = "title:1" } = req.query;

            let [sortField, order] = sort.split(":");

            limit = parseInt(limit);
            page = parseInt(page);
            order = parseInt(order);

            if(limit > 0 && page > 0){
                const bookList = await book.find({})
                    .sort({ [sortField]: order })
                    .skip((page - 1) * limit)
                    .limit(parseInt(limit));

                res.status(200).json(bookList);
            }
            else{
                res.status(400).json({ status: 400, message: "Os valores de limit e page devem ser maiores que 0" });
            }
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
            if (bookInfo.author === undefined) {
                throw new NoAuthorError("O autor do livro é obrigatório", 400);
            }
            const authorFound = await authors.findById(bookInfo.author);
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

    static async getBooksByFilter(req, res, next) {
        try {
            const search = await processSearch(req.query);
            const bookList = await book.find(search);
            res.status(200).json(bookList);
        } catch (error) {
            next(error);
        }
    }
};

async function processSearch(query){
    const { publisher, title, minPages, maxPages, author } = query;

    const search = {};
    if (publisher) search.publisher = { $regex: publisher, $options: "i" };
    if (title) search.title = { $regex: title, $options: "i" };
    
    if (minPages || maxPages) search.pages = {};
    if (minPages) search.pages.$gte = minPages;
    if (maxPages) search.pages.$lte = maxPages;

    if (author) {
        const authorFound = await authors.find({ name: { $regex: author, $options: "i" } });
        search.author = authorFound;
    }
    
    return search;
}

export default BookController;
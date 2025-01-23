import { author } from "../models/Author.js";

class AuthorController {
    static async getAuthors(req, res, next) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            next(error);
        }
    }

    static async getAuthorById(req, res, next) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);

            if (!authorFound) {
                res.status(404).json({ message: "Autor não encontrado!" });
                return;
            }
            res.status(200).json(authorFound);
        } catch (error) {
            next(error);
        }
    }

    static async postAuthor(req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Registro feito com sucesso!", author: newAuthor });
        } catch (error) {
            next(error);
        }
    }

    static async updateAuthor(req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const id = req.params.id;
            const authorFound = await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor removido com sucesso!", author: authorFound });
        } catch (error) {
            next(error);
        }
    }
};

export default AuthorController;
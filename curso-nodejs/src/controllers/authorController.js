import { author } from "../models/Author.js";

class AuthorController {
    static async getAuthors(req, res) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async postAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Registro feito com sucesso!", author: newAuthor });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - Falha ao processar requisição` });
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor removido com sucesso!", author: authorFound });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir autor` });
        }
    }
};

export default AuthorController;
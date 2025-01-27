import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
        type: String,
        required: [true, "O título do livro é obrigatório"]
    },
    author: {
        type: authorSchema,
        required: [true, "O autor do livro é obrigatório"]
    },
    publisher: {
        type: String,
        required: [true, "A editora do livro é obrigatória"]
    },
    pages: {
        type: Number,
        required: [true, "O número de páginas do livro é obrigatório"],
        min: [1, "O livro deve ter no mínimo 1 página"],
        max: [3000, "O livro deve ter no máximo 3000 páginas"]
    },
    price: { type: Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
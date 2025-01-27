import express from "express";
import BookController from "../controllers/bookController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes.get("/books", BookController.getBooks, pagination);
routes.post("/books", BookController.postBook);
routes.get("/books/search", BookController.getBooksByFilter, pagination);
routes.get("/books/:id", BookController.getBookById);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;
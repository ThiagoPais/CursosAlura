import express from "express";
import AuthorController from "../controllers/authorController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAuthors, pagination);
routes.get("/authors/:id", AuthorController.getAuthorById);
routes.post("/authors", AuthorController.postAuthor);
routes.put("/authors/:id", AuthorController.updateAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;
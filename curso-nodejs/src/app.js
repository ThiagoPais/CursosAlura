import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const connection = await connectToDatabase();

const app = express();
app.use(errorHandler);
routes(app);

export default app;
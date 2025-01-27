import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const connection = await connectToDatabase();

const app = express();
routes(app);
app.use(errorHandler);

export default app;
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, "localhost", () => {
    console.log("Servidor ativo!");
});
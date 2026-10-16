import "dotenv/config";
import express from "express";
import ProxyController from "./controllers/ProxyController.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get('/connect', ProxyController.connect);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`started on ${PORT}`));

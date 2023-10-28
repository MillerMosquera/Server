import express from "express";
import dbConfig from "./Config/dbConfig.js";
import userRoutes from "./Routes/index.js";
import catRoutes from "./Routes/CategorieRoutes.js";
import artistRouter from './Routes/ArtistRouter.js';
import songRouter from "./Routes/SongRouter.js";
import cors from "cors";
import { PORT } from "./Config/config.js";

const app = express();

try {
    await dbConfig.authenticate();
    console.log("Database commected....");
} catch (error) {
    console.error("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/categories', catRoutes);
app.use('/artist', artistRouter);
app.use('/songs', songRouter);

app.listen(PORT, () => console.log("API running at port 5000"));
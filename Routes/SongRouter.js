import express from "express";
import { createSong, getAllSongs, getSongById } from "../Controller/SongController.js";

const songRouter = express.Router();
songRouter.get('/allSongs', getAllSongs);
songRouter.post('/findSong', getSongById);
songRouter.post('/createSong', createSong);

export default songRouter;
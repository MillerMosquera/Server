import express from "express";
import { createArtist, getAllArtist, getArtistById } from "../Controller/ArtistController.js";

const routerArtist = express.Router();
routerArtist.get('/artistList', getAllArtist);
routerArtist.post('/newArtist', createArtist);
routerArtist.post('/findArtist', getArtistById);

export default routerArtist;
import express from "express";
import { createCategorie,  getAll, getById } from "../Controller/CategorieController.js";

const routerCategorie = express.Router();

//Routes for songs
routerCategorie.get('/all', getAll);
routerCategorie.post('/findById', getById);
routerCategorie.post('/newCategorie', createCategorie);

export default routerCategorie;
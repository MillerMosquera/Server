import Categorie from "../Model/CategorieModel.js";

export const getAll = async (request, response) => {
    try {
        const categories = await Categorie.findAll();
        response.json(categories);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const getById = async (request, response) => {
    try {
        const categorie = await Categorie.findOne({
            where: {
                idcategorie: request.body.idCategorie
            }
        });
        response.json(categorie);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const createCategorie = async(request, response) => {
    try {
        await Categorie.create(request.body);
        response.json(
            { message: "Categorie created!"}
        );
    } catch (error) {
        response.json({message: error.message});
    }
}
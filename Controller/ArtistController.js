import Artist from "../Model/ArtistModel.js";

export const getAllArtist = async(request, response) => {
    try {
        const artistsList = await Artist.findAll();
        response.json(artistsList);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const getArtistById = async(request, response) => {
    try {
        const artist = await Artist.findOne({
            where: {
                idArtist: request.body.idArtist
            }
        });
        response.json(artist);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const createArtist = async(request, response) =>{
    try {
        await Artist.create(request.body);
        response.json({
            message: "Artist created!"
        });
    } catch (error) {
        response.json({message: error.message});
    }
}
import Song from "../Model/SongModel.js";

export const getAllSongs = async(request, response) => {
    try {
        const songList = await Song.findAll();
        response.json(songList);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const getSongById = async(request, response) => {
    try {
        const artist = await Song.findOne({
            where: {
                idsong: request.body.idSong
            }
        });
        response.json(artist);
    } catch (error) {
        response.json({message: error.message});
    }
}

export const createSong = async(request, response) =>{
    try {
        await Song.create(request.body);
        response.json({
            message: "Song created!"
        });
    } catch (error) {
        response.json({message: error.message});
    }
}
import { Sequelize } from "sequelize";
import dbConn from "../Config/dbConfig.js";
import Categorie from "./CategorieModel.js";
import Artist from "./ArtistModel.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const Song = dbConn.define('song', {
    idSong: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    songName: {
        type: DataTypes.STRING
    },
    idCategorie: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorie,
            key: 'idcategorie'
        }
    },
    idArtist: {
        type: DataTypes.INTEGER,
        references: {
            model: Artist,
            key: 'idArtist'
        }
    },
    email: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'email'
        }
    },
    active: {
        type: DataTypes.BOOLEAN
    }
},
{
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
});

export default Song;
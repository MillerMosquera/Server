import { Sequelize} from "sequelize";
import dbConn from "../Config/dbConfig.js";
import Categorie from "./CategorieModel.js";

const { DataTypes } = Sequelize;

const Artist = dbConn.define('artist', {
    idartist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    artistName: {
        type: DataTypes.STRING
    },
    idCategorie: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorie,
            key: 'idcategorie'
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

export default Artist;
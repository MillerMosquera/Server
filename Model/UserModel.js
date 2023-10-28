import { Sequelize } from "sequelize";
import dbConn from "../Config/dbConfig.js";

const { DataTypes } = Sequelize;

const User = dbConn.define('users', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    }, 
    userName: {
        type: DataTypes.STRING
    }, 
    birthDate: {
        type: DataTypes.DATE
    }, 
    photo: {
        type: DataTypes.STRING
    }, 
    password: {
        type: DataTypes.STRING
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

export default User;


// var mysqlConn = require('mysql');
// var conn = mysqlConn.createConnection({
//     host: 'localhost',
//     database: 'pow_project',
//     user: 'pow_user',
//     password: 'pow123'
// });

// conn.connect((error) => {
//     if(error){
//         console.log("Error de conexion: " + error.stack);
//         return;
//     }
//     console.log("Connection successful -> " + conn.threadId);
// });

// conn.query("INSERT INTO pow_project.users (email, userName, birthDate, photo, password, active) VALUES ('danipra2051@gmail.com', 'danipra2050', '1988-09-19', null, '123', '1')", (error, result) => {
//     if(error) throw error;

//     console.log(result);
// });

// conn.query('SELECT email, userName, birthDate, photo, password, active FROM pow_project.users', (error, result, fields) => {
//     if(error)
//         throw error;
    
//     result.forEach(obj => {
//         console.table(obj);
//     });
// });

// conn.end();
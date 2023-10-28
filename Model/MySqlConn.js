var mysqlConn = require('mysql');
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
} from "../Config/config.js"
var conn = mysqlConn.createConnection({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
});

conn.connect((error) => {
    if(error){
        console.log("Error de conexion: " + error.stack);
        return;
    }
    console.log("Connection successful -> " + conn.threadId);
});

conn.query("INSERT INTO pow_project.users (email, userName, birthDate, photo, password, active) VALUES ('danipra2051@gmail.com', 'danipra2050', '1988-09-19', null, '123', '1')", (error, result) => {
    if(error) throw error;

    console.log(result);
});

conn.query('SELECT email, userName, birthDate, photo, password, active FROM pow_project.users', (error, result, fields) => {
    if(error)
        throw error;
    
    result.forEach(obj => {
        console.table(obj);
    });
});

conn.query('SELECT * FROM pow_project.artis', (error, result, fields) => {
    if (error)
        throw error;

    result.forEach(obj => {
        console.table(obj);
    });
});

conn.end();
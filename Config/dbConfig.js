import { Sequelize } from "sequelize";


const dbConn = new Sequelize('mysql://root:0104@localhost:3306/pow_project')

export default dbConn;


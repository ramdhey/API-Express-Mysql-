import {Sequelize} from "sequelize";


const db = new Sequelize('databasecrud_mysql','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;
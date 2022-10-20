import {Sequelize} from "sequelize";


const db = new Sequelize('sql6527938','sql6527938','jyX5hHAjJh',{
    host:'sql6.freesqldatabase.com',
    dialect:'mysql',
    port:'3306'
});

export default db;
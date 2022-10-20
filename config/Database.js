import {Sequelize} from "sequelize";


const db = new Sequelize('sql6527948','sql6527948','BSU9mT2pv7',{
    host:'sql6.freesqldatabase.com',
    dialect:'mysql',
    port:'3306'
});

export default db;
import {Sequelize} from "sequelize";


const db = new Sequelize('sql6527516','sql6527516','q2v2yNcJWv',{
    host:'sql6.freesqldatabase.com',
    dialect:'mysql',
    port:'3306'
});

export default db;
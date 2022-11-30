import {Sequelize} from "sequelize";


const db = new Sequelize('ramdheco_sql6527948','ramdheco_sql6527948','BSU9mT2pv7',{
    host:'server.cloudhebat.com',
    dialect:'mysql',
    port:'3306'
});

export default db;
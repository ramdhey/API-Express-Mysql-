import { Sequelize } from "sequelize";
import db from "../config/Database.js"



const {DataTypes} = Sequelize;


const User = db.define('users',{
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    createdAt: DataTypes.DATE 
    
},{
    freezeTableName:true
})


export default User;

(async()=>{
    await db.sync();

})();
 



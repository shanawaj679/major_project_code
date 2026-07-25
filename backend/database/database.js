import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:process.env.mysql_password,
    database:"Soil2sell",
});
export default db;
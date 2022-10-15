const { Sequelize } = require('sequelize');
require('dotenv').config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


let connectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false
    }
}

module.exports = connectDB;
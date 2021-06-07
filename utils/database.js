const Sequilize = require('sequelize');

const SCHEMA_NAME = 'node-todo';
const USER_NAME = 'root';
const PASSWORD = 'root'

const sequilize = new Sequilize(SCHEMA_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequilize;
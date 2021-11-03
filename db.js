const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:c188645ec8f3419abf51129081469837@localhost:5432/animal-server");

module.exports = db;
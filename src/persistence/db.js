const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@host.docker.internal:5432/spatial');

module.exports = {
  sequelize
};


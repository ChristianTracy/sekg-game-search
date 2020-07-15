'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cache extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cache.init({
    query: DataTypes.STRING,
    result: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cache',
  });
  return cache;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voter.init({
    id_voter: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_voter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    voting_token: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    voting_token_state: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Voter',
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "updated_at"
  });
  return Voter;
};
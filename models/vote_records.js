'use strict';
const {
  Model
} = require('sequelize');
const voter = require('./voter');
const candidate = require('./candidate');
module.exports = (sequelize, DataTypes) => {
  class Vote_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vote_records.init({
    id_vote_record: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_voter: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: voter,
          key:'id_voter'
        }
    },
    id_candidate: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: candidate,
          key: 'id_candidate'
        }
    },
    voting_state: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    deleted_at: {
        type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Vote_Records',
    tableName: 'vote_records',
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "updated_at"
  });
  return Vote_records;
};
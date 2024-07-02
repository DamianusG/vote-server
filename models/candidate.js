'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidate.init({
    id_candidate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nomor_candidate: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
    },
    nama_candidate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: DataTypes.STRING(500),
    deskripsi_candidate: {
      type: DataTypes.TEXT,
      defaultValue: 'Pejuang Contoh'
    },
    pengusung: {
      type: DataTypes.STRING,
      defaultValue: 'Contoh Pengusung'
    },
    current_position: {
      type: DataTypes.STRING,
      defaultValue: 'Contoh Jabatan'
    },
    contact_info: {
      type: DataTypes.TEXT,
      defaultValue: 'Twitter: @contoh'
    },
  }, {
    sequelize,
    modelName: 'Candidate',
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "updated_at"
  });
  return Candidate;
};
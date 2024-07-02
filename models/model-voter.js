const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../server');

const Voter = sequelize.define(
    'Voter',
    {
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
    },
    {
        timestamps: true,
        createdAt: "create_at",
        updatedAt: "updated_at"
    },
);

console.log(Voter === sequelize.models.Voter);

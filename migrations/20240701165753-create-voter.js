'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Voters', {
      id_voter: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      nama_voter: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      voting_token: {
          type: Sequelize.STRING(64),
          allowNull: false,
      },
      voting_token_state: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'update_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Voters');
  }
};
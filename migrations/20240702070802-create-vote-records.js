'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vote_records', {
      id_vote_record: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_voter: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'voters',
            key:'id_voter'
          }
      },
      id_candidate: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'candidates',
            key: 'id_candidate'
          }
      },
      voting_state: {
          type: Sequelize.INTEGER(1),
          allowNull: false,
      },
      deleted_at: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('Vote_records');
  }
};
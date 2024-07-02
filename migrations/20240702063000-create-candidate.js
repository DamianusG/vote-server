'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id_candidate: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nomor_candidate: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      nama_candidate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: Sequelize.STRING(500),
      deskripsi_candidate: {
        type: Sequelize.TEXT,
        defaultValue: 'Pejuang Contoh'
      },
      pengusung: {
        type: Sequelize.STRING,
        defaultValue: 'Contoh Pengusung'
      },
      current_position: {
        type: Sequelize.STRING,
        defaultValue: 'Contoh Jabatan'
      },
      contact_info: {
        type: Sequelize.TEXT,
        defaultValue: 'Twitter: @contoh'
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
    await queryInterface.dropTable('Candidates');
  }
};
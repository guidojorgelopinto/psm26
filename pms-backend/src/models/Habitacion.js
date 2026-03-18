const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Habitacion = sequelize.define('Habitacion', {
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'disponible'
  },
  precio: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
});

module.exports = Habitacion;




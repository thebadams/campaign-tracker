const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sesh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'campaignsession',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'note',
  },
);

module.exports = Note;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Campaign extends Model {}

Campaign.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'campaign',
  },
);

module.exports = Campaign;

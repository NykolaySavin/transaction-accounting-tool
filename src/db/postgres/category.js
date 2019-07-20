/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      percent: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "category"
    }
  );
}

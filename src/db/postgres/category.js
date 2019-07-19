/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER(11),
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
        type: DataTypes.INTEGER(3),
        allowNull: false
      }
    },
    {
      tableName: "category"
    }
  );
}

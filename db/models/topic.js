"use strict";
const { Model } = require("sequelize");
const question = require("./question");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      Topic.hasMany(Question, { foreignKey: "topic_id" });
      // define association here
    }
  }
  Topic.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};

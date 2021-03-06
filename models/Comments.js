// ID as primary key
// Body
// UserID as foreign key

// sequelize,
// timestamps: true,

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        body: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
            },
    },
      {
      sequelize,
      timestamps: true,
      modelName: 'comment',
    }
);

module.exports = Comment;
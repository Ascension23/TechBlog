// Post belongs to User Foreign Key is UserID
// Comments belong to User Foreign Key is UserID
// Post hasMany Comments Foreign Key is PostID

// sequelize,
// timestamps: true,

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
module.exports = {
  User,
  Comment,
  Post
};
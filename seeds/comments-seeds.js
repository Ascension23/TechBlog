const { Comments } = require('../models');

const commentData = [
  {
    body: 'Nice point of view',
  },
  {
    body: 'I really like your post',
  },
  {
    body: 'Fascinating',
},
  
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
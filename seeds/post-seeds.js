  
const { Post } = require('../models');

const postData = [
  {
    id:1,
    title: 'Tech Blog',
    body:"what a mess!"
  },
  {
    id:2,
    title: 'Tech Blog',
    body:"Is this working?!"
  },
  {
    id:3,
    title: 'Tech Blog',
    body:"Do we get an ID?!"
  },
  {
    id:4,
    title: 'Tech Blog',
    body:"what a mess!"
  },
  {
    id:5,
    title: 'Tech Blog',
    body:"Why is this happening to me??!"
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
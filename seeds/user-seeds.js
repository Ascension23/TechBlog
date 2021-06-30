const { User } = require('../models');

const userData = [
  {
    username: 'Sylvia',
    password: "Plath123",
    
  },
  {
    username: 'Jack',
    password: "Rose123",
  },
  {
    username: 'Antonio',
    password: "Maria123",
  },
  {
    username: 'Anabelle',
    password: "Home123",
  },
  {
    username: 'Justine',
    password: "Just123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
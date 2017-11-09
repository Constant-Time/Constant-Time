var db = require('./db.js');

var User = {};

User.addUser = (data) => {
  db('users')
  .insert({
    username: data.username,
    password: data.password
  })
  .catch(err => {
    console.error(err);
  });
};


//db and choose table
// then start query
//
User.selectAll = (data) => {
  return db('users').select('*')
}

User.findUser = (data) => {
  return db('users').where({username:data}).select('*')
}

module.exports = User;

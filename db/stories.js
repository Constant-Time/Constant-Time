var db = require('./db.js');

var Stories = {};

Stories.addStory = (data) => {
  db('stories')
  .insert({
    Title: data.Title,
  })
  .select('story_ID')
  .catch(err => {
    console.error(err);
  });
};


//db and choose table
// then start query
//
Stories.selectAll = (data) => {
  return db('stories').select('*')
}

Stories.selectStory_ID = (data) => {
  return db('stories').select('story_ID')
}

module.exports = Stories;

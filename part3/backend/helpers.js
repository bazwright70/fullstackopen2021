const notes = require('./notes.js');

module.exports = {
  generateId: function(){    
    const maxId = notes.length > 0 ?
    Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1;
  }
}
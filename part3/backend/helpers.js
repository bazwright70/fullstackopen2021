const notes = require('./notes.js');

module.exports = {
  generateId: function(){    
    const maxId = notes.length > 0 ?
    Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1;
  },
  errorHandler: function(error, request, response, next){
    console.error(error.message);
    switch(error.name){
      case 'CastError':
        return response.status(400).json({
          error: 'Malformatted Id'
        });
        break;
      case 'ValidationError':
        return response.status(400).json({
          error: error.message
        });
        break;
      default:
        return response.status(400).json({
          error: 'Action failed, unknow error'
        });
    }
   
    next(error) 
  },
}
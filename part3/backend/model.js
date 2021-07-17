require('dotenv').config();
const mongoose = require('mongoose');

// DB Connection
const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true
}
// database connection
mongoose.connect(process.env.MONGO_URI, options)
.then(conn => console.log('*** LOG: connected to db'))
.catch(err => {
  const error = new Error();
  console.log('*** LOG: mongo connection error',error.message, error)
})

// create schema
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
});

// schema options
noteSchema.set('toJSON',{
  transform: function(document, returnedObject){
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__v
    delete returnedObject._id
  }
})

// model export
module.exports = {
  Note: mongoose.model('note', noteSchema),
  connection: mongoose.connection
}
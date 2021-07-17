const mongoose = require('mongoose');
if(process.argv.length < 3){
  console.log('Please provide the password as an argument to "node mongos.js"');
  process.exit(1)
}

const password = process.argv[2];

const url =`mongodb+srv://fullstack:${password}@fullstackopen2021.8fbct.mongodb.net/note-app?retryWrites=true&w=majority`
const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
mongoose.connect(url,connOptions);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
});

const Note = mongoose.model('Note',noteSchema)

// GET ALL NOTES
Note.find({})
  .then( result => {
    result.forEach(note=>{ console.log(note);  });
    mongoose.connection.close()
  })
  .catch(err => console.log(err))

// ADD NEW NOTE
// const note = new Note({
//   content: 'Call bak functions Suck',
//   date: new Date(),
//   important: true
// });

// note.save()
//   .then( result => {
//     console.log('Note saved')
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     const error = new Error;
//     console.log(error.message);
//   });

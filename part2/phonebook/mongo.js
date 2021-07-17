const mongoose = require('mongoose')
const db = require('./db.json')
// check if password is supplied in node args
if(process.argv.length < 3){
  console.log('Please provide the mongo password as an argument to node');
  process.exit(1)
}

const password = process.argv[2];

// Monog Atlas connection parameters
const url = `mongodb+srv://fullstack:${password}@fullstackopen2021.8fbct.mongodb.net/phonebook?retryWrites=true&w=majority`
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

// connect to mongo Atlas
mongoose.connect(url, options)
.then(console.log('Connection to Mongo accepted'))
.catch(err => {
  console.log("Mongo Connection Error: ", err)
});

// create Mongo schema
const contactSchema = new mongoose.Schema({
  name: String,
  number: String
});
// create Mongo Model
const Contact = mongoose.model('contact', contactSchema);

// test db file 
//console.log(db)

// bulk create contact documents
// Contact.create(db.persons)
// .then(result => console.log("documents created"))
// .catch(err => console.log("Error creating documents", err))
// .finally(result => {
//   mongoose.connection.close();
//   console.log('connection closed');
// });

//retrieve all db contacts
Contact.find({})
  .then(contacts => {
    contacts.forEach(contact=>{
      console.log(contact)
    })
  })
  .catch(err => console.log("Error retrieving documents", err))
  .finally(result => {
      mongoose.connection.close();
      console.log('connection closed');
    });
  




const mongoose = require('mongoose')
const db = require('./db.json')
// check if password is supplied in node args
if(process.argv.length < 3){
  console.log('Please provide Mongo a password to connect to the database');
  process.exit(1)
}


const [,, password, name, number] = process.argv;
const newContact = {
  name,number
}

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
.then(console.log('*** LOG: Connection to Mongo accepted ***'))
.catch(err => {
  console.log("*** LOG: Mongo Connection Error: ", err)
});

// create Mongo schema
const contactSchema = new mongoose.Schema({
  name: String,
  number: String
});
// create Mongo Model
const Contact = mongoose.model('contact', contactSchema);

if(process.argv.length === 5){
  Contact.create(newContact)
  .then(result => {
    console.log(`added ${name} ${number} to phonebook`)
  })
  .catch(err => console.log("*** LOG: Error adding record", err))
  .finally(()=>{
    mongoose.connection.close();
    console.log('*** LOG: Mongo connection closed ***')
  })
}else{
//retrieve all db contacts
Contact.find({})
  .then(contacts => {
    console.log("Phonebook:")
    contacts.forEach(contact=>{
      console.log(`${contact.name} ${contact.number}`)
    })
  })
  .catch(err => console.log("*** LOG: Error retrieving documents", err))
  .finally(result => {
      mongoose.connection.close();
      console.log('*** LOG: connection closed ***');
    });
}



  




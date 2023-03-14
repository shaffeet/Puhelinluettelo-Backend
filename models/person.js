const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

console.log("connecting to", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB: ", error.message);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);

/*const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log("give password as argument");
    process.exit(1);
  }
  
  const password = process.argv[2];
  
  const url = `mongodb+srv://shaffeet:${password}@cluster.knjzvzt.mongodb.net/personApp?retryWrites=true&w=majority`;
  
  mongoose.set("strictQuery", false);
  mongoose.connect(url);
  
  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  });
  
  const Person = mongoose.model("Person", personSchema);
  
  if (process.argv.length === 3) {
    console.log("Phonebook:");
    Person.find({}).then((result) => {
      result.forEach((person) => {
        console.log(person.name, person.number);
      });
      mongoose.connection.close();
    });
  } else {
    const person = new Person({
      name: process.argv[3],
      number: process.argv[4],
    });
  
    person.save().then((result) => {
      console.log(
        "added",
        result.name,
        "number",
        result.number,
        "to the phonebook"
      );
      mongoose.connection.close();
    });
  }
  */

let mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dbAdmin:dbadmin@cluster0.q4x3f.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    requier: true,
    unique: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);

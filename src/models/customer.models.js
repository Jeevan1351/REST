let mongoose = require("mongoose");

mongoose.connect(
  "",
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

let express = require("express");

let personRoute = require("./routes/person.js");

let app = express();

let customerRoute = require("./routes/customer");

let path = require("path");

let bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  var d = Date();
  console.log(d.toString(), req.originalUrl, req.body);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));

//Handler for 404
app.use((req, res, next) => {
  res.status(404).send("In a maze huh??");
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.sendFile(path.join(__dirname, "../public/500.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server has started on ", PORT));

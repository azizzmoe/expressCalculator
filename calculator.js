const express = require("express");
const bodyParser = require("body-parser");

// App init
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// get method html directory from "/" 
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// post method for parsing body
app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", (req, res) => {
  const height = Number(req.body.height);
  const weight = Number(req.body.weight);
  const result = height * weight;
  res.send(`Your BMI is ${result}`);
});

app.listen(3000, () => {
  console.log("working on port 3000");
});

const express = require("express");
const app = express();


app.get("/", (req, res) => {

  res.send("I am from get request ")

  res.end()

})

app.post("/about", (req, res) => {
  res.send("I am from Post method ")
  res.end()

})


// git ignore
app.put("/", (req, res) => {

  res.send("i am from put methoed")
  res.end()


})

app.delete("/", (req, res) => {

  res.send("I am  from delete methoed ")

  res.end()
})

module.exports = app;
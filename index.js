// Copyright (c) 2015-present salesforce.com, inc.
// All rights reserved.

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(new Date().toString());
});

app.get("/about", function (req, res) {
  res.send("whattimeapi: Testing API.");
});

app.get("/random", function (req, res) {
  res.send(Math.floor(Math.random() * 100.0).toString());
});

app.listen(PORT, function () {
  console.log("whattimeapi: Listening on port", PORT);
})

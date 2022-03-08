// const server = require("./api/server");

// const port = 9000;

// START YOUR SERVER HERE

const express = require("express");

const Users = require("./api/users/model");

const server = express();

server.get("/json", (req, res) => {
  res.json({ a: 1, b: 2, c: 3 });
});

server.post("/json", (req, res) => {
  console.log("received POST!");
  res.end();
});

server.get("/api/users", (req, res) => {
  Users.find().then((users) => {
    res.json(users);
  });
});

server.delete("/api/users/:id", (req, res) => {
  Users.remove(req.params.id).then((user) => {
    res.json(user);
  });
});

server.listen(9000, () => {
  console.log("server is running");
});

// BUILD YOUR SERVER HERE
const express = require("express");
const Users = require("./users/model");
const server = express();

server.get("/api/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "The users information could not be retrieved",
        err: err.message,
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      if (user == null) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist" });
      } else {
        res.status(200).json(user);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}

// BUILD YOUR SERVER HERE
const express = require("express");
const Users = require("./users/model");
const server = express();
server.use(express.json());

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

server.put("/api/users/:id", (req, res) => {
  const user = req.body;

  Users.update(req.params.id, user)
    .then((user) => {
      if (user == null) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist" });
      } else {
        if (!req.body.name || !req.body.bio) {
          res.status(400).json({
            message: "Please provide name and bio for the user",
          });
        } else {
          res.status(200).json(user);
        }
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "The user information could not be modified",
        err: err.message,
      });
    });
});

server.delete("/api/users/:id", (req, res) => {
  Users.remove(req.params.id)
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

server.post("/api/users", (req, res) => {
  const body = req.body;
  if (!body.name || !body.bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
    return;
  } else {
    Users.insert(body)
      .then((newUser) => {
        res.status(201).json(newUser);
      })
      .catch((err) => {
        res.status(500).json({
          message: "There was an error while saving the user to the database",
          err: err.message,
        });
      });
  }
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}

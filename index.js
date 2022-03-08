// const server = require("./api/server");

// const port = 9000;

// START YOUR SERVER HERE

const express = require("express");

const Users = require("./api/users/model");

const server = express();

server.use(express.json());

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
        res.status(200).json(user);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
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
  if (!req.body.name) {
    res.status(400).json({ message: "Please provide name for the user" });
    return;
  } else if (!req.body.bio) {
    res.status(400).json({ message: "Please provide bio for the user" });
    return;
  }

  Users.insert(body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

server.listen(9000, () => {
  console.log("server is running");
});

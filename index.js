// const server = require("./api/server");

// const port = 9000;

// START YOUR SERVER HERE

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("Hello you beautiful people");
});

console.log("qwerty");
server.listen(9000, () => {
  console.log("server is running");
});

const server = require("./api/server");

const port = 9000;

// START YOUR SERVER HERE

// server.post("/json", (req, res) => {
//   console.log("received POST!");
//   res.end();
// });

// server.put("/api/users/:id", (req, res) => {
//   const user = req.body;

//   Users.update(req.params.id, user)
//     .then((user) => {
//       if (user == null) {
//         res
//           .status(404)
//           .json({ message: "The user with the specified ID does not exist" });
//       } else {
//         res.status(200).json(user);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });

// server.delete("/api/users/:id", (req, res) => {
//   Users.remove(req.params.id)
//     .then((user) => {
//       if (user == null) {
//         res
//           .status(404)
//           .json({ message: "The user with the specified ID does not exist" });
//       } else {
//         res.status(200).json(user);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });

// server.post("/api/users", (req, res) => {
//   const body = req.body;
//   if (!req.body.name) {
//     res.status(400).json({ message: "Please provide name for the user" });
//     return;
//   } else if (!req.body.bio) {
//     res.status(400).json({ message: "Please provide bio for the user" });
//     return;
//   }

//   Users.insert(body)
//     .then((user) => {
//       res.status(201).json(user);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });

server.listen(port, () => {
  console.log("listening on 9000");
});

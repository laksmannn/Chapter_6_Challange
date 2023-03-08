const express = require("express");
const {
  getAllUser,
  getSingleUser,
  creatUser,
  editUser,
  deleteUser,
} = require("./userController");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    users: [{ id: 1, username: "eman", password: "a" }],
  });
});

app.get("/api/user", getAllUser);
app.get("/api/user/:id", getSingleUser);
app.post("/api/user", creatUser);
app.put("/api/user/:id", editUser);
app.delete("/api/user/:id", deleteUser);

app.listen(3000, () => {
  console.log("tes");
});

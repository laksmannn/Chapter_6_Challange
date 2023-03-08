const express = require("express");
const {
  getAllUser,
  getSingleUser,
  creatUser,
  editUser,
  deleteUser,
} = require("./userController");
const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

const app = express();

app.use(express.json());

// Route Login,create-user,
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.set("view engine", "ejs");

//F.E
app.get("/", async (req, res) => {
  const users = await prisma.userGame.findMany().then((users) =>
    res.render("index", {
      users: users,
    })
  );
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/user/create", (req, res) => {
  res.render("create-user");
});

app.get("/user/update/:id", async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.userGame.findUnique({ where: { id } });
  res.render("update-user", { user });
});

// Route Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "superadmin") {
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

// create user
app.post("/user/create", async (req, res) => {
  const { username, password } = req.body;

  await prisma.userGame.create({
    data: { username, password },
  });
  res.redirect("/");
});

//create update
app.post("/user/update", async (req, res) => {
  const { id, username, password } = req.body;
  const numberId = Number(id);

  await prisma.userGame.update({
    where: { id: numberId },
    data: { username, password },
  });
  res.redirect("/");
});

// API
app.get("/api/user", getAllUser);
app.get("/api/user/:id", getSingleUser);
app.post("/api/user", creatUser);
app.put("/api/user/:id", editUser);
app.delete("/api/user/:id", deleteUser);

app.listen(3000, () => {
  console.log("tes");
});

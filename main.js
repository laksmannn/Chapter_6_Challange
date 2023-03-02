const express = require("express")
const { getAllUser, getSingleUser, creatUser, editUser, deleteUser } = require("./userController")

const app = express()

app.get("/", (req, res) => res.send ("hello world"))

app.get("/user", getAllUser)

app.get("/user/:id", getSingleUser)

app.post("/user", creatUser)

app.put("/user/:id", editUser)

app.delelte("/user/:id", deleteUser)


app.listen(3000, () => {
    console.log("tes")
})
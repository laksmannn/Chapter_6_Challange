const getAllUser = (req, res) => {
    const users = bacaDatabase ()

    res.json(users)
};
const getSingleUser = (req, res) => {
    const id = req.params.id

    const user = bacaDatabase(id)
    res.json(user)
};
const creatUser = (req, res) => {
    const newUser = req.body

    creatUserKeDatabase(newUser)
    res.json({ status :"creat user berhasil"})
};
const editUser = (req, res) => {
    const id = req.params.id
    const newUser = req.body

    updateUserKeDatabase(newUser)
    res.json({ status : "edit status berhasil"})
};
const deleteUser = (req, res) => {
    const id = req.params.id

    deleteUserKeDatabase(id)
    res.json({status : "delete status berhasil"})
};

module.exports = {getAllUser, getSingleUser, creatUser, editUser, deleteUser}
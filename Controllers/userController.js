import { userModel } from "../Model/userModel.js";


let addUser = async (req, res) => {
    try {
        let newUser = await userModel.create(req.body)
        res.send(newUser).status(200)
    } catch (err) {
        console.error("add user error", err)
        res.send("error add user ").status(500)
    }
}


let getAllTeam = async (req, res) => {
    try {
        let users = await userModel.find()
        res.send(users).status(200)
    } catch (err) {
        console.error("get all teams error", err)
        res.send("error get all user ").status(500)
    }
}


let getUserById = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id)
        res.send(user).status(200)
    } catch (err) {
        console.error("get user  by id error", err)
        res.send(" get user by id error ").status(500)
    }
}


let deleteById = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.send({ message: "deleted  user" }).status(200)
    } catch (err) {
        console.error("deleete user  by id error", err)
        res.send(" delete user by id error ").status(500)
    }
}

let updateById = async (req, res) => {
    try {
        let updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({ message: "updated successfully " ,updatedUser}).status(200)
    } catch (err) {
        console.error("update user  by id error", err)
        res.send(" update user by id error").status(500)
    }
}



export { addUser, getAllTeam, getUserById, deleteById,updateById }
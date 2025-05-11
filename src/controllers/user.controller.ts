import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    //get user
    const user = await getAllUsers();
    // console.log(users)
    return res.render("home", {
        user: user
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    console.log(id);

    return res.redirect("/");
}
const postCreateUser = async (req: Request, res: Response) => {

    const { fullName, email, address } = req.body;

    //handle create user
    await handleCreateUser(fullName, email, address)

    return res.redirect("/");
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs", {
        id: id,
        user: user
    });
}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullName } = req.body;
    //handle update user
    await updateUserById(id, email, address, fullName);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };
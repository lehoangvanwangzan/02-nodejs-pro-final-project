import { Request, Response } from "express";
import { getAllRoles, getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    //get user
    const user = await getAllUsers();
    // console.log(users)
    return res.render("home", {
        user: user
    });
}

const getCreateUser = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    console.log(id);

    return res.redirect("/");
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, username, phone, role, avatarFile, address } = req.body;
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
const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    return res.render("admin/user/createuserpage.ejs", { roles });
}

export { getCreateUserPage, getHomePage, getCreateUser, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };
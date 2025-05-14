import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "services/user.service";
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render("admin/dashboard/show.ejs")
}
const getAdminUserPage = async (req: Request, res: Response) => {
    const user = await getAllUsers();
    return res.render("admin/user/userpage.ejs", {
        user: user
    })
}


export { getDashboardPage, getAdminUserPage };
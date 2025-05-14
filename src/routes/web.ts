import express, { Express } from 'express';
import { postUpdateUser, getViewUser, getCreateUser, getHomePage, postCreateUser, postDeleteUser, getCreateUserPage } from 'controllers/user.controller';
import { getDashboardPage, getAdminUserPage } from 'controllers/admin/dashboard.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUser);
    router.post("/handle-create-user", postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user", postUpdateUser);

    // admin page
    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage);
    router.get("/admin/user/create-user-page", getCreateUserPage);
    router.post("/admin/handle-create-user", postCreateUser);
    //
    app.use("/", router);
}

export default webRoutes;

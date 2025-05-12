import express, { Express } from 'express';
import { postUpdateUser, getViewUser, getCreateUserPage, getHomePage, postCreateUser, postDeleteUser } from 'controllers/user.controller';
import getDashboardPage from 'controllers/admin/dashboard.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    router.post("/handle-create-user", postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user", postUpdateUser);

    // admin page
    router.get("/admin", getDashboardPage);
    //
    app.use("/", router);
}

export default webRoutes;

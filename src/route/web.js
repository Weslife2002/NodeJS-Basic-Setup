import express from "express"
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello World")
    });

    router.get("/db-connect", homeController.testConnectDB);


    return app.use("/", router);
}

module.exports = initWebRoute;
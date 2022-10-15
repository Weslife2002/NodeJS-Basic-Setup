import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoute from "./route/web"
require("dotenv").config();

let app = express();

// Config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`NodeJS app is listening on port ${port}`);
})

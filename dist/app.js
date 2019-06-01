"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
const userRoutes_1 = require("./routes/userRoutes");
class App {
    constructor() {
        this.crmRoutes = new crmRoutes_1.CrmRoutes();
        this.userRoutes = new userRoutes_1.UserRoutes();
        this.mongoUrl = 'mongodb+srv://jener:admin123@cluster0-aqcol.mongodb.net/test?retryWrites=true';
        this.app = express();
        this.config();
        this.crmRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.set('useFindAndModify', false);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useCreateIndex', true);
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
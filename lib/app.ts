import * as express from "express";
import * as bodyParser from "body-parser";
import { CrmRoutes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import { UserRoutes } from './routes/userRoutes';

class App {

    public app: express.Application;
    public crmRoutes: CrmRoutes = new CrmRoutes();
    public userRoutes: UserRoutes = new UserRoutes();

    public mongoUrl: string = 'mongodb+srv://jener:admin123@cluster0-aqcol.mongodb.net/test?retryWrites=true';  

    constructor() {
        this.app = express();
        this.config();        
        this.crmRoutes.routes(this.app);     
        this.userRoutes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }


    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.set('useFindAndModify', false);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useCreateIndex', true);
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });    
    }

}

export default new App().app;
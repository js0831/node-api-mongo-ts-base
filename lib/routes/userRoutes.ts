import {Request, Response} from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes {    

    public userController: UserController = new UserController();
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        app.route('/user')
        .get(this.userController.getUsers)        
        .post(this.userController.addNewUser);

        app.route('/user/:userId')
        .get(this.userController.getUserWithID)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser);
    }
}
import * as mongoose from 'mongoose';
import { UserSchema, UserModel } from '../models/userModel';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 


const User = mongoose.model('User', UserSchema);
export class UserController{

    public addNewUser (req: Request, res: Response) {   
        const user: UserModel = req.body;

        bcrypt.hash(user.password, 10, (err, hash) => {
            if(!err){
                user.password = hash;
                const newUser = new User(user);
                newUser.save((err, user) => {
                    if(err){
                        res.status(500).send(err);
                    }    
                    res.status(200).json(user);
                });
            }
        }); 
    }

    public getUsers (req: Request, res: Response) {           
        User.find({}, (err, user) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    }

    public getUserWithID (req: Request, res: Response) {           
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    } 

    public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        User.deleteOne({ _id: req.params.userId }, (err, user) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted user!'});
        });
    }
}

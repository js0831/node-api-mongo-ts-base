import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController{

    public addNewUser (req: Request, res: Response) {                
            let newUser = new User(req.body);
        
            // newUser.save((err, contact) => {
            //     if(err){
            //         res.send(err);
            //     }    
            //     res.json(contact);
            // });
            res.json({
                'test':'test'
            });
    }

    // public getContacts (req: Request, res: Response) {           
    //     Contact.find({}, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public getContactWithID (req: Request, res: Response) {           
    //     Contact.findById(req.params.contactId, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // } 

    // public updateContact (req: Request, res: Response) {           
    //     Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public deleteContact (req: Request, res: Response) {           
    //     Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted contact!'});
    //     });
    // }
}

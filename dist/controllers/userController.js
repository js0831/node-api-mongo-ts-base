"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const bcrypt = require("bcrypt");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        const user = req.body;
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (!err) {
                user.password = hash;
                const newUser = new User(user);
                newUser.save((err, user) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).json(user);
                });
            }
        });
    }
    getUsers(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    }
    getUserWithID(req, res) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    }
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.userId }, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map
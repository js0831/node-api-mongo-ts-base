import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
export const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}); 

// export const userModel
export interface UserModel{
  firstname:string;
  lastname:string;
  email:string;
  password:string;
}
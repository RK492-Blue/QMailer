const mongoose = require('mongoose');
//import mongoose from 'mongoose';

//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
const mongoose=require('mongoose');
const schema=mongoose.schema;

//Create a User Schema
const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    sector:{
        type: String,
        required: true
    },
    cell:{
        type: String,
        required: true
    },
    village:{
        type: String,
        required: true
    },
    id_card:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    secret_code:{
        type: String,
        required: true
    },

}, {timestamps:true});

//Create a model for the above schema

const User = mongoose.model('User', userSchema);
module.exports=User;
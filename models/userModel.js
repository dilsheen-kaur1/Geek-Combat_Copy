const { ObjectId } = require("mongodb");
const mongoose = require ("mongoose");
const { stringify } = require("nodemon/lib/utils");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    image:{
       type:String,
       required:true
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Number,
        required:true
    },
    is_Mentor:{
        type:Number,
        required:true
    },
    is_verified:{
        type:Number,
        default:0
    },
    yoj:{
        type:Number,
        required:true
    },
    token:{
        type:String,
        default:''
    },
    videos:[{
        tittle:{type:String,required:true},
        desc:{type:String},
        video:{type:String,required:true}
    }],
    scheduledInterview:[
        String
    ]
});



module.exports= mongoose.model('User',userSchema);
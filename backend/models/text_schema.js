const mongoose=require('../database/db');
const Schema = mongoose.Schema

let textStory_schema=  new Schema({
    title: {
       type: String,
       required: true,
    },
    name: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});  

module.exports= mongoose.model('TextStory', textStory_schema);

const mongoose = require("mongoose") 


const Schema = mongoose.Schema
const model = mongoose.model

const BooksSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    authors:[
        {
            type: String
        }
    ],
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }    
})

module.exports = model("books", BookSchema)
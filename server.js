const {MongoClient} = require('mongodb')
const mongoose = require("mongoose")
const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 3001

const app = express()


app.get("/api/books", (req, res, next)=>{


})

app.post("/api/books", (req, res, next)=>{
    let book = req.body;
    

})

app.delete("api/books/:id", (req, res, next)=>{
    

})

app.get("*", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"build/index.html"))
})


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});







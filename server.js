const express = require("express")
const path = require ("path")

const app = express()


app.get("/api/books", (req, res, next)=>{

})

app.post("/api/books", (req, res, next)=>{

})

app.delete("api/books/:id", (req, res, next)=>{

})

app.get("*", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"build/index.html"))
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server listening")
})



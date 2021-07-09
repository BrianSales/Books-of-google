const express = require("express")

const app = express()


app.get("/api/books", (req, res, next)=>{

})

app.post("/api/books", (req, res, next)=>{

})

app.delete("api/books/:id", (req, res, next)=>{

})

app.get("*", (req, res, next)=>{
    res.sendFile("client/build/index.html")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server listening")
})



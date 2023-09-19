const express=require("express")
const app=express()
const cors=require("cors")
const data=require("./data")
app.use(cors())

app.get("/data",(req, res)=>{
    res.send(data)
})
app.listen("5000",()=>{
    console.log("server is running 5000")
    console.log("server is running 5000")
})
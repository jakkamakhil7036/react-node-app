import express from 'express'
const app=express()
app.listen(800,()=>{
    console.log("screen Stated");
});
app.gcet("/",(req,res)=>{
    return res.send("hello world");
});
app.gcet("/greet",(req,res)=>{
    return res.send("hello world");
});
app.gcet("/name",(req,res)=>{
    return res.send("hello ");
});
app.gcet("/weather",(req,res)=>{
    return res.send("akhil ");
});
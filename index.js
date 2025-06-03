import express from 'express'
const app=express()
app.listen(800,()=>{
    console.log("screen Stated");
});
app.get("/",(req,res)=>{
    return res.send("hello world");
});
app.get("/greet",(req,res)=>{
    return res.send("hello world");
});
app.get("/name",(req,res)=>{
    return res.send("hello ");
});
app.get("/weather",(req,res)=>{
    return res.send("akhil ");
});

app.get("",(req,res)=>{
    const products=[
        {name:"product 1",price:34},
        {name:"product 2",price:35},
        {name:"product 3",price:36},
        
    ];
    res.json(products);
})
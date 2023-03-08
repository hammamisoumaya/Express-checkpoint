const express = require ('express');

const app = express();

const port = 5000 ;
const date = require ('./Public/Midelware/Date')
//route
app.get("/",(req,res)=>{
    res.send("hello you are doing well")
})

app.get("/getelement",(req,res)=>{
    res.send("you changed the root")
})

const path = require('path')
app.use(express.static(path.join(__dirname+"/Public")))
//affichage html

app.get('/homepage',(req,res)=>{
    res.sendFile(__dirname+"/Public/Home.html")
    
})


app.get('/produit',date,(req,res)=>{
    res.sendFile(__dirname+"/Public/Produit.html")
})



app.listen(port,(err)=>{
    err?console.log(err):console.log(`go to the port ${port}`)
})

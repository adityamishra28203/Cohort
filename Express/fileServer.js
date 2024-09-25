const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();


app.get("/files", function(req,res){
    fs.readdir(path.join(__dirname,'./files/'), (err,files) => {
        if(err){
            return res.status(500).json({ errror : 'Fales to retrieve files'})
    }
    res.json(files)
    })

})

app.get("/files/:fileName", function(req,res){
    const filePath = path.join(__dirname,'./files/',req.params.fileName)
    console.log(filePath)
    fs.readFile(filePath, 'utf8', (err,data) => {
        if(err){
            return res.status(404).send('File not found')
    }
    res.send(data)
    })

})

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

app.listen(3000)
module.exports = app;
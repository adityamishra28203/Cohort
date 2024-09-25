const express = require("express");

const app = express();

app.use(express.json())

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function(req,res){
    const userKidneys = users[0].kidneys;
    const numberOfKidneys = userKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<userKidneys.length;i++){
        if(userKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "kidney added"
    })
})

app.put("/", function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
    for (let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy= true;
    }
    res.json({})
}else{
    res.status(411).json({
        msg: "No unhealthy kidney"})
    }
})

app.delete("/", function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
    newKidneyArray = []
    for (let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy) {
            newKidneyArray.push(true)
        }
    }
    users[0].kidneys = newKidneyArray;
    res.json({})
}else {
    res.status(411).json({
        msg : "No unhealthy kidney"}
    )
}
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for (let i=0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);


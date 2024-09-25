const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456";
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://adityamishraubi:9460%40Db@cluster0.2rqwy.mongodb.net/user_app');

const Users = mongoose.model('Users', { username: String, firstName: String, password: String});


app.post("/signup", async function (req,res) { 
    const username = req.body.username;
    const firstName = req.body.firstName;
    const password = req.body.password;

    //to check whether user already exists used findOne()

    const userExists = await Users.findOne({username: username});

    if(userExists) {
        return res.status(400).send("User already exists")
    }

    const user = new Users({username: username, firstName: firstName, password: password});
    user.save();
    res.json({
        msg: "User successfully created"
    })

});

app.get("/users", function (req,res) {
    const token = req.headers.authorization;
    try {
        const  decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        return res.json({
            users : ALL_USERS.filter( function (value) {
                if(value.username ==  username) {
                    return false;
                }else {
                    return true;
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }

});
 
app.listen(3000);
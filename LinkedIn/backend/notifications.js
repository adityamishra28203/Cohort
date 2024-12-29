const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors()) 

app.use(express.json());


const notificationsCount = () => ({
    network: parseInt(Math.random()*10),
    jobs: parseInt(Math.random()*10),
    notifications: parseInt(Math.random()*10),
    messages: parseInt(Math.random()*10)
})


app.get("/notifications", function (req, res) {
    const notifyCount = notificationsCount();  // Generate new values on each request
    res.json({ 
        network: notifyCount.network,
        jobs: notifyCount.jobs,
        notifications: notifyCount.notifications,
        messages: notifyCount.messages
     });
});

app.listen(3000);
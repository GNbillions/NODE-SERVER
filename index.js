const express  = require('express')
const app = express();
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user');
const studentRouter = require('./src/routes/student');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users', userRouter)
app.use('/students', studentRouter)

mongoose.connect("mongodb+srv://Steve:Atl123anta1@cluster0.ttp52.mongodb.net/user-app?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((response) => {
    console.log("Db connected");
    app.listen(3000,() => {
        console.log("Server live")
    })
})










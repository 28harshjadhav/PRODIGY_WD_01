const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// Serving static files
app.use('/static', express.static('Static'));
app.use(express.urlencoded());

// set the template engine as pug
// words template and view can be used interchangeably
app.set('view engine', 'pug'); 

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get("/", (req, res)=>{
    const con = 'This is how we do it';
    const params = {'title': 'Pug I get it now', 'content': con};
    res.status(200).render('index.pug', params);
});

app.post("/", (req, res)=>{
    // console.log(req.body);
    age = req.body.age
    address = req.body.address
    gender = req.body.gender
    more = req.body.more
    name1 = req.body.name1

    let outputToWrite = `The name of the client is ${name1}, age of client is ${age}, residing at ${address}, more about him/her ${more}`
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'message': 'Your form has been submitted succesfully'};
    res.status(200).render('index.pug', params);
});

// app.get("/", (req, res) => {
//     res.send("this is my first express app with ravi");
// });


// app.get("/about", (req, res) => {
//     res.send("this is ABOUT PAGE of my first express app with RAVI");
// });

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


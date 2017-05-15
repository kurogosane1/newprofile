var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var fs = require('fs');
var path =require('path');
var bodyParser = require("body-parser");
var config = JSON.parse(fs.readFileSync('config.JSON'));
'use strict';
var nodemailer = require('nodemailer');

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("public"));


app.get("/", function (req, res) {

    res.render('index');

})

app.post("/", function (req, res) {

    console.log(req.body);
    console.log(config.password);
   // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khurshidmathlab@gmail.com',
        pass: config.password
    }
});

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'khurshidmathlab@gmail.com', // list of receivers
        subject: 'Hello', // Subject line
        text: "from" + req.body.name+ " " + req.body.message, // plain text body
        html: '<b>From: '+req.body.name+" "+ " message: "+ req.body.message+'</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.redirect("/");

});

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
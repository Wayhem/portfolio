const express = require('express');
var router = express.Router();
var Message = require('../models/message');
const request = require('request');
const bodyParser = require('body-parser');

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/', function (req,res) {
  console.log(req.body);
  if(
    req.body.captcha === undefined ||
    req.body.captcha === null ||
    req.body.captcha === ''
  ) {
    return res.json({"success":false, "msg":"Please select captcha"});
  }

  console.log('reached');
  // Secret key
  const secretKey = '6LdHHXwUAAAAAExWnzGK0A91gJNflMQVeq1hzjmt';

  //verify url
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

  // make request to verify url
  request(verifyUrl, (err, response, body)=> {
    body = JSON.parse(body);
    //if not successful
    if(body.success !== undefined && !body.success){
      return res.json({"success":false, "msg":"Failed captcha verification"});
    }

    // if successful
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let newMessage = {name: name, email: email, text: message};
    Message.create(newMessage, function (err, newMessage) {
      if (err) {
        return res.json({"success":false, "msg":"Server side error"});
      } else {
        return res.json({"success":true, "msg":"Captcha passed"});
      }
    })
  });
});

module.exports = router;

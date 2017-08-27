const utils = require('../utils.js');
const sparkPost = require('./spark-post.js');
const api_key = process.env.TEST_FAKE_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const viaMailGun = (emailObject, res)=> {
  
  var MailGunEmail = utils.formatFromEmailAddress(emailObject, domain);

  mailgun.messages().send(MailGunEmail, (error, body) => {
    if(error){
      console.log("There was an error sending the message via Mailgun ", error);

      console.log("Initiate sparkPost backup delivery method");
      sparkPost(emailObject, res);
    }

    console.log(body);
    res.send("Message successfully sent.");
    
  });
    
}

module.exports = viaMailGun;
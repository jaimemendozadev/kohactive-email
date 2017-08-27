const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const viaMailGun = (req, res)=> {
    
  //req will be an obj with key/value pairs
  var fromEmail = `${req.body.FROM}@${domain}`;
  var toEmail = req.body.TO; 
  var subject = req.body.SUBJECT; 
  var content = req.body.CONTENT;

  var data = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    text: content
  };

  console.log("preformatted data in MailGun is ", data);


  res.send("successfully hit MailGun controller");
   
  /*
  mailgun.messages().send(data, (error, body) => {
    if(error){
      console.log("There was an error sending the message via Mailgun ", error);
      res.send("There was an error sending the message.");
    }

    console.log(body);
    res.send("Message successfully sent.");
    
  });

  */



    
}

module.exports = viaMailGun;
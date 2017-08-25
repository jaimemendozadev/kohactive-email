var helper = require('sendgrid').mail;


var viaSendGrid = (req, res)=> {

  //email will be an obj with key/value pairs
  var email = req.body;
  
  var fromEmail = new helper.Email(email.FROM); //'test@example.com'
  var toEmail = new helper.Email(email.TO); //'test@example.com'
  var subject = email.SUBJECT; //'Sending with SendGrid is Fun'
  var content = new helper.Content('text/plain', email.CONTENT);  //'and easy to do anywhere, even with  Node.js'

  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  
  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  console.log("the request inside send grid is ", request)
  
  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
      res.send("There was an error sending your email");
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);

    res.send(`Your response has a statusCode of ${response.statusCode}, a body of ${response.body}, and headers of ${response.headers}`);
  });

}

module.exports = viaSendGrid;


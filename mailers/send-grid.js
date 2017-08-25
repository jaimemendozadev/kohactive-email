var helper = require('sendgrid').mail;


var viaSendGrid = (email)=> {
  //email will be an obj with key/value pairs
  
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
  
  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });

}

module.exports = viaSendGrid;


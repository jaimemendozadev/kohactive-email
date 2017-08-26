var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
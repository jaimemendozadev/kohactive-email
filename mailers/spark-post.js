const SparkPost = require('sparkpost');
const options = {
  headers: {
    Authorization: process.env.SPARKPOST_API_KEY
  }
}

const client = new SparkPost(process.env.SPARKPOST_API_KEY, options);

const viaSparkPost = (req, res)=> {
    
  //req will be an obj with key/value pairs
  var fromEmail = req.body.FROM; 
  var toEmail = req.body.TO; 
  var subject = req.body.SUBJECT; 
  var content = req.body.CONTENT;

  client.transmissions.send({
    content: {
      from: fromEmail,
      subject: subject,
      text: content
    },
    recipients: [
      {address: toEmail}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
    res.send("Message successfully sent.");
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
    res.send("There was an error sending the message.");
  });
    
}

module.exports = viaSparkPost





const SparkPost = require('sparkpost');
const options = {
  headers: {
    Authorization: process.env.SPARKPOST_API_KEY
  }
}

const domain = process.env.SPARKPOST_DOMAIN;
const client = new SparkPost(process.env.SPARKPOST_API_KEY, options);

const viaSparkPost = (emailObj, res)=> {

  var SPFromEmail = `${emailObj.from}@${domain}`; 

  client.transmissions.send({
    content: {
      from: SPFromEmail,
      subject: emailObj.subject,
      html: emailObj.html
    },
    recipients: [
      {address: emailObj.to}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
    res.end();

  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
    res.end();
  });
    
}

module.exports = viaSparkPost





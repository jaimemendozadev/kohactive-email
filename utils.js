function formatEmailObject(req){
  //req will be an obj with key/value pairs
  var from = req.body.FROM;
  var toEmail = req.body.TO; 
  var subject = req.body.SUBJECT; 
  var content = req.body.CONTENT;

  var email = {
    from: from,
    to: toEmail,
    subject: subject,
    html: `<html><body><p>${content}</p></body></html>`
  };

  return email;
}

function formatFromEmailAddress(emailObj, domain){
  var newEmailObj = {};

  for (var key in emailObj){
    newEmailObj[key] = emailObj[key];
  }
    
  newEmailObj.from = `${emailObj.from}@${domain}`;

  return newEmailObj;
}

module.exports = {
  formatEmailObject,
  formatFromEmailAddress
}


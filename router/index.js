const mailers = require('../mailers');
const utils = require('../utils.js');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hit the API!');
});

//mailGun will be main email delivery system
//sparkPost will be backup delivery system
router.post('/email', (req, res) => {

  //extract info from req.body and create emailObj
  var emailObj = utils.formatEmailObject(req);

  mailers.mailGun(emailObj, res);
});


module.exports = router;



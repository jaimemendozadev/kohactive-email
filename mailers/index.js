const sendGrid = require('./send-grid.js');
const sparkPost = require('./spark-post');
const mailGun = require('./mailgun.js');

module.exports = {
  sendGrid,
  sparkPost,
  mailGun
}
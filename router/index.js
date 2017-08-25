const mailers = require('../mailers');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hit the API!');
});

router.post('/email', mailers.sendGrid);

// router.post('/email', (req, res) => {
//   console.log("req.body is ", req.body);
  
// });


module.exports = router;
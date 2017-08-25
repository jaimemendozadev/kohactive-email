const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/api', router);


app.listen(3000, ()=>{
  console.log("Listening on port 3000");
})
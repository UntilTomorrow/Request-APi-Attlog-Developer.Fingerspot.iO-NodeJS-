const port = 3000;
const express = require('express');
const app = express();
////////////////////////

////
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://developer.fingerspot.io/api/get_attlog',
  'headers': {
    'Authorization': 'Bearer N2KWNZN4XXIP8GV0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"trans_id":"1", "cloud_id":"C269248053182536", "start_date":"2022-08-09", "end_date":"2022-08-09"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
 
  console.log(JSON.stringify({"status": 200, "response": response.body}));
});

app.listen(port, () => console.log('running http://localhost:' + port));

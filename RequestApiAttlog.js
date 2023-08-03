const port = 3000;
const express = require('express');
const app = express();
////////////////////////

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://developer.fingerspot.io/api/get_attlog',
  'headers': {
    'Authorization': 'Bearer xxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"trans_id":"1", "cloud_id":"xxx", "start_date":"2023-07-15", "end_date":"2023-07-15"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
 
  const parsedResponse = JSON.parse(response.body);
  const formattedResponse = JSON.stringify({"status": 200, "response": parsedResponse}, null, 2);
  console.log(formattedResponse);
});

app.listen(port, () => console.log('running http://localhost:' + port));

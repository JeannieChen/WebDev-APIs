const request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); 
  var parsedData = JSON.parse(body);
  console.log(`${parsedData.name} is working at ${parsedData.company.name}.`); 
});
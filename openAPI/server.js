const express = require('express');
const request = require('request')

const app = express();

app.get('/' , (req , res)=>{
    let city = req.query.city;
    const request = require('request');
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f63620a24e38984dde9c0ab2b54ca76`, function (error, response, body) {
     if (response.statusCode==200) {
        let data = JSON.parse(body)
        res.send(`the weather in you city "${city}" is ${data.weather[0].description}, and humidity is ${data.main.humidity}`)
     }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
})

app.listen(3000,()=>{
    console.log("this is a server 3000");
})
import express from "express";
import axios from "axios";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://random-stuff-api.p.rapidapi.com/joke',
    headers: {
      Authorization: process.env.AUTHORIZATION,
      'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.API_KEY,
    }
  };

  axios.request(options).then(function (response) {
  	console.log(response.data);
    res.json(response.data)
  }).catch(function (error) {
  	console.error(error);
    res.send(error)
  });
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
})

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs')

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.use(express.json())


app.get("/", (req, res) => {
    res.send('Welcome! This API contains information about the most popular JDM vehicles dedicated to car enthusiasts. Visit /carlist to access the vehicle data.')
  })

app.get("/carlist", (req, res) => {
    let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'))
  
    res.json(carData)
  })
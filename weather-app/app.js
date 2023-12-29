const express = require('express');
const weatherController = require('./controllers/weatherController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/getWeather', weatherController.getWeather);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
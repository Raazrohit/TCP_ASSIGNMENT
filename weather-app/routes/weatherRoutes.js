const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname + '/..' });
});

router.post('/weather', async (req, res) => {
  const { city } = req.body;
  try {
    const weatherData = await weatherController.getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

module.exports = router;

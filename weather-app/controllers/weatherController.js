const axios = require('axios');

exports.getWeather = async (req, res) => {
  const { city } = req.body;
  
  try {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'eddcd36b67b52f949583720953dd5610';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.send({ success: true, data: weatherData });
  } catch (error) {
    console.error(error);
    res.send({ success: false, error: 'Unable to fetch weather data.' });
  }
};

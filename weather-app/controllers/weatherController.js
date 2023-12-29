const axios = require('axios');

const getWeatherByCity = async (city) => {
  try {
    const apiKey = 'eddcd36b67b52f949583720953dd5610';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getWeatherByCity };

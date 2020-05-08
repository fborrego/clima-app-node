const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0a13ab7f2c96fb3802e625a47c5bcecc&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
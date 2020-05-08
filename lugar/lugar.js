const axios = require('axios');

const getLugarLatLng = async(direccionEntrada) => {

    const encodeURL = encodeURI(direccionEntrada);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '4488dfad4dmsh35dff7d311772a2p1fd965jsn8e01e367d5a4' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccionEntrada}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
'use strict';
const weatherData = require('./asseets/weather.json')

class City {

    constructor(date,description) {
    
        this.date = date;
        this.description = description;

    }
}

const express = require('express');


const server = express();
console.log(weatherData);


const PORT = 3001;

server.get('/', (request, response) => {

    response.send('api is done')

})

server.get('/weather', (request, response) => {


    let cityName = request.query.cityName
    //    console.log(request.query);
    //    console.log(request.query.cityName);

    let weatherinfo = weatherData.find((item) => {

        // if( item === weatherData.city_name){}
        if (item.city_name === cityName) {

            return item
        }
    })
    // let newCity = weatherinfo.city_name
    weatherinfo.city_name = new City(weatherinfo.country_code,weatherinfo.data[2].datetime)
    response.send( weatherinfo.city_name);
    console.log(newCity);

})

server.get('*', (request, response) => {

    response.status(404).send(' 404 route is not found')


})




server.listen(PORT, () => {

    console.log(`from PORT ${PORT}`);
})

// 
import api from 'helpers/api';

export const getWeather = () => {
    // we can make city and other params as dynamic
    return api.get('http://api.openweathermap.org/data/2.5/weather?q=Yerevan,am&appid=b28c046e7468308f9b3bf8853aef78d5')
        .then(response => response.json());
};
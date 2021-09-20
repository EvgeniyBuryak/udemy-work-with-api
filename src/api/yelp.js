import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.zp.ru/v1',
    params: {
        limit: 15,        
        city_id: 826
    }
});
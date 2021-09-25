import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.zp.ru/v1/vacancies',
    params: {
        limit: 50,        
        geo_id: 826
    }
});
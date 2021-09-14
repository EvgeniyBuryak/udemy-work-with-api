import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.zp.ru/v1'
    /*baseURL: 'https://api.yelp.com/v3/businesses',
    header: {
        Authorization: 'Bearer JqwbqX2ElVuFiAcjipfbk_myyJjqZXMXhkAV1maaeM4agnLD1d-S3zi9vyN8Su9wx3RUXWnEiI6N6nJmlNjgPG0NKCY2ofeBI1JFXUaCVZ2vu9XqWj6rvzh4Af4uYXYx',
    },*/
});
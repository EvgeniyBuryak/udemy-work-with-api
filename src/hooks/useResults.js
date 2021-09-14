import { useState, useEffect } from 'react';
import zpRu from '../api/yelp';

export default () => {    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        const currentDate = new Date(),
            h = currentDate.getHours(),
            m = currentDate.getMinutes(),
            s = currentDate.getSeconds();

        try {
            const response = await zpRu.get('/collapsed_vacancies', {
                params: {
                    limit: 5,
                    //term: searchTerm,
                    q: searchTerm,
                    city_id: 826
                }
            });
            //setResults(response.data.vacancies);
            const vacancies = response.data.vacancies;

            const updateResults = [...results, ...vacancies.map((vacancy, index) => {

                return {
                    id: index,
                    zp_id: vacancy.id,
                    header: vacancy.header
                }
            })];

            setResults(updateResults);
        } catch (err) {
            console.log(`Current time: ${h}:${m}:${s} - ${err}`);
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    // is first rendered. BAD CODE!
    // searchApi('pasta');

    useEffect(() => {
        searchApi();
    }, []);

    return [searchApi, results, errorMessage];
};

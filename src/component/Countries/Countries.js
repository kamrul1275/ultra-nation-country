import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className="countries">
            {
                countries.map(country => <Country key={country.alpha2Code} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
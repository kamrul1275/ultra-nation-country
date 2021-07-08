import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import './CountryDetail.css'
import Header from '../Header/Header';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, []);
    const { flag, name, nativeName, region, capital, population } = country;
    let history = useHistory();
    const goBackHomePage = () => {
        history.push("/home");
    }
    return (
        <div>
            <Header></Header>
            <div className="detail-box-style">
                <div className="country-detail">
                    <img style={{ width: '326px', height: '180px' }} src={flag} alt="" />
                    <h2>Name: {name}</h2>
                    <h3>Native Name: {nativeName}</h3>
                    <h4>Region: {region}</h4>
                    <h5>Capital City: {capital}</h5>
                    <h6>Population: {population}</h6>
                    <Button style={{width: '100%'}} onClick={goBackHomePage} variant="info">Home Page</Button>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
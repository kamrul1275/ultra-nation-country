import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {flag, name} = props.country;
    
    
    return (
        <div className="country-box">
            <img style={{width: '290px', height: '180px', marginBottom: '20px'}} src={flag} alt=""/>
            <br/>
            <h2>Name: {name}</h2> <br/>
            <Link to={`/country/${name}`}><Button variant="info">See Details</Button></Link>
        </div>
    );
};

export default Country;
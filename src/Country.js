import React, { Component } from 'react';
import './country.css'
const Country = ({region,flag,capital,population,name}) => {
    return (
        <div className='country' >
            <img src={flag} alt='' />
            <div className='country__info' >
                <h3>{name}</h3>
                <p>Population : {population}</p>
                <p>Region : {region}</p>
                <p>Capital : {capital}</p>
            </div>
            
        </div>
    );
}

export default Country;
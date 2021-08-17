import './countrydetail.css'
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetail = () => {
    let {state} = useLocation();
    const country = state;
    console.log(country)
    return ( 
        <div>
            {JSON.stringify(country)}
        </div>
     );
}
 
export default CountryDetail;
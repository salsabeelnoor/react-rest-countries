import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useLoaderData()[0];
    const {area, capital, continents, name, population, flags, region } = countryDetails; 
    console.log(countryDetails)
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p>Area: {area}</p>
            <p><small>Capital: {capital[0]}</small></p>
            <p><small>Continents: {continents[0]}</small></p>
        </div>
    );
};

export default CountryDetails;
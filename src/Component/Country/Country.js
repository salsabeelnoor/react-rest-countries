import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, area, region, population, flags} = props.country;
    console.log(props)
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div >
       <h1>Visiting Every Country of the world!!!</h1>
       <h3>Available countries: {countries.length}</h3>
       <div className='countries-container'>
       {
        countries.map(country => <Country 
            key={country.cca3}
            country={country}
            ></Country>)
      }
       </div>
    </div>
    );
};

export default Countries;
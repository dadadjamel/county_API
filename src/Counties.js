import { Button, MenuItem, Select } from '@material-ui/core';
import React, { Component, useState, useEffect, use } from 'react';
import './countries.css'
import Country from './Country';
import SearchIcon from '@material-ui/icons/Search';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const Countries = () => {
    useEffect(() => {
        getcountry()
    }, [])
    const [input, setinput] = useState('')
    const [region, setregion] = useState('africa')
    const [res, setres] = useState([])
    const [index, setindex] = useState(0)
    const [isdark,setisdark] = useState(true)
    const url = 'https://restcountries.eu/rest/v2/'

    const getcountry = (country = 'al') => {
        if (country === '') {
            Axios.get(`https://restcountries.eu/rest/v2/all`).then(response => setres(response.data))
        } else {
            Axios.get(`https://restcountries.eu/rest/v2/name/${country}`).then(response => setres(response.data))
        }
    }
    const onsubmit = (e) => {
        e.preventDefault()
        getcountry(input)
    }

    const onregionchange = (e) => {
        const _region = e.target.value
        setregion(_region)
        Axios.get(`https://restcountries.eu/rest/v2/region/${_region}`).then(response => setres(response.data))
    }
    // https://restcountries.eu/rest/v2/region/europe
    const next=()=>{
        setindex(index=>index+1)
    }
    const prev=()=>{
        setindex(index=>index-1)
    }
    const history = useHistory();
    const handlrCountryClick = (country) => {
        history.push({
            pathname : '/'+country.name,
            state : country
        })
    }
    
    return (
        <div>
            <div className='app__search' >
                <div className='app__searchContiner' >
                    <SearchIcon />
                    <form onSubmit={(e) => onsubmit(e)} >
                        <input value={input} onChange={(e) => setinput(e.target.value)} placeholder='Search for a country' />
                    </form>
                </div>
                    <Button onClick={prev} disabled={index === 0} variant='contained' >Prev</Button>
                    <Button onClick={next} disabled={index > (res.length / 8 ) -1  } variant='contained' >Next</Button>
                <Select onChange={(e) => onregionchange(e)} variant='outlined' value={region} >
                    <MenuItem value="africa" >Africa</MenuItem>
                    <MenuItem value="americas" >America</MenuItem>
                    <MenuItem value="asia" >Asia</MenuItem>
                    <MenuItem value="europe" >Europe</MenuItem>
                    <MenuItem value="oceania" >Oceania</MenuItem>
                </Select>
            </div>
            <div className='app__body' >
                {
                    res.slice(index * 8, (index + 1) * 8).map(country => (
                        <div onClick={() => handlrCountryClick(country)} key={country.name} >
                        <Country  name={country.name} population={country.population} capital={country.capital} flag={country.flag} region={country.region} />
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default Countries;
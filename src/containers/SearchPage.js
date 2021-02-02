import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../context';

const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 95%;
    margin-left: 5%;
    margin-right: auto;
    margin-bottom: 23px;
`;
const SearchFullTimejobs = styled.div`
    margin-bottom: 32px;
`;

const Input = styled.input`
    margin-right: 12px;
`;
const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
`;

function SearchPage() {
    const {state, handlefulltimejobs, handleLocation} = useContext(GlobalContext);
    
    function handleCheckbox(e) {
        handlefulltimejobs( e.target.value);
    }

    function handleJobsLocation(e) {
        handleLocation( e.target.value);
    }

    return (
        <Search>
            <SearchFullTimejobs>
                <Input 
                    id="fulltimejobs" 
                    value="fulltime" 
                    onChange={handleCheckbox} 
                    name="fulltime" 
                    type="checkbox"/>
                <Label htmlFor="fulltimejobs">Full time</Label>
            </SearchFullTimejobs>
            <div>
                <label htmlFor="location">LOCATION</label>
                <input type="text" id="location" onChange={handleJobsLocation} placeholder="City, state, zip code or country"/>
                <ul>
                    <li>
                        <input id="london" type="radio"/>
                        <label htmlFor="london">London</label>
                    </li>
                    <li>
                        <input id="Amsterdam" type="radio"/>
                        <label htmlFor="Amsterdam">Amsterdam</label>
                    </li>
                    <li>
                        <input id="New Work" type="radio"/>
                        <label htmlFor="New Work">New Work</label>
                    </li>
                    <li>
                        <input id="Berlin" type="radio"/>
                        <label htmlFor="Berlin">Berlin</label>
                    </li>
                </ul>
            </div>
        </Search>
    )
}

export default SearchPage

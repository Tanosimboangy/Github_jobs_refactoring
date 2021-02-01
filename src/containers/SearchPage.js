import React from 'react';
import styled from 'styled-components';

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
    input {
        margin-right: 12px;
    }
    label {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #334680;
    }
`;

function SearchPage() {
    return (
        <Search>
            <SearchFullTimejobs>
                <input id="fulltimejobs" type="checkbox"/>
                <label htmlFor="fulltimejobs">Full time</label>
            </SearchFullTimejobs>
            <div>
                <label htmlFor="location">LOCATION</label>
                <input type="text" id="location" placeholder="City, state, zip code or country"/>
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
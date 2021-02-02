import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context';
import { Search } from '../components';

function SearchPage() {
    const {handlefulltimejobs, handleLocation, handleSpecificLocation} = useContext(GlobalContext);
    const [checked, setChecked] = useState(false);
    
    function handleCheckbox(e) {
        setChecked(!checked)
        if (checked) {
            handlefulltimejobs( e.target.value);
        }
    }

    function handleJobsLocation(e) {
        handleLocation( e.target.value);
    }

    function handleChange(e) {
        console.log(e.target.value);
        handleSpecificLocation(e.target.value)
    }

    return (
        <Search>
            <Search.SearchFullTimejobs>
                <Search.Input 
                    id="fulltimejobs" 
                    value="fulltime" 
                    onChange={handleCheckbox} 
                    name="fulltime" 
                    type="checkbox"/>
                <Search.Label htmlFor="fulltimejobs">Full time</Search.Label>
            </Search.SearchFullTimejobs>
            <Search.Container>
                <Search.InputLabel htmlFor="location">LOCATION</Search.InputLabel>
                <Search.InputLocation type="text" id="location" onChange={handleJobsLocation} placeholder="City, state, zip code or country"/>
                <Search.Wrapper>
                    <Search.Subwrapper>
                        <Search.Input id="london" type="checkbox" onChange={handleChange} value="London"/>
                        <Search.Label htmlFor="london">London</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input id="Amsterdam" type="checkbox" onChange={handleChange} value="Amsterdam"/>
                        <Search.Label htmlFor="Amsterdam">Amsterdam</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input id="New Work" type="checkbox" onChange={handleChange} value="New work"/>
                        <Search.Label htmlFor="New Work">New Work</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input id="Berlin" type="checkbox" onChange={handleChange} value="Berlin"/>
                        <Search.Label htmlFor="Berlin">Berlin</Search.Label>
                    </Search.Subwrapper>
                </Search.Wrapper>
            </Search.Container>
        </Search>
    )
}

export default SearchPage

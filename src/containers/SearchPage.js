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
        const el = e.target.value;
        handleLocation(el);
    }

    return (
        <Search>
            <Search.FullTimejobs>
                <Search.Input 
                    id="fulltimejobs" 
                    value="fulltime" 
                    onChange={handleCheckbox} 
                    name="fulltime" 
                    type="checkbox"/>
                <Search.Label htmlFor="fulltimejobs">Full time</Search.Label>
            </Search.FullTimejobs>
            <Search.Containers>
                <Search.InputLabel htmlFor="location">LOCATION</Search.InputLabel>
                <Search.InputLocation type="text" id="location" onChange={handleJobsLocation} placeholder="City, state, zip code or country"/>
                <Search.Wrapper>
                    <Search.Subwrapper>
                        <Search.Input 
                            id="london" 
                            type="radio" 
                            checked={location === "London"} 
                            onChange={handleJobsLocation} 
                            value="London"/>
                        <Search.Label htmlFor="london">London</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input 
                            id="Amsterdam" 
                            type="radio" 
                            checked={location === "Amsterdam"} 
                            onChange={handleJobsLocation} 
                            value="Amsterdam"/>
                        <Search.Label htmlFor="amsterdam">Amsterdam</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input 
                            id="New 
                            Work" type="radio" 
                            checked={location === "New work"} 
                            onChange={handleJobsLocation} 
                            value="New work"/>
                        <Search.Label htmlFor="New Work">New Work</Search.Label>
                    </Search.Subwrapper>
                    <Search.Subwrapper>
                        <Search.Input 
                            id="Berlin" 
                            type="radio" 
                            checked={location === "Berlin"} 
                            onChange={handleJobsLocation} 
                            value="Berlin"/>
                        <Search.Label htmlFor="Berlin">Berlin</Search.Label>
                    </Search.Subwrapper>
                </Search.Wrapper>
            </Search.Containers>
        </Search>
    )
}

export default SearchPage

import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderPage from '../Pages/HeaderPage';
import MainLists from '../Pages/MainLists';
import JobDetails from '../Pages/JobDetails';
import styled from 'styled-components';

const Heading = styled.h1`
    max-width: 90%;
    padding-top: 12px;
    padding-left: 12px;
    margin: auto;
    text-align: left;
    margin-bottom: 32px;
`;

function App() {
    return (
        <>
            <Heading><b>Github</b> Jobs</Heading>
            <Switch>
                <Route exact path="/">
                    <HeaderPage 
                        // data={data} 
                        // dispatch={dispatch}
                        />
                    <MainLists 
                        // data={data} 
                        // dispatch={dispatch}
                        // loading={loading}
                    />
                </Route>
                <Route path="/:detail">
                    <JobDetails/>
                </Route>
            </Switch>
        </>
    )
}

export default App

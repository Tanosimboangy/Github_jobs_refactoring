import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderPage from './Pages/HeaderPage';
import MainLists from './Pages/MainLists';
import JobDetails from './Pages/JobDetails';
import styled from 'styled-components';

const Heading = styled.h1`
    max-width: 90%;
    padding-top: 12px;
    padding-left: 12px;
    margin: auto;
    text-align: left;
    margin-bottom: 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #282538;


    span {
        font-weight: 700;
    }
`;

function App() {
    return (
        <>
            <Heading><span>Github</span> Jobs</Heading>
            <Switch>
                <Route exact path="/">
                    <HeaderPage />
                    <MainLists />
                </Route>
                <Route path="/:detail">
                    <JobDetails/>
                </Route>
            </Switch>
        </>
    )
}

export default App

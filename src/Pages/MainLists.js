import React from 'react'
import styled from 'styled-components';
import SearchPage from '../containers/SearchPage';
import JobsLists from '../containers/JobsLists';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 720px) {
        max-width: 90%;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

function MainLists() {
    return (
        <Main>
            <SearchPage />
            <JobsLists />
        </Main>
    )
}

export default MainLists

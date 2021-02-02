import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {GlobalContext} from '../context';
import globe from '../../img/globe.svg';
import time from '../../img/time.svg';
import { JobLists } from '../components';

function DisplayingListsPage() {
    const {state} = useContext(GlobalContext);
    const data = state.data;
    const loading = state.loading;
    return (
        <>
        {
            loading === true ?
            <h1>Loading...</h1> :
            <JobLists>
                {data.map(item => {
                    return (
                        <JobLists.Lists key={item.id}>
                            <Link to={`/${item.id}`}>
                                <JobLists.CompanyInfo>
                                    <JobLists.Image src={item.company_logo} />
                                    <JobLists.Wrapper>
                                        <JobLists.Company>{item.company}</JobLists.Company>
                                        <JobLists.Title>{item.title}</JobLists.Title>
                                        <JobLists.Button className="fulltime_button">{item.type}</JobLists.Button>
                                    </JobLists.Wrapper>
                                </JobLists.CompanyInfo>
                                <JobLists.Location>
                                    <JobLists.ImageContainer>
                                        <JobLists.Img src={globe} alt="this is the location"/> {item.location}
                                    </JobLists.ImageContainer>
                                    <JobLists.ImageContainer>
                                        <JobLists.Img src={time} alt="this when it is realesed"/> {item.created_at}
                                    </JobLists.ImageContainer>
                                </JobLists.Location>
                            </Link>
                        </JobLists.Lists>
                    )
                })}
            </JobLists>
        }
        </>
    )
}

export default DisplayingListsPage;
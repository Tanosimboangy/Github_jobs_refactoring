import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
import {GlobalContext} from '../context';
import arrow_back from '../../img/arrow_back.svg';
import time from '../../img/time.svg';

const Container = styled.div`
    @media(min-width: 720px) {
        max-width: 90%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;
const LinkBack = styled.div`
    h3 {
        font-family: "Poppins_bold";
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #B9BDCF;
        padding-left: 2.5%;
        padding-bottom: 16px;
    }
    div {
        font-family: "Poppins_regular";
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #334680;
        padding-left: 2.5%;
        padding-bottom: 36px;
        max-width: 240px;
        a {
            color: #1E86FF;
        }
    }
`;

const Goback = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.5%;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: #1E86FF;
`;

const Wrapper = styled.div`
    margin-left: 2.5%;
    margin-right: 5%;
    p {
        font-family: "Roboto_regular";
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #334680;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .description_header {
        ul {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            color: #334680;
            font-family: "Roboto_bold";
            li:first-of-type {
                padding-right: 20px;
                padding-bottom: 10px;
                h2 {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    max-width: 400px;
                }
            }
            li:nth-of-type(2) {
                width: 100px;
                padding: 10px;
                border: 1px solid blue;
                border-radius: 10px;
                font-weight: bold;
                font-size: 16px;
                line-height: 14px;
                white-space: nowrap;
            }
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: "Roboto_regular";
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #B7BCCE;
        }
    }
    div:nth-of-type(2) {
        ul {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding-top: 32px;
            padding-bottom: 32px;
            li:first-of-type {
                padding-right: 20px;
                img {
                    width: 100px;
                }
            }
            li:nth-of-type(2) {
                display: flex;
                flex-direction: column;
                h4 {
                    font-family: "Roboto_bold";
                    padding-bottom: 10px;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 21px;
                    color: #334680;
                    margin: 0;
                    max-width: 200px;
                }
                span {
                    font-family: "Roboto_regular";
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    color: #B9BDCF;
                }
            }
        }
    }

    @media(min-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 60%;
        margin-right: 0;
        margin-left: auto;
        .descriptions {
            margin-left: 10%;
            margin-right: 0;
        }

    }
`;

function JobsDetails() {
    const {state} = useContext(GlobalContext);
    const data = state.data;
    const { detail } = useParams();
    const detailItem = data.filter(item => item.id === detail);
    
    return (
        <Container>
            <LinkBack>
                <Link to="/">
                    <Goback><img src={arrow_back} alt="arrow_back"/> Go back to search</Goback>
                </Link>
                <h3>How to Apply</h3>
                <div>Please email a copy of your resume and online portfolio to <a href="https://kasisto.com/">kasisto.com</a> & CC <a href="https://kasisto.com/">eric@kasisto.com</a></div>
            </LinkBack>
            {detailItem.map(item => {
                return (
                    <Wrapper key={item.id}>
                        <div className="description_header">
                            <ul>
                                <li><h2>{item.title}</h2></li>
                                <li>{item.type}</li>
                            </ul>
                            <div><img src={time}/> {new Date(item.created_at).toLocaleDateString()} days ago.</div>
                        </div>
                        <div>
                            <ul>
                                <li><img src={item.company_logo} /></li>
                                <li>
                                    <h4>{item.company}</h4>
                                    <span>{item.location}</span>
                                </li>
                            </ul>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: item.description}} />
                    </Wrapper>
                )})
            }
        </Container>
    )
}

export default JobsDetails;


import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {GlobalContext} from '../context';
import globe from '../../img/globe.svg';
import time from '../../img/time.svg';

const ListsContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 2.5%;
    margin-right: 2.5%;

    @media(min-width: 720px) {
        margin: 0;
    }
`;
const ListsDetails = styled.div`
    padding: 12px;
    background-color: white;
    box-shadow: 0px 0px 4px black;
    border-radius: 8px;
    width: 90%;
    margin: auto;
    margin-bottom: 23px;
    div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-bottom: 17px;
        img {
            max-width: 90px;
            border-radius: 8px;
        }
        ul {
            padding-left: 16px;
            li:nth-of-type(1) {
                padding-bottom: 8px;
                font-family: "Roboto_bold";
                font-weight: bold;
                font-size: 12px;
                line-height: 14px;
                color: #334680;
            }
            li:nth-of-type(2) {
                padding-bottom: 20px;
                font-family: "Roboto_regular";
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                color: #334680;
            }
            li:nth-of-type(3) {
                button {
                    background: white;
                    border-radius: 5px;
                    border: 1px solid black;
                    padding: 5px;
                }
            }
        }
    }

    @media(min-width: 720px) {
        width: 80%;
        margin-right: 0;
        margin-left: 17%;
    } 
`;
const Location = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    margin-left: auto;
    li {
        font-family: "Roboto_regular";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #B9BDCF;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
            padding-right: 10px;
        }
    }
`;

function DisplayingListsPage() {
    const {state} = useContext(GlobalContext);
    const data = state.data;
    return (
        <ListsContainer>
            {data.map(item => {
                return (
                    <ListsDetails key={item.id}>
                        <Link to={`/${item.id}`}>
                            <div>
                                <img src={item.company_logo} />
                                <ul>
                                    <li>{item.company}</li>
                                    <li>{item.title}</li>
                                    <li><button className="fulltime_button">{item.type}</button></li>
                                </ul>
                            </div>
                            <Location>
                                <li><img src={globe} alt="this is the location"/> {item.location}</li>
                                <li><img src={time} alt="this when it is realesed"/> {item.created_at}</li>
                            </Location>
                        </Link>
                    </ListsDetails>
                )
            })}
        </ListsContainer>
    )
}

export default DisplayingListsPage


// company: "Secureframe"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXlYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34d3fdfa508617db088f05bd635cf8164a6dccf/logo.gif"
// company_url: "https://secureframe.com"
// created_at: "Fri Jan 29 01:06:58 UTC 2021"
// description: "<p><a href="https://secureframe.com/">Secureframe</a> is on a mission to make the most powerful security simple and accessible for every organization. Getting secure can take months, slowing a company's speed-to-market and sales. We believe security -- when done right -- should accelerate innovation and growth. That's why we started Secureframe.</p>↵<p>Secureframe is backed by top VCs including <a href="https://gradient.com/">Gradient Ventures</a> (Google's AI Fund), Base10, BoxGroup, Village Global, and many more.</p>↵<p>This role can be in San Francisco or Remote. Secureframe is fully remote till at least June 2021.</p>↵<h3>What you'll do</h3>↵<ul>↵<li>Scope, design, and implement new end-to-end functionality</li>↵<li>Contribute to codebases in Ruby, Typescript, and Go</li>↵<li>Help architect core parts of our infrastructure from the ground up</li>↵<li>Work closely with designers and product managers to solve ambiguous user challenges</li>↵</ul>↵<h3>Who we're looking for</h3>↵<ul>↵<li>2+ years of experience working with modern programming languages like Ruby, Javascript, Python, etc.</li>↵<li>Strong understanding of computer science fundamentals</li>↵<li>Ability to communicate and collaborate effectively</li>↵<li>Passion and ability to work well in a fast-paced, rapidly changing environment</li>↵</ul>↵<h3>Benefits</h3>↵<ul>↵<li>Medical, dental, and vision benefits for you and your dependent(s)</li>↵<li>Unlimited PTO</li>↵<li>401(k)</li>↵<li>Paid family leave</li>↵<li>Ground floor opportunity as an early member of the team</li>↵</ul>↵<p><em>Secureframe is an equal opportunity employer. We aim to create an environment where every team member at Secureframe feels like they belong so they can have a greater impact on our business and customers. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</em></p>↵<p>Secureframe is fully remote until at least June 2021. We are committed to the health and safety of our employees and will not require employees to be in our office(s) until a vaccine is widely available.</p>↵"
// how_to_apply: "<p><a href="https://jobs.lever.co/secureframe/020d7563-b902-4002-9a82-ee2c77d0f8c0?lever-origin=applied&amp;lever-source%5B%5D=GitHub">Apply Here</a></p>↵"
// id: "7cbcbf10-f5ed-4f80-b2dd-7e565c9dd9af"
// location: "San Francisco or Remote"
// title: "Software Engineer"
// type: "Full Time"
// url: "https://jobs.github.com/positions/7cbcbf10-f5ed-4f80-b2dd-7e565c9dd9af"
// __pro
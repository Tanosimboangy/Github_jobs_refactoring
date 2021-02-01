import styled from 'styled-components'

export const Container = styled.div`
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
export const Details = styled.div`
    padding: 12px;
    background-color: white;
    border-radius: 8px;
    width: 90%;
    margin: auto;
    margin-bottom: 23px;
    @media(min-width: 720px) {
        width: 90%;
        margin-right: 0;
        margin-left: 7%;
    } 
`;

export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 17px;
`;
export const Image = styled.img`
    max-width: 90px;
    border-radius: 8px;
`;
export const Wrapper = styled.ul`
    padding-left: 16px;
`;
export const Company = styled.li`
    padding-bottom: 8px;
    font-family: "Roboto_bold";
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
`;
export const Title = styled.li`
    padding-bottom: 20px;
    font-family: "Roboto_regular";
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #334680;
`;
export const Button = styled.button`
    background: white;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
`;

export const Location = styled.div`
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
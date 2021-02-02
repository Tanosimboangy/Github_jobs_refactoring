import styled from 'styled-components';

const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 95%;
    margin-left: 5%;
    margin-right: auto;
    margin-bottom: 23px;

    @media(min-width: 720px) {
        margin-left: 0;
    }
`;
const SearchFullTimejobs = styled.div`
    margin-bottom: 32px;
`;
const Input = styled.input`
    margin-right: 12px;
`;
const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputLabel = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
    margin-bottom: 14px;
`;
const InputLocation = styled.input`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    /* font-family: Roboto; */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: #B9BDCF;
    padding: 17px 30px;
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 24.5px;
`;
const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Subwrapper = styled.li`
    margin-bottom: 16px;
`;
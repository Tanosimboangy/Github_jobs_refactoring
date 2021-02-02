import styled from 'styled-components';

export const Container = styled.div`
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
export const FullTimejobs = styled.div`
    margin-bottom: 32px;
`;
export const Input = styled.input`
    margin-right: 12px;
`;
export const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
`;
export const Containers = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InputLabel = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
    margin-bottom: 14px;
`;
export const InputLocation = styled.input`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    /* font-family: Roboto; */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: #45495e;
    padding: 17px 30px;
    border: none;
    outline: none;
    margin-bottom: 24.5px;
`;
export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const Subwrapper = styled.li`
    margin-bottom: 16px;
`;
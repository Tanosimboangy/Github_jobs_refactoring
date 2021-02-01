import styled from 'styled-components'

export const Container = styled.header`
  background-image: url('https://raw.githubusercontent.com/onja-org/github-jobs/main/backgroundImg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 40px;
  max-width: 95%;
  margin: auto;
  margin-bottom: 42px;
  padding: 40px 0;

  @media (min-width: 720px) {
    max-width: 90%;
    margin: auto;
    margin-bottom: 42px;
  }
`

export const Form = styled.form`
  margin-right: 15%;
  margin-left: 15%;
  max-width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 2px;
  box-shadow: 0 0 2px black;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 16px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`

export const Button = styled.button`
  border: none;
  line-height: 2.5;
  padding: 6px 20px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: #001ddc;
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
`

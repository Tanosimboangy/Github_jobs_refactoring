import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        background: #f3f3fa5c;
        color: #333333;
        font-size: 16px;
        margin: 0;
        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                list-style: none;
            }
        }
        a {
            text-decoration: none;
        }
    }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Poppins-bold";
        src: local(Poppins-bold),
        url(./Fonts/Poppins-Bold.woff2) format("woff2"),
        url(./Fonts/Poppins-Bold.woff) format("woff"),
    }
    @font-face {
        font-family: "Poppins-Medium";
        src: local(Poppins-Medium),
        url(./Fonts/Poppins-Medium.woff2) format("woff2"),
        url(./Fonts/Poppins-Medium.woff) format("woff"),
    }
    @font-face {
        font-family: "Poppins-Regular";
        src: local(Poppins-Regular),
        url(./Fonts/Poppins-Regular.woff2) format("woff2"),
        url(./Fonts/Poppins-Regular.woff) format("woff"),
    }
    @font-face {
        font-family: "Roboto-bold";
        src: local(Roboto-bold),
        url(./Fonts/Roboto-bold.woff2) format("woff2"),
        url(./Fonts/Roboto-bold.woff) format("woff"),
    }
    @font-face {
        font-family: "Roboto-Medium";
        src: local(Roboto-Medium),
        url(./Fonts/Roboto-Medium.woff2) format("woff2"),
        url(./Fonts/Roboto-Medium.woff) format("woff"),
    }
    @font-face {
        font-family: "Roboto-Regular";
        src: local(Poppins_Regular),
        url(./Fonts/Poppins-Regular.woff2) format("woff2"),
        url(./Fonts/Poppins-Regular.woff) format("woff"),
    }
    html, body {
        font-family: "Roboto-Regular";
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

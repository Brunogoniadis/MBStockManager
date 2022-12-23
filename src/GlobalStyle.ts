import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --error-color:#FF0000;
        --primary-color: #1665CE;
        --color-disable: #555555;
        --color-disableButton: #f8f8f8;
        --color-buttonHover:#FFFFFF;
        --color-text:#1e1e1e;
        --color-containerPages:#fbfbfb;
        --color-backgroundMain:#F8E9E9 ;
        --color-border:#b9b9b9;

    font-size: 60%;
    }
    @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
        }
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    body {
        background: var(--color-backgroundMain);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: overlay;
    }

    body, input, button, textarea{
        font-family: 'Poppins';
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }

    button {
        cursor: pointer;
        font-style: ;
    }
    
`

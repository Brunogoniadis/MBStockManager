import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    min-width: 350px;
    max-width: 480px;
    height: 400px;
    border-radius: 5px;
    background-color: var(--color-containerPages);
    box-shadow: 1.0px 4px 4px rgba(0, 0, 0, 0.5);
    padding: 15px;
    padding-top: 25px;


    Button{
        margin-top: 30px;
        margin-bottom: 5px;
    }

    .Link{
        background-color: aliceblue;
    }


`
export const Logo= styled.img`
    margin-bottom: 57px;
`

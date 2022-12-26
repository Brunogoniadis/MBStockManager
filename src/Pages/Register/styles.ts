import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    
    width: 400px;
    height: 380px;
    border-radius: 16px;
    background-color: var(--color-containerPages);
    box-shadow: 1.0px 4px 4px rgba(0, 0, 0, 0.5);
    padding: 40px;

    Button{
        margin-top: 25px;
    }
`
export const AsideContainer= styled.div`
    width: 100%;
    height: 90%;
    background-color: beige;
`


export const Logo= styled.img`
    margin-bottom: 57px;
`